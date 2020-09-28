import React, {useState, useEffect, useContext} from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../app/assets/stylesheets/App.css'
import '../app/assets/stylesheets/reset.css'
import SplashHeader from './components/SplashHeader';
import SchemeSelector from './components/SchemeSelector'
import About from './components/About'
import SessionModal from './components/sessions/SessionModal'
import Schemes from './components/schemesPage/Schemes'
import SchemeShow from './components/schemesPage/ShowScheme';
import Footer from './components/Footer';
import { SchemeProvider } from './contexts/SchemeContext';
import { UserSchemesProvider } from './contexts/UserSchemesContext'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import { ColorsContextProvider } from './contexts/ColorsContext';

const App = () => {  
  let [sessionModal, setSessionModal] = useState(null);
  let [currentUser, setCurrentUser] = useContext(CurrentUserContext)

  useEffect(()=>{
      if (window.currentUser){
        setCurrentUser(window.currentUser)
        delete window.currentUser
      }
    },[]
  )

  let greyOut = sessionModal ?         
    <div 
      className= "absolute top-0 left-0 w-100percent h-107percent z-1 opacity-50 bg-black" 
      onClick={() => setSessionModal(null)}
    />
    :
    null

  const modal = sessionModal ?
    <SessionModal sessionModal={sessionModal} setSessionModal={setSessionModal}/> 
    : 
    null
  ;
  return (
    <div className="App">
      <Router>
        <div className="min-h-80percent h-fit bg-yellow">
          <SplashHeader setSessionModal={setSessionModal}/>
          <SchemeProvider>
          <UserSchemesProvider>
          <ColorsContextProvider>
            <Switch>
              <Route exact path="/about" component={About}/>
              <Route exact path="/scheme_selector" component={SchemeSelector}/>
              <Route exact path="/:userId/schemes" component={Schemes}/>
              <Route exact path="/:userId/scheme/:schemeId" component={SchemeShow}/>
              <Route path="/" component={DefaultPage}/>
                {/* {activeTab} */}
            </Switch>
          </ColorsContextProvider>
          </UserSchemesProvider>
          </SchemeProvider>
          <Footer/>
        </div>
        {greyOut}
        {modal}
      </Router>
    </div>
  );
};

const DefaultPage = () => <Redirect to="/scheme_selector"/>

export default App;

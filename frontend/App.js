import React, {useState, useEffect, useContext} from 'react';

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../app/assets/stylesheets/App.css'
import '../app/assets/stylesheets/reset.css'
import SplashHeader from './components/SplashHeader';
import ColorList from './components/ColorList'
import About from './components/About'
import SessionModal from './components/sessions/SessionModal'
import Footer from './components/Footer';
import { SchemeProvider } from './contexts/SchemeContext';
import { CurrentUserContext } from './contexts/CurrentUserContext'

const App = () => {  
  let [activeTab, setActiveTab] = useState(<ColorList/>);
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
          <SplashHeader setActiveTab={setActiveTab} setSessionModal={setSessionModal}/>
          <SchemeProvider>
            <Switch>
              <Route exact path="/about" component={About}/>
              <Route path="/" component={ColorList}/>
                {/* {activeTab} */}
            </Switch>
          </SchemeProvider>
          <Footer/>
        </div>
        {greyOut}
        {modal}
      </Router>
    </div>
  );
};

export default App;

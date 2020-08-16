import React, {useState} from 'react';
import '../app/assets/stylesheets/App.css'
import '../app/assets/stylesheets/reset.css'
import SplashHeader from './components/SplashHeader';
import ColorList from './components/ColorList'
import SessionModal from './components/sessions/SessionModal'
import Footer from './components/Footer';

const App = () => {  
  let [activeTab, setActiveTab] = useState(<ColorList/>);
  let [sessionModal, setSessionModal] = useState(null);
  let [currentUser, setCurrentUser] = useState(null)

  let greyOut = sessionModal ?         
    <div 
      className= "absolute top-0 left-0 w-100percent h-107percent z-1 opacity-50 bg-black" 
      onClick={() => setSessionModal(null)}
    />
    :
    null

  
  const modal = sessionModal ?
    <SessionModal sessionModal={sessionModal} setSessionModal={setSessionModal} setCurrentUser={setCurrentUser}/> 
    : 
    null
  ;
  
  return (
    <div className="App">
      <div className="min-h-80percent h-fit bg-yellow">
        <SplashHeader setActiveTab={setActiveTab} setSessionModal={setSessionModal} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        {activeTab}
        <Footer/>
      </div>
      {greyOut}
      {modal}
    </div>
  );
};

export default App;

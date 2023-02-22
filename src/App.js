import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { Route, Routes } from 'react-router-dom'; 


const App = (props) => {

  return (

    
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs
              store={props.store} />} />
            <Route path='/profile' element={<Profile
              postData={props.state.profilePage.postData}
              dispatch={props.dispatch}
              newPostText={props.state.profilePage.newPostText}
            />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;

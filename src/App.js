import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/profile/' element={<ProfileContainer />}>
            <Route path=':userId' element={<ProfileContainer />} />
          </Route>
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<NewsContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>


  );
}

export default App;
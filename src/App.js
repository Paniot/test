import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs
              dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData} />} />
            <Route path='/profile' element={<Profile
              postData={props.state.profilePage.postData}
              addPost={props.addPost} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

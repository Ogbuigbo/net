import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import { auth } from './config';
import HomeScreen from './screens/HomeScreen';
import Loginscreen from './screens/Loginscreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{

   const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
          // logged in
          dispatch(
            login({
            uid: userAuth.displayName,
            email: userAuth.email
          })
          );
      }
      else{
        // logged out

        dispatch(logout())
      }
    })
      return unsubscribe;
  }, [dispatch])
 

  return (
    <div className="app">
      {!user ? (<Loginscreen />) : (
        <Routes>
          <Route exact path='profile' element={<><ProfileScreen /></>} />
        <Route exact path='/' element={<><HomeScreen /></>} />
        </Routes>
      )}
    </div>
  );
}

export default App;

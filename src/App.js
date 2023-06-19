import './App.css';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice';
import { login } from './features/userSlice';
import ProfileScreen from './ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }))
        console.log(userAuth);
      }else{
        dispatch(logout())
      }
    })

    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>

            <Route exact path="/">
              <HomeScreen />
            </Route>

            <Route path="/profile">
              <ProfileScreen/>
            </Route>

        </Switch>
        )}
        
      </Router>
    </div>
  );
}


export default App;

import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav'
import { selectUser } from './features/userSlice'
import { useSelector } from "react-redux";
import { auth } from './firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src='https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0'/>
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>
                            plans
                        </h3>
                        <button onClick={()=>auth.signOut()} className='profileScreen__Signout'>Sign Out </button>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
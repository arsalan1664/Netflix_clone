import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useHistory } from 'react-router-dom'

function Nav() {
    const [show,handleShow]= useState(false)
    const history = useHistory()

    const transitionNavBar =()=>{
        if (window.scrollY>100)  {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
            return()=>window.removeEventListener("scroll",transitionNavBar)
    },[])

  return (
    <div className={`nav ${show && 'nav__black'}`}>

        <div className='nav__contents'>
            <img onClick={() => history.push("/")} className='nav__logo' src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png'/>
            <img onClick={() => history.push("/profile")} className='nav__avatar'src='https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0'/>
        </div>
    </div>
  )
}

export default Nav
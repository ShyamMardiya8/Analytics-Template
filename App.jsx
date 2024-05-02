import { useState } from 'react'
import './App.css'
import images from './images/avatar2.png'
import Right from './assets/Componenets/Rightinner/Right'
import Person_black from './images/person_black.png'
import Eye_black from './images/eye_black.png'
import Cross_hair from './images/cross_hair.png'
import Diamond_black from './images/Diamond.png'
import Black_icon from './images/icon.png'
import History from './images/history.png'
import Setting from './images/settings.png'
import Bars from './images/bars.png'

function App() {
  const [count, setCount] = useState(0)

  const shoot = () => {
 
    let clicks = document.querySelectorAll('.leftmain');
    
    clicks.forEach(click => {
         
        if (click.style.display === 'block') {
            click.style.display = 'none';  
        } else {
            click.style.display = 'block';  
        }
    });
}



  return (
    <>
      <div className="logoba">
    <img src={Bars} alt="" className='barsmain' onClick={shoot}/>
    </div>
    <div className="main">
     <div className="leftmain">
      <div className="leftinner">
        <div className="infomain">
          <img src={images} alt=""  className='logomain'/>
          <div className="welcome">Welcome, <span className="mike">Mike</span></div>
        </div>
      </div>
      <div className="dashboard">
        <div className="dash">Dashboard</div>
        <ul>
          <li className='Focus'><img src={Person_black} alt="" className='logodas'/>Overview</li>
          <li><img src={Eye_black} alt="" className='logodas'/>Views</li>
          <li><img src={Person_black} alt="" className='logodas'/>Trafic</li>
          <li><img src={Cross_hair} alt="" className='logodas'/>Geo</li>
          <li><img src={Diamond_black} alt="" className='logodas'/>Order</li>
          <li><img src={Black_icon} alt="" className='logodas'/>News</li>
          <li><img src={Person_black} alt="" className='logodas'/>General</li>
          <li><img src={History} alt="" className='logodas'/>History</li>
          <li><img src={Setting} alt="" className='logodas'/>Setting</li>
        </ul>
      </div>
     </div>
     <Right />
     </div>
    </>
  )
}

export default App

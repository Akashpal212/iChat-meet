import React from 'react'
import { Link } from 'react-router-dom';

import "./home.css"

function Home() {
  return (
    <div id='home'>
      <div className="main">
        <div className="left">
          <div className="head">
            <h2>iChat<br />Video Conference</h2>
            <h3>Effortless Online Meetings Anytime, Anywhere</h3>
            <p>
              A video call meeting is the perfect way to connect with colleagues,<br /> clients, or friends in real-time, regardless of location. </p>
          </div>
          <div>
            <Link to='/login' className="btn"><div id="dot"></div> <div className='enter'>ENTER INSIDE THE ROOM</div> <i class="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <img src="./img/home3.png" alt="" style={{ width: "40rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;
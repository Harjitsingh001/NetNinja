import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
      <div className="container">
        <img src="https://www.glofox.com/wp-content/uploads/2021/02/gym-website.jpg" alt="Snow" style={{ width: "100%", position: "sticky", height: "400px" }} />

        <h1 className="centered">Build  Your {""}<span style={{ color: "orange", fontSize: "70px" }}>
          Body
        </span>
          <span style={{ marginLeft: "10px" }} >{" "}
            Transform Your <span style={{ color: "green", fontSize: "70px" }}>Life</span>
          </span>
        </h1>
      </div>

      <div className='mainDiv'>

        <div className='leftSide'>

          <img src='https://static.vecteezy.com/system/resources/thumbnails/000/539/724/small/dumbbell_2__28b_w_29.jpg' style={{ height: "100px", width: "200px", mixBlendMode: "multiply" }}></img>
          <h2 style={{ color: "orange", textDecoration: "none" }}>PORTTAMT NULLA QUAM NUNC, ACCUMSAN CONGUE
          </h2>
          <h1 style={{ color: "grey" }}>
            Explore Our offer
          </h1>

        </div>

        <div className='rightSide'>

          <div className='upper'>
            <h4>left1</h4>
            <h4>left2</h4>
          </div>

          <div className='upper'>
            <h4>right1</h4>
            <h4>right2</h4>
          </div>
        </div>

      </div>

    </>


  )
}

export default About
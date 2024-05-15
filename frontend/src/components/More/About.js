import React from 'react'
import"./About.css"
const About = () => {
  return (
    // <div>
    //       <h1 class="centered">Centered</h1>

    //     <img src='https://www.glofox.com/wp-content/uploads/2021/02/gym-website.jpg'></img>
    // </div>

<div className="container">
<img src="https://www.glofox.com/wp-content/uploads/2021/02/gym-website.jpg" alt="Snow" style={{width:"100%",position:"sticky"}}/>

<h1 className="centered">Build  Your {""}<span style={{color:"red",fontSize:"50px"}}>
Body 
</span>
<span >{" "}
  Transform Your <span style={{color:"green",fontSize:"50px"}}>Life</span>
</span>
 </h1>
</div>
  )
}

export default About
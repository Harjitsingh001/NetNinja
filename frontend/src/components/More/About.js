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
      <hr style={{ marginTop: "60px", width: "60%", color: "red" }}></hr>

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
            <div className='ok'><span style={{ color: 'lightgreen' }}>1.</span> Welcome to Workout Buddy! Our state-of-the-art facility boasts a wide range of equipment and modern amenities designed to cater to all your fitness needs. Experience the best in strength training, cardio, and functional fitness in a clean and spacious environment.</div>
            <div className='ok'><span style={{ color: 'lightgreen' }}>2.</span> From high-intensity interval training to calming yoga sessions, we offer a variety of classes suitable for all fitness levels. Our professional instructors are dedicated to helping you stay motivated and achieve your fitness goals through dynamic and engaging workouts.</div>
          </div>

          <div className='upper'>
            <div className='ok'><span style={{ color: 'lightgreen' }}>3.</span> Our certified trainers provide personal guidance tailored to your individual fitness journey. Whether you’re looking to build muscle, lose weight, or improve overall health, our trainers are here to support and inspire you every step of the way.</div>
            <div className='ok'><span style={{ color: 'lightgreen' }}>4.</span>
              Join our vibrant fitness community and connect with like-minded individuals who share your passion for health and wellness. At  Workout Buddy, we believe in fostering a supportive and encouraging atmosphere where everyone can thrive.
            </div>
          </div>
        </div>

      </div>
      <hr style={{ marginTop: "60px", width: "60%", color: "red" }}></hr>
      <p style={{fontFamily:"fantasy",fontSize:"100px",marginLeft:"400px"}}> Acsess Our Plans</p>
      <div className='plans'>
       
        <div className='plan1'>

        </div>
        <div className='plan1'>

        </div>
        <div className='plan1'>

        </div>
      </div>

    </>


  )
}

export default About
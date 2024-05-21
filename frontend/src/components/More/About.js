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
      <p style={{ fontFamily: "fantasy", fontSize: "100px", marginLeft: "400px" }}>Memberships</p>
      <div className='plans'>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className='pls'>3 Months</p>
              <span className="money">$100/M
              </span >
              <span style={{ color: "grey", marginLeft: "10px" }}>USD</span>           </div>
            <div className="flip-card-back">
              <h1>5 Classes</h1>
              <hr style={{ width: "130px" }}>
              </hr>
              <p>10 In Personal Training Sessions
              </p>
              <p>Full Gym & Facilities Access</p>
              <p>Boxing Ring, Free Events</p>
              <p>Gym Tour & Training Instruction</p>
              <button className='btnn'> Get Started</button>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className='pls'>6 Months</p>
              <span className="money">$75/M
              </span> <span style={{ color: "grey", marginLeft: "10px" }}>USD</span>
            </div>
            <div className="flip-card-back">
              <h1>10 Classes</h1>
              <hr style={{ width: "130px" }} />

              <p>20 In Personal Training Sessions
              </p>
              <p>Full Gym & Facilities Access</p>
              <p>Boxing Ring, Free Events</p>
              <p>Gym Tour & Training Instruction</p>
              <button className='btnn'> Get Started</button>

            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className='pls'>1 year</p>
              <span className="money">$50/M
              </span>  <span style={{ color: "grey", marginLeft: "10px" }}>USD</span>          </div>
            <div className="flip-card-back">
              <h1>20 Classes</h1>
              <hr style={{ width: "130px", }} />

              <p>40 In Personal Training Sessions
              </p>
              <p>Full Gym & Facilities Access</p>
              <p>Boxing Ring, Free Events</p>
              <p>Gym Tour & Training Instruction</p>
              <button className='btnn'> Get Started</button>

            </div>
          </div>
        </div>

      </div>
      <hr style={{ marginTop: "60px", width: "60%", color: "red" }}></hr>


      <div className='works'>
        <p style={{ display: "flex", justifyContent: "center", color: "green", padding: "20px", fontSize: "30px", fontStyle: "italic" }}> Procedure</p>
        <p style={{ display: "flex", justifyContent: "center", fontSize: "65px", fontStyle: "italic", marginTop: "-30px" }}>How It Works !</p>


        <div className='three'>
          <div className='four'>
            <img className='photo' src='https://americanclinicsoman.com/wp-content/uploads/2018/11/Obesity-surgeries.jpg'></img>
            <p className='goal'>Trusted Services</p>
          </div>
          <div className='four'><img className='photo' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYfBXt-e_OjYPmsZy0Zow4VI4127bN8dFmkfqBRzX5T3SywuSE'></img>
            <p className='goal'>Natural Ways
            </p>
          </div>
          <div className='four'><img className='photo' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQG3d3pSLtLGot1XGnW47OKicq2dDKIX7todDY2txwFeope7UWw'></img>
            <p className='goal'>Routine Exercise
            </p>
            <p className='goal'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            </p>
          </div>
          <div className='four'> <img className='photo' src='https://s3.envato.com/files/470799208/5ffdeaa57361c416886cf8d6_withmeta.jpg'></img>
            <p className='goal'>Success/Goal
            </p>
          </div>

        </div>
      </div>

      <img style={{ width: "100%" }} src='https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg'>

      </img>    </>


  )
}

export default About
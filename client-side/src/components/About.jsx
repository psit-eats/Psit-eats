import React from 'react'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
        <h2>This is ABOUT US page for our project.</h2>
        <UserClass name={"Ayushi"} location={"UP"}/>;
        <UserClass name={"Shivam"} location={"UP"}/>;
        <UserClass name={"Rohan"} location={"UP"}/>;
    </div>
        
  )
}

export default About
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const Education = [
    {
      school: 'St. Francis College',
      major: 'Business Management',
    },
    {
      school: 'General Assembly',
      major: 'Software Development'
    }
  ]
  const Certificates = [

    {
      source:'University of Michigan',
      title: 'User Experience & Interaction Design for AR/VR/MR/XR'
    },
    {
      source: 'Google',
      title: 'Foundations of User Experience (UX) Design'
    }

  ]

  const Skills = [
    {
        name: 'Javascript',
        comfort: 8,
        frontEnd: true,
        backEnd: true,
    },

    {
        name: 'CSS',
        comfort: 5,
        frontEnd: true,
        backEnd: false,
    },

    {
        name: 'React',
        comfort: 6,
        frontEnd: true,
        backEnd: true,
    },

    {
        name: 'HTML',
        comfort: 8,
        frontEnd: true,
        backEnd: false,
    },

    {
        name: 'Postman',
        comfort: 8,
        frontEnd: false,
        backEnd: true,
    },
]

const ulStyle = {
backgroundColor: '#b974b6'
}

const pageStyle = {
  backgroundColor: '#25254B',
}

return (
    
<div style={pageStyle}>
<div><h1>Experience</h1></div>
    <h2>Education</h2>
    <hr />
      <ul style={ulStyle}>
      {`Institution: ${Education[0].school} `}
      {`Major: ${Education[0].major}`}
      
      </ul>

    <h2>Certificates</h2>
    <hr />
      <ul style={ulStyle}>
        {Certificates.map((cert,index) =>
        <li key={index}>
          {`School: ${cert.source} Course:${cert.title}` }
          </li>
                )}
      </ul>

    <h2>Skills</h2>
    <hr />
      <ul style={ulStyle}>
          {Skills.map((skill,index) => 
              <li key={index}>
              {skill.frontEnd ? `Frontend Skill: ${skill.name}` : `Backend Skill: ${skill.name}`}
              </li>
              )}
      </ul>
      </div>
  
)
}

export default App;

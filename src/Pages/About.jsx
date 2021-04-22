import React from 'react'
import Skillse from '../components/Skillse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
       <>
       <div className="about-sec">
           <div className="row">
               <div className="col-lg-6 left-sec">
                   <div  className="about-all">

                 
                   <h1>About Me</h1>
                   <h2>I am a Front End Developer, A pure Developer</h2>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores vel reiciendis quas expedita dolorem repellendus numquam, corrupti ea, saepe et perspiciatis perferendis explicabo voluptate reprehenderit ad quo maiores repudiandae nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero unde sed incidunt, suscipit saepe, numquam corporis deserunt itaque cumque illum aliquam. Dolore dolores voluptas dignissimos saepe ipsam reiciendis omnis adipisci.</p>
                   <div className="icons">
                       <a href="https://www.facebook.com/">
                       <FontAwesomeIcon icon={faFacebook} className="link"/>
                       </a>
                     <a href="https://twitter.com/">
                     <FontAwesomeIcon icon={faTwitter } className="link"/>
                     </a>
                     <a href="https://www.linkedin.com/feed/">    
                     <FontAwesomeIcon icon={ faLinkedin} className="link"/></a>
                       <a href="https://github.com/Tasfiq97/Tasfiq97/"> <FontAwesomeIcon icon={faGithub } className="link"/></a>
                       

                   </div>
                   </div>
               </div>
               <div data-aos="fade-right" className="col-6 right-sec">
                   <div className="skills">
                   <div className="title">
                <h1>My skills</h1>

            </div>
                       <Skillse skill={"Html"} progress={"90%"} width={"90%"}/>
                       <Skillse skill={"Sass"} progress={"90%"} width={"90%"}/>
                       <Skillse skill={"javascript"} progress={"30%"} width={"30%"}/>
                       <Skillse skill={"Css"} progress={"90%"} width={"90%"}/>
                       <Skillse skill={"React"} progress={"50%"} width={"50%"}/>
                       <Skillse skill={"J-query"} progress={"90%"} width={"90%"}/>
                       <Skillse skill={"Bootstrap"} progress={"90%"} width={"90%"}/>
                       

                   </div>
               </div>
               
           </div>
       </div>
       </>
    )
}

export default About

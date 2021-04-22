import React from 'react'

function Skillse({skill,progress,width}) {
    return (
        <>
        <div className="skill-part">
            
            <h5 className="skill-title">{skill}</h5>
            <div className="skill-bar"></div>
            <div className="skill-progress">
                <div data-aos="ease-in-out" className="progress">
                <div   data-aos="fade-right"  data-aos-delay="200"  className="inner-progress"style={{width:width}}></div>

                </div>

            </div>
            <p className="skill-text">{progress}</p>
        </div>
        </>
    )
}

export default Skillse;

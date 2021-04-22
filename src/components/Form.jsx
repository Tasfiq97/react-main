import React, { useState } from 'react'

function Form() {
    const [data,setData]= useState({
        fname:"",
        email:"",
        phone:'',
        msg:"",
    })
 const InputEvent =(event) =>{
     const {name, value} = event.target;
     
     setData ((preVal)=>{
         return{
             ...preVal,
             [name]: value,
         }
     })

 }


    const formSubmit =()=>{
        alert("thank you so much for the information")
    }
    return (
       <>
       <div className="form-map">
           <form onSubmit={formSubmit}>
           <div    className="form-sec">
               <h3>Get In Touch </h3>
               <input data-aos="fade-up" data-aos-delay="500" type="text" name="fname"value={data.fname} onChange={InputEvent} id="name" placeholder="Name"/>
               <input data-aos="fade-up" data-aos-delay="500" type="email" name="email"value={data.email} onChange={InputEvent}  id="email" placeholder="E-mail"/>
               <input data-aos="fade-up" data-aos-delay="500" type="number"  name="phone"value={data.phone} onChange={InputEvent}  id="name" placeholder="Phone"/>
               <textarea data-aos="fade-up" data-aos-delay="500" name="message"  name="msg"value={data.msg} onChange={InputEvent}  id="" cols="90" rows="10" placeholder="Message me"></textarea>
               <div className="btn-con">
               <button className="bt-last">Send Me</button>
           </div>
           </div>
           </form>
          
           <div  data-aos="fade-down" data-aos-delay="1000"  className="map-sec">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14854.753897023465!2d91.96707857686486!3d21.44148647241831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc8131fb6f405%3A0x334619d3257aa9d9!2sPaurashava!5e0!3m2!1sen!2sbd!4v1618482424918!5m2!1sen!2sbd" width="750" height="900" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>

           </div>
           

       </div>
       </>
    )
}

export default Form

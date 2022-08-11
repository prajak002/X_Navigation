import React, { Component, useState } from "react";
import MyBackgroundImage from './about-bg.jpg';
import sideimage from './MUN_Logo _Black.png'
const AboutUs = () => {
    return (
     <div
     
    >
    <img src={MyBackgroundImage} 
    style={{
       /* backgroundImage: `url(${MyBackgroundImage})`,
       
     backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',*/
        opacity:0.2
      }}

    />
    <img src ={sideimage}
      style ={{
        position : 'absolute' ,
        top : 130 ,
        
        right :200,
         height : '400px'
      }}
      />
    <p  style={{ fontSize: '18px',
                  color:'black',
                  textAlign :'justify',
                  fontWeight:'bold'
                }}
    >
                Over the years Institute of Engineering  Management, Kolkata
                has been a keen contributor to the Model United Nations
                Community. This year we are coming forth with the most awaited
                9th edition of IEM-MUN to be held offline  in-person after 3
                years of the pandemic.IEM-MUN 2022 will provide a platform to
                exhibit knowledge, interpersonal and leadership skills where
                the boundaries of every individual are tested, their patience
                worked and their intellect challenged. IEM-MUN provides a
                wonderful platform for young people to solve issues of global
                consequences and shape their journey in becoming future
                leaders. Being one of the most eagerly awaited MUN in the
                city, it is a wonderful opportunity for student delegates to
                take responsibility, rise to the occasion and propose
                solutions to geopolitical matters.
                </p>
        </div>
   
  );
        

}
export default AboutUs;

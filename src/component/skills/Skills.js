import React, { useEffect } from 'react'
import "./Skills.css"
import { BsFillEmojiSunglassesFill } from "react-icons/bs";



const Skills = () => {

    


  return <>
        <div className="skill">
            <div className="projects">
                <ul>
                  <li><a href='https://delpazir-restaurant.vercel.app/'>restaurant</a></li>
                  <li><a href='https://landingpage.iran.liara.run/'>Landingpage</a></li>
                  <li><a href='https://cafe-gamma.vercel.app'>Cafe</a></li>
                </ul>
            </div>

            <div className="technology">
                <h1>تکنولوژی ها</h1>
                <p style={{display:"flex",alignItems:"center",justifyContent:"center"}}><BsFillEmojiSunglassesFill style={{"color":"yellow" , "fontSize":"15px",marginLeft:"5px"}}/> Hover these</p>
                <div>
                    <ul className="front">
                      <li>
                          <div id="html"></div><h5>HTML5</h5></li>
                      <li>
                        <div id="css"></div><h5>CSS3</h5></li>
                      <li>
                        <div id="flex"></div><h5>Flex Box</h5></li>
                      <li>
                        <div id="sass"></div><h5>Sass</h5></li>
                      <li>
                        <div id="tailwind"></div><h5>Tailwind</h5></li>
                      <li>
                        <div id="readux"></div><h5>Redux</h5></li>
                      <li>
                        <div id="type"></div><h5>TypeScript</h5></li>
                      <li>
                        <div id="js"></div><h5>JavaScript</h5></li>
                      <li>
                        <div id="react"></div><h5>ReactJs</h5></li>
                    </ul>
                    <ul className="back">
                      <li>
                        <div id="api"></div><h5>REST API</h5></li>
                      <li>
                        <div id="mongo"></div><h5>MongoDB</h5></li>
                      <li>
                        <div id="sql"></div><h5>SQL Server</h5></li>
                      <li>
                        <div id="my"></div><h5>MY SQL</h5></li>
                      <li>
                        <div id="express"></div><h5>Express</h5></li>
                      <li>
                        <div id="node"></div><h5>NodeJs</h5></li>
                    </ul>
                </div>
            </div>
        </div>
  </>
}

export default Skills;







// const level = (id,value) => {
    //   document.getElementById(id).style.right = `${value}%` ;
    // }



{/* <div>
                    <ul className="front">
                      <li 
                          onMouseOver={()=>{level("html",-10)}}
                      >

                          <div id="html"></div><h5>HTML5</h5></li>
                      <li 
                          onMouseOver={()=>{level("css",-10)}}
                      >
                        <div id="css"></div><h5>CSS3</h5></li>
                      <li 
                          onMouseOver={()=>{level("flex",-10)}}
                      >
                        <div id="flex"></div><h5>Flex Box</h5></li>
                      <li 
                          onMouseOver={()=>{level("sass",-20)}}
                      >
                        <div id="sass"></div><h5>Sass</h5></li>
                      <li 
                          onMouseOver={()=>{level("tailwind",-80)}}
                      >
                        <div id="tailwind"></div><h5>Tailwind</h5></li>
                      <li 
                          onMouseOver={()=>{level("readux",-40)}}
                      >
                        <div id="readux"></div><h5>Redux</h5></li>
                      <li 
                          onMouseOver={()=>{level("type",-70)}}
                      >
                        <div id="type"></div><h5>TypeScript</h5></li>
                      <li 
                          onMouseOver={()=>{level("js",-25)}}
                      >
                        <div id="js"></div><h5>JavaScript</h5></li>
                      <li 
                          onMouseOver={()=>{level("react",-25)}}
                      >
                        <div id="react"></div><h5>ReactJs</h5></li>
                    </ul>
                    <ul className="back">
                      <li 
                          onMouseOver={()=>{level("api",-20)}}
                      >
                        <div id="api"></div><h5>REST API</h5></li>
                      <li 
                          onMouseOver={()=>{level("mongo",-40)}}
                      >
                        <div id="mongo"></div><h5>MongoDB</h5></li>
                      <li 
                          onMouseOver={()=>{level("sql",-70)}}
                      >
                        <div id="sql"></div><h5>SQL Server</h5></li>
                      <li 
                          onMouseOver={()=>{level("my",-70)}}
                      >
                        <div id="my"></div><h5>MY SQL</h5></li>
                      <li 
                          onMouseOver={()=>{level("express",-70)}}
                      >
                        <div id="express"></div><h5>Express</h5></li>
                      <li 
                          onMouseOver={()=>{level("node",-40)}}
                      >
                        <div id="node"></div><h5>NodeJs</h5></li>
                    </ul>
                </div> */}
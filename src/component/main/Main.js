import React from 'react'
import "./Main.css"

const Main = () => {
  return <>
        <div className="main">
            <div className="bio">
                <h1>سلام</h1>
                <h3 style={{marginTop:"10px"}}>احسان علوی اصیل هستم</h3>
                <h4 style={{marginTop:"10px"}}>برنامه نویس وب</h4>
                <h4 style={{marginTop:"10px"}}>Front-End : ReactJs</h4>
                <h4>Back-End : NodeJs</h4>
                <h5 className="text" style={{marginTop:"10px"}}>دیپلم ریاضی خودم رو از دبیرستان نمونه دولتی ایزدی گرفتم و الان مشغول تحصیل در مقطع لیسانس در رشته علوم کامپیوتر هستم</h5>
                <h5 style={{marginTop:"10px"}}>عاشق کارمم چون از هیچی هرچی که میخوام رو می سازم</h5>
                <h5 style={{marginTop:"10px"}}>عاشق حل معما</h5>
                <h5 style={{marginTop:"10px"}}>ساکن قم</h5>
                <h5 style={{marginTop:"10px"}}>متولد سال ۱۳۸۰</h5>
                <h5 style={{marginTop:"10px"}}>موبایل : 09934156323</h5>
                <h5 style={{marginTop:"10px"}}>ایمیل : e.alavi1380@gmail.com</h5>
            </div>
            <div className="pic">
                <img src="../../img/2.svg"/>
            </div>
        </div>
  </>
}

export default Main
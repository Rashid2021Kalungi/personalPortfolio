import { useState } from "react";
import "./works.scss";
export default function Works() {
  const data = [
    {
      id: 1,
      title: "Mobile Application",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      img: "assets/mobile.png",
    },
    {
      id: 2,
      title: "Web Application",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      img: "assets/globe.png",
    },
    {
      id: 3,
      title: "Desktop Application",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      img: "assets/shake.png",
    },
    {
      id: 4,
      title: "Camera and Network installation",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      img: "assets/camera.png",
    },
    {
      id: 5,
      title: "IT Support",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      img: "assets/support.png",
    },
    {
      id: 6,
      title: "Camera and Network installation and management ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis!",
      img: "assets/camera.png",
      
    },
  ];
  const [currentSlider,setCurrentSlider]=useState(0)
  const handleClick=(way)=>{
    way === "left" ? setCurrentSlider(currentSlider>0 ?currentSlider-1 : 2) : setCurrentSlider(currentSlider<data.length-1 ? currentSlider+1 :0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map((d) =>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/93/12/50/1000_F_593125041_8VRfaQfrBc4KFlgstGKLM41N0QxSMLX7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="left arrow" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  );
}

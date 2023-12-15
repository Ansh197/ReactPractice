import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// const fname = "Ansh";
// const lname = "Sharma";
// const curYear = new Date().getFullYear();

var text = "";

  const curTime = new Date().getHours() ;
  if(curTime<12)
  {
    text ='Good Morning';
  }
  else if (curTime>=12&&curTime<=18)
  {
    text = 'Good Evening';
  }
  else
  {
    text = 'Good Night';
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div>
  //   <p
  //     contentEditable="false"
  //     spellCheck="false"
  //    style={{color:'red'}} >{`Created by ${fname} ${lname}`}</p>
  //   <p>{`Copyright ${curYear}`}</p>
  //   <div>
  //     <img alt=" " src="https://picsum.photos/200"/>
  //     <img alt=" " src="https://picsum.photos/200"/>
  //     <img alt=" " src="https://picsum.photos/200"/>
  //   </div>
  // </div>
  <p>{text}</p>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

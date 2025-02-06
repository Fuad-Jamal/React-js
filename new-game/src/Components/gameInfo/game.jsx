import React, { useRef, useState, useEffect } from "react";
import "./game.css";
import download_icon from "../Assets/download.png";
import image_icon from "../Assets/image.png";
import ReactConfetti from "react-confetti";

let data = ["", "", "", "", "", "", "", "", ""];

const GameInfo = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const theme = useRef(null);
  
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxez = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src= '${image_icon}'/>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src= '${download_icon}' alt= 'Player O won!'/>`;
      data[num] = "o";
      setCount(count + 1);
    }
    score();
  };
  
  const score = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  
  const won = (winner) => {
    setLock(true);
    setShowConfetti(true);
    if (winner === 'x') {
      theme.current.innerHTML = `Player 1 won! <img src= ${image_icon}/>`;
    } else {
      theme.current.innerHTML = `Player 2 won! <img src= ${download_icon}/>`;
    }
  };

  const reset = () => {
    setLock(false);
    setShowConfetti(false);
    data = ["", "", "", "", "", "", "", "", ""];
    theme.current.innerHTML = `Tic Tac Toe Game <span>React</span>`;
    boxez.forEach((box) => {
      box.current.innerHTML = "";
    });
  };
  
  return (
    <div className="container">
      {showConfetti && <ReactConfetti width={dimensions.width} height={dimensions.height} />} 
      <h1 className="title" ref={theme}>
        Tic Tac Toe Game <span>React</span>
      </h1>
      <p>
        Welcome to the game! Here you will find all the information you need.
      </p>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default GameInfo;

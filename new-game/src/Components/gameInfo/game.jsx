import React from 'react';
import './game.css';
import download from './download.png';
import image from './image.png';


const GameInfo = () => {
    return (
        <div className= 'container'>
            <h1 className='title'>Game Information <span>React</span></h1>
            <p>Welcome to the game! Here you will find all the information you need.</p>
            <div className="board">
                <button className="reset">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default GameInfo;
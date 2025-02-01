import React from 'react';
import { useState } from 'react';
import './game.css';
import download_icon from '../Assets/download.png'; 
import image_icon from '../Assets/image.png'; 

let data = ['', '', '', '', '', '', '', '', ''];

const GameInfo = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
const toggle = (e,num) => {
if(lock){
    return 0;
}
if(count%2 === 0){
    e.target.innerHTML = `<img src= '${download_icon}'/>`;
    data[num] = 'x';
    setCount(count++ );
}else{
    e.target.innerHTML = `<img src= '${image_icon}'/>`;
    data[num] = 'o';
    setCount(count++ );
}
}
const score = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== ''){
        won(data);
    }else if( data[3] === data[4] && data[4] === data[5] && data[5] !== ''){
            won(data);
    }

}
 const won = (winner)=>{
    setLock(true);
 }

    return (
        <div className= 'container'>
            <h1 className='title'>Game Information <span>React</span></h1>
            <p>Welcome to the game! Here you will find all the information you need.</p>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick = {(e) => {toggle (e,0)}}></div>
                    <div className="boxes" onClick = {(e) => {toggle (e,1)}}></div>
                    <div className="boxes" onClick = {(e) => {toggle (e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick = {(e) => {toggle (e,3)}}></div>
                    <div className="boxes" onClick = {(e) => {toggle (e,4)}}></div>
                    <div className="boxes" onClick = {(e) => {toggle (e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes"  onClick = {(e) => {toggle (e,6)}}></div>
                    <div className="boxes" onClick = {(e) => {toggle (e,7)}}></div>
                    <div className="boxes" onClick = {(e) => {toggle (e,8)}}></div>
                </div>
            </div>
            <button className="reset">
                    Reset
                </button>
        </div>
    );
};

export default GameInfo;
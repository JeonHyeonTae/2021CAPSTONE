import React, {Component} from 'react'


function StopWatch({time}){
    const sec = numverPad(time%60);
    const min = ((time-sec)/60)%60;
    const hour = ((time-sec-min*60)/3600);
    const numverPad = ({num}) =>{
        if(num<10){
            num = num+''
        }
    }
    const Click = () =>{

    }
    return(
        <>
        <h1>{hour}:{min}:{sec}</h1>
            <button onClick={Click}>start</button>
        </>
    )
}
export default StopWatch
import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000)

        return ()=>{
            clearInterval(interval);
        }
    },[]);

    function formatTime(time){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const AmPm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${AmPm}`;
    }

    function padZero(value){
        return value < 10 ? '0'+value : value;
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime(time)}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
import styles from './styles.module.css';
import { useState, useRef, useEffect } from 'react';

function ToggleText(){
    const [showText, setSowText] = useState(false);
    const [delay, setDelay] = useState(500);
    const textRef = useRef(null)

function toggleText(){
setSowText(prev => !prev);
  
}

function handleDelay(elem){
setDelay(Number(elem.target.value))
}

useEffect(()=>{
    if(textRef.current){
        textRef.current.style.transition = `all ${delay}ms ease` ;
        textRef.current.style.opacity = showText ? "1" : "0";
        textRef.current.style.height = showText ? "100px" : "0px";
    }
}, [showText, delay])

    return (
        <div>
            <button 
            onClick={(()=>{toggleText()})}>
                {showText ? "Hide text" : "Show text"}
            </button>

            <input type='number'
            onChange={handleDelay}
            placeholder='Animation delay (ms)'
            value={delay} ></input>

            <p ref={textRef}
            className={styles.text}>
                This is hidden text. Click the button to hide or show it.
            </p>
        </div>
    )
}

export default ToggleText;
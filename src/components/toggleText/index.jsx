import styles from './styles.module.css';
import { useState, useRef } from 'react';

function ToggleText(){
    const [showText, setSowText] = useState(false);
    const [delay, setDelay] = useState(0);
    const textRef = useRef(null)

function toggleText(){
setSowText(prev => !prev);
}

function handleDelay(elem){
setDelay(Number(elem.target.value))
}

    return (
        <div>
            <button 
            onClick={(()=>{toggleText()})}>
                hidden text
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
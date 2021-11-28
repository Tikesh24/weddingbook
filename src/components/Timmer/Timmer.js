import styles from './Timmer.module.scss';
import { useState, useRef, useEffect } from 'react';
import CountdownTimer from './CountdownTimer/CountdownTimer';


function Timmer() {

    const weddingDate = new Date('2021-12-07T03:00:00Z').getTime();
    console.log(weddingDate);
    return (
        <div className={styles.wrapper}>
            <div className={styles.timmer}>
                <CountdownTimer countdownTimestampMs={weddingDate}/>
            </div>
        </div>
    )
}

export default Timmer

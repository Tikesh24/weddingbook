import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.scss';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    const [isSamllView, setIsSmallView] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
            (window.innerWidth < 400) ? setIsSmallView(true) : setIsSmallView(false);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className={styles.countdownTimer}>
            <div className={styles.counterbox}>
                <h1>{remainingTime.days}<span className={styles.smallText}>{isSamllView ? "Days":""}</span></h1>
                <p>{isSamllView ? "" : "DAYS"}</p>
            </div>
            <div className={styles.counterbox}>
                <h1>{remainingTime.hours}<span className={styles.smallText}>{isSamllView ? "Hours":""}</span></h1>
                <p>{isSamllView ? "" : "HOURS"}</p>
            </div>
            <div className={styles.counterbox}>
                <h1>{remainingTime.minutes}<span className={styles.smallText}>{isSamllView ? "Min":""}</span></h1>
                <p>{isSamllView ? "" : "MIN"}</p>
            </div>
            <div className={styles.counterbox}>
                <h1>{remainingTime.seconds}<span className={styles.smallText}>{isSamllView ? "Sec":""}</span></h1>
                <p>{isSamllView ? "" : "SEC"}</p>
            </div>
        </div>
    );
}

export default CountdownTimer;
import styles from './WeddingLocation.module.scss';
import {FaMapSigns} from 'react-icons/fa';
function WeddingLocation() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>When &amp; Where</h1>
            </div>

            <div className={styles.content}>
                <div>
                    <h1>Ceremony</h1>
                    <p>Tuesday, 07, December, 2021</p>
                    <h4>Haldi &diams; Mehendi &diams; Baraat Prasthan <a href="https://goo.gl/maps/mAUGZjzr6DUp5wBMA" target="_blank" title="Go to map"><FaMapSigns /></a></h4>
                    <div className={styles.brline} />
                </div>
                <div>
                    <h1>Reception</h1>
                    <p>Tuesday, 08, December, 2021</p>
                    <h4>Reception <a href="https://goo.gl/maps/2N833JGdhKfrL6bY9" target="_blank" title="Go to map"><FaMapSigns /></a></h4>
                    <div className={styles.brline} />
                </div>
                <div>
                    <h1>Location</h1>
                    <h4>Chopra Palace  <a href="https://goo.gl/maps/2N833JGdhKfrL6bY9" target="_blank" title="Go to map"><FaMapSigns /></a></h4>
                    <p>Padmanabhpur Pulgaon Pass Road, Adarsh Nagar, Durg, Chhattisgarh, 491001</p>
                </div>
            </div>
        </div>
    )
}

export default WeddingLocation

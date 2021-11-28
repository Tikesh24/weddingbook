import CarouselComponent from '../CarouselComponent';
import Timmer from '../Timmer/Timmer';
import WeddingLocation from '../WeddingLocation/WeddingLocation';
import styles from './Parallax.module.scss';

function Parallax() {
    return (
        <div className={styles.container}>
            <div id="our_story" className={`${styles.section} ${styles.bg1}`} >

                <div className={styles.blur}></div>

                <div className={styles.fixed}>
                    <div className={styles.caption}>
                        <div className={styles.roundHeart} >
                            <img src="../../../images/icon/ring1.svg" />
                        </div>
                        <div className={styles.captionHead}>
                            <h1 className={styles.large}> Garima </h1>
                            <img src="../../../images/icon/heart.svg" />
                            <h1 className={styles.large}>Manish </h1>
                        </div>
                        <p>ARE GETTING MARRIED</p>
                        
                    </div>
                </div>
                <div className={styles.timmerFixed}>
                    <Timmer />
                </div>
            </div>
            <div id="function" className={`${styles.section} ${styles.bg2}`}>
                <div className={styles.locationFixed}>
                    <WeddingLocation />
                </div>
            </div>
            <div id="gallary" className={styles.section}>
            
                <div className={styles.fixed}>
                <CarouselComponent />
                </div>
            </div>
            {/* <div className={styles.section}>
                <div className={styles.fixed}>That was the beginning of the slow end for my mother. As the disease got worsened, she forgot everything. Lost control of her body functions and finally, failed to recognize anyone except my wife who used to take care of her like a mother taking care of her baby. She used to feed her, change her diapers, dress her, give her bath, brush her hair, and also help her to sleep.</div>
            </div>
            <div className={styles.section}>
                <div className={styles.fixed}>For my wife and me, she was like a little child. Our world revolved around her. We used to play with her, tease her. We even celebrated her 80th birth day with a grand cake cutting ceremony attended by my wife’s friends in Kolkata. It was a moment of happiness for her as she kept smiling at every one greeting her on her birth day without knowing whose birth day it was. So when one of the guests greeted her with a “wish you a happy birth day”, she promptly responded by wishing her the same!</div>
            </div>
            <div className={styles.section}>
                <div className={styles.fixed}>It was interesting to know that even after destroying her brain cells; the disease could not take away the basic courtesies from her, acquired during her training as a Telephone Operator long long ago. They remained entrenched in her till her last breath. She never forgot to express her sincere thanks whenever we help her with little things.</div>
            </div>
            <div className={styles.section}>
                <div className={styles.fixed}>The thud sound of a body hitting the ground rudely awakened us. We looked around to find my mother missing from her bed. In a swift motion my wife jumped from the bed and dashed out of the room to find her lay flat, face down on the floor motion less. Her fore head was badly injured. She was bleeding profusely from her lips due to the impact of the fall. But there was virtually no reaction from her. We physically lifted her and put her on the bed. My wife gently cleansed the wound and enquired whether it was hurting. She replied in affirmative. But there was no sign of pain in the face. No tears in her eyes. Just plain disoriented look, devoid of any feelings and emotions. The disease took away all her emotional feelings and also dried up the tear glands. Looking at her state I cried silently.</div>
            </div>
            <div className={styles.section}>
                <div className={styles.fixed}>Oh God! I said to myself. Is this is my mother, who used to get tears in her eyes even for a faint discomfort? She was emotionally so sensitive that even a stern look, would bring her to tears. Such was her reputation for crying that my father used to tease her by calling her “Gangadhari”. Lady wearing river Ganges on her head.</div>
            </div>
            <div className={styles.section}>
                <div className={styles.fixed}>The day she passed away and as her body was being carried in a “Hearse” van there were unexpected showers for few minutes as if the heavens have cried for her, as she forgot to cry.</div>
            </div> */}
            <div className={styles.section}>
                <p className={styles.fixed}>Thanks for watching</p>
            </div>
        </div>
    )
}

export default Parallax

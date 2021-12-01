import styles from './Nav.module.scss';

function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img className={styles.logo} src="../../../images/logo/logo.png" /> 
            </div>
            <div className={styles.listContainer}>
                <ul>
                    <li><a href="#our_story">Our Story</a></li>
                    <li><a href="#function">When &amp; Where</a></li>
                    <li><a href="#gallary">Gallery</a></li>
                </ul>
            </div>
            <div />
        </div>
    )
}

export default Nav

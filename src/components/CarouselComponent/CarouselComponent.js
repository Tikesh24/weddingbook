import styles from './CarouselComponent.module.scss';

function CarouselComponent() {
    let arrayOf10 = Array.from(Array(10).keys());
    const listItems = arrayOf10.map((number) =>
        <li key={number}>{number}</li>
    );
    console.log(arrayOf10)
    return (
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    );
}

export default CarouselComponent;

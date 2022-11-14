import styles from './Card.module.scss'
import React from "react";

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite} onClick={props.onFavorite}>
                <img src="/img/unliked.svg" alt="Unliked"/>
            </div>
            <img src={props.imageURL} alt="" width={133} height={112}/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}/>
            </div>
        </div>
    );
}

export default Card;
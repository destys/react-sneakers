import styles from './Card.module.scss'
import React from "react";

function Card({title, imageURL, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageURL, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({title, imageURL, price});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked"/>
            </div>
            <img src={imageURL} alt="" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                    alt={'plus'}/>
            </div>
        </div>
    );
}

export default Card;
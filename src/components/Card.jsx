function Card(props) {
    const onClickAdd = () => {
        alert(props.title)
    }
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked"/>
            </div>
            <img src={props.imageURL} alt="" width={133} height={112}/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={onClickAdd}>
                    <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
                </button>
            </div>
        </div>
    );
}

export default Card;

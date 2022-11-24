import styles from './Drawer.module.scss'

function Drawer({ onClose, items = []}) {
    return (
        <aside className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between">
                    <span>Корзина</span>
                    <button className="removeBtn" onClick={onClose}>
                        <img src="/img/btn-remove.svg" alt="close"/>
                    </button>
                </h2>
                <div className={styles.items}>
                    {
                        items.map((obj) => (
                            <div className="cartItem d-flex align-center mb-20">
                                <div style={{backgroundImage: `url(${obj.imageURL}`}}
                                     className="cardItemImg"></div>
                                <div className="mr-20">
                                    <p className="mb-5">{obj.name}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <button className="removeBtn">
                                    <img src="/img/btn-remove.svg" alt="remove"/>
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого</span>
                            <div></div>
                            <b> 21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1 074 руб.</b>
                        </li>
                    </ul>
                    <button type="submit" className="greenButton">
                        Оформить заказ
                        <img src="/img/arrow.svg" alt=""/></button>
                </div>
            </div>
        </aside>
    );
};
export default Drawer;
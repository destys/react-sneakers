import React from 'react';
import Card from "../components/Card";

function Favorites({items, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">Мои закладки</h1>
            </div>
            <div className="cardList">
                {
                    items.map((item, index) => (
                            <Card key={index}
                                  title={item.title}
                                  price={item.price}
                                  imageURL={item.imageURL}
                                  onPlus={(obj) => onAddToCart(obj)}/>
                        ))
                }
            </div>
        </div>
    );
}

export default Favorites;
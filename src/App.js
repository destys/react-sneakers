import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCarttems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://63727a48348e947299f698e2.mockapi.io/items').then(res => {
            return res.json();
        }).then(json => {
            setItems(json)
        });
    }, []);

    const onAddToCart = (obj) => {
        alert(obj.title)
    }


    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="mb-40">Все кроссовки</h1>
                    <div className="searchBlock d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="cardList">
                    {
                        items.map((item, index) => (
                            <Card key={index}
                                title={item.name}
                                  price={item.price}
                                  imageURL={item.imageURL}
                                  onFavorite={() => console.log('Add to favorite')}
                                  onPlus={(obj) => onAddToCart(obj)}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default App;

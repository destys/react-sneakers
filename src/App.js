import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    return (
        <div className="wrapper clear">
            {cartOpened &&  <Drawer onClose={()=> setCartOpened(false)}/>}
            <Header onClickCart={()=> setCartOpened(true)}/>
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
                        items.map(obj => (
                            <Card title={obj.name}
                                  price={obj.price}
                                  imageURL={obj.imageURL}
                                  onFavorite={() => console.log('Add to favorite')}
                                  onPlus={() => console.log('Add to cart')}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default App;

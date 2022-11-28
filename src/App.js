import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";



function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://63727a48348e947299f698e2.mockapi.io/items').then(res => {
            setItems(res.data)
        });
        axios.get('https://63727a48348e947299f698e2.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://63727a48348e947299f698e2.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }

     const onRemoveItem = (id) => {
          axios.post(`https://63727a48348e947299f698e2.mockapi.io/cart/${id}`);
         setCartItems((prev) => prev.filter((item) => item.id !== id));
     }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="mb-40">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="searchBlock d-flex">
                        {!searchValue && <img src="/img/search.svg" alt="Search"/>}
                        {searchValue && <img onClick={()=> setSearchValue('')} src="/img/btn-remove.svg" alt="remove" className="clear cu-p"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="cardList">
                    {
                        items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, index) => (
                            <Card key={index}
                                  title={item.title}
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
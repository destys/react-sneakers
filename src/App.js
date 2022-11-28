import React from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://63727a48348e947299f698e2.mockapi.io/items').then(res => {
            setItems(res.data)
        });
        axios.get('https://63727a48348e947299f698e2.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        });
        axios.get('https://63727a48348e947299f698e2.mockapi.io/favorite').then(res => {
            setFavorites(res.data)
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://63727a48348e947299f698e2.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, obj]);
    }

    const onAddToFavorite = (obj) => {
        axios.post('https://63727a48348e947299f698e2.mockapi.io/favorite', obj);
        setFavorites(prev => [...prev, obj]);
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63727a48348e947299f698e2.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <Routes>
                <Route path={'/'} element={
                    <Home
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                    />
                }/>
                <Route path={'/favorites'} element={
                    <Favorites items={favorites} onAddToCart={onAddToCart}/>
                }/>
            </Routes>
        </div>
    )
}

export default App;
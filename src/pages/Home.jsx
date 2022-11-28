import React from 'react';
import Card from "../components/Card";

function Home({
                  items,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCart
              }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="searchBlock d-flex">
                    {!searchValue && <img src="/img/search.svg" alt="Search"/>}
                    {searchValue && <img onClick={() => setSearchValue('')} src="/img/btn-remove.svg" alt="remove"
                                         className="clear cu-p"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className="cardList">
                {
                    items
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card key={index}
                                  title={item.title}
                                  price={item.price}
                                  imageURL={item.imageURL}
                                  onFavorite={(obj) => onAddToFavorite(obj)}
                                  onPlus={(obj) => onAddToCart(obj)}/>
                        ))
                }
            </div>
        </div>
    );
}

export default Home;
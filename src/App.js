import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {
        name: 'Мужчкие кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageURL: 'img/sneakers/1.jpg'
    }, {
        name: 'Мужчкие кроссовки Nike Air Max 270',
        price: 15609,
        imageURL: 'img/sneakers/2.jpg'
    }, {
        name: 'Мужчкие кроссовки Nike Air Max 590',
        price: 11541,
        imageURL: 'img/sneakers/3.jpg'
    }, {
        name: 'Reebok Answer 4 54 Points',
        price: 13300,
        imageURL: 'img/sneakers/4.jpg'
    }, {
        name: 'Reebok Answer 4 Step Over 2021',
        price: 17500,
        imageURL: 'img/sneakers/5.jpg'
    }, {
        name: 'Nike LeBron 20 The Debut',
        price: 26250,
        imageURL: 'img/sneakers/6.jpg'
    },
];


function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
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
                        arr.map(obj => (
                            <Card title={obj.name}
                                  price={obj.price}
                                  imageURL={obj.imageURL}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default App;

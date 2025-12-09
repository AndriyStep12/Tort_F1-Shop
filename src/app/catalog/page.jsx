"use client"
import React, {useState, useEffect} from "react";
import './catalog.scss'
import Good from "../components/good/good";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Page()
{
    const [goods, setGoods] = useState([
        {
            id: 0,
            name: `Ferrari`,
            price: 3500,
            salePrice: 3000,
            imgUrl: "ferrari.jpg",
            stars: 5,
            commemnts: 10,
            tags: ["Unisex", "Red", "S", "M", "L", "XL"] 
        },
        {
            id: 1,
            name: `Redbull`,
            price: 3500,
            salePrice: 3000,
            imgUrl: "redbull.jpg",
            stars: 5,
            commemnts: 10,
            tags: ["Unisex", "Red", "S", "M", "L", "XL"] 
        },
        {
            id: 2,
            name: `Williams`,
            price: 3500,
            salePrice: 3000,
            imgUrl: "williams.jpg",
            stars: 5,
            commemnts: 10,
            tags: ["Unisex", "Red", "S", "M", "L", "XL"] 
        },
        {
            id: 3,
            name: `Aston`,
            price: 3500,
            salePrice: 3000,
            imgUrl: "asston-martin.jpg",
            stars: 5,
            commemnts: 10,
            tags: ["Unisex", "Red", "S", "M", "L", "XL"] 
        },
        {
            id: 4,
            name: `McLearn`,
            price: 3500,
            salePrice: 3000,
            imgUrl: "mclaeren.jpg",
            stars: 5,
            commemnts: 10,
            tags: ["Unisex", "Red", "S", "M", "L", "XL"] 
        },
        {
            id: 5,
            name: `Aston`,
            price: 3500,
            salePrice: 3000,
            imgUrl: "asston-martin_white.jpg",
            stars: 5,
            commemnts: 10,
            tags: ["Unisex", "Red", "S", "M", "L", "XL"] 
        }
    ]);
    const [selectedTags, setSelectedTags] = useState([]);

    const filtersData = {
        Gender: ["Men", "Women", "Unisex"],
        Color: ["Blue", "Red", "Green", "Black"],
        Size: ["S", "M", "L", "XL"]
    };

    // function createGoods() {
    //     let arr = [];
    //     for (let i = 0; i < 20; i++) {
    //         let price = Math.floor(Math.random() * 100) + 20;
            
    //         let gender = ["Men", "Women", "Unisex"][Math.floor(Math.random() * 3)];
    //         let color = ["Blue", "Red", "Green", "Black"][Math.floor(Math.random() * 4)];
    //         let size = ["S", "M", "L", "XL"][Math.floor(Math.random() * 4)];
    //         let photo = [
    //             "ferrari.jpg",
    //             "asston-martin.jpg",
    //             "williams.jpg",
    //             "redbull.jpg",
    //             "mclaeren.jpg",
    //             "asston-martin_white.jpg"
    //         ][Math.floor(Math.random() * 6)]

    //         arr.push({
    //             id: i,
    //             name: `Ferrari`,
    //             price: price,
    //             salePrice: price,
    //             imgUrl: photo,
    //             stars: 5,
    //             commemnts: 10,       
    //             tags: [gender, color, size] 
    //         });
    //     }
    //     return arr;
    // }

    // useEffect(() => {
    //     setGoods(createGoods());
    // }, []);

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const filteredGoods = goods.filter(good => {
        if (selectedTags.length === 0) return true;
        return selectedTags.every(tag => good.tags.includes(tag));
    });

    return (
        <div className="catalogPage">
            <Header/>
            <div className="catalog-container">
                
                <aside className="sidebar">
                    <h2>Filter</h2>
                    <br />
                    <div className="filter-group">
                        <h3>Gender</h3>
                            {["Men", "Women", "Unisex"].map(tag => (
                                <>
                                <label key={tag} className="custom-checkbox">
                                    <input 
                                        type="checkbox"
                                        checked={selectedTags.includes(tag)}
                                        onChange={() => handleTagClick(tag)}
                                    />
                                    <span> {tag}</span>
                                </label>
                                <br />
                                </>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h3>Type product</h3>
                        {["T-shirts", "Caps", "Models", "Shorts", "Stained glass paintings", "Jackets"].map(tag => (
                            <>
                            <label key={tag} className="custom-checkbox">
                                <input 
                                    type="checkbox"
                                    checked={selectedTags.includes(tag)}
                                    onChange={() => handleTagClick(tag)}
                                />
                                <span> {tag}</span>
                            </label>
                            <br />
                            </>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h3>Pilots</h3>
                        {["Charles Leclerc", "Carlos Sainz", "Daniel Ricciardo", "Fernando Alonso", "Oscar Piastri"].map(tag => (
                            <>
                            <label key={tag} className="custom-checkbox">
                                <input 
                                    type="checkbox"
                                    checked={selectedTags.includes(tag)}
                                    onChange={() => handleTagClick(tag)}
                                />
                                <span> {tag}</span>
                            </label>
                            <br />
                            </>
                        ))}
                    </div>
                    <div className="filter-group">
                        <h3>Color</h3>
                        {["Blue", "Red", "Green", "Brown", "Black"].map(tag => (
                            <>
                            <label key={tag} className="custom-checkbox">
                                <input 
                                    type="checkbox"
                                    checked={selectedTags.includes(tag)}
                                    onChange={() => handleTagClick(tag)}
                                />
                                <span> {tag}</span>
                            </label>
                            <br />
                            </>
                        ))}
                    </div>
                    <div className="filter-group">
                        <h3>Size</h3>
                        {["S", "M", "L", "XL", "XXL"].map(tag => (
                            <>
                            <label key={tag} className="custom-checkbox">
                                <input 
                                    type="checkbox"
                                    checked={selectedTags.includes(tag)}
                                    onChange={() => handleTagClick(tag)}
                                />
                                <span> {tag}</span>
                            </label>
                            <br />
                            </>
                        ))}
                    </div>
                </aside>

                <div className="goods">
                    {filteredGoods.map(good => (
                        <Good key={good.id} {...good} />
                    ))}
                </div>

            </div>
            <Footer/>
        </div>
    )
}
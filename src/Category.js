import React, { useState,useEffect } from "react";
import data from "./data";


const Category = ({showCategory,showAll}) => {

    const [category, setCategory] = useState([]);
    const setOfCategory = new Set();
    Array.from(data).forEach(element => {
        setOfCategory.add(element.category);
    });
    useEffect(()=>{
        setCategory(Array.from(setOfCategory));
    },[]);

   
    return (
        <div className="container__category">
            <button className="btn" onClick={showAll}>All Items</button>
            {
                category.map((item,index)=>{
                    return(
                        <button key={index}className="btn" onClick={()=>showCategory(item)}>{item}</button>
                    )
                })
            }
        </div>
    )
}
export default Category;

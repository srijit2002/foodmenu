import React, { useState,useEffect } from "react";
import data from "./data";


const Category = ({showCategory,showAll}) => {
    const [currentCategory,setCurrentCategory]=useState("All Items");
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
            <button className={`btn ${currentCategory==="All Items"&&`btn-active`}`} onClick={()=>{showAll();setCurrentCategory("All Items");}}>All Items</button>
            {
                category.map((item,index)=>{
                    return(
                        <button key={index}className={`btn ${item===currentCategory&&`btn-active`}`} onClick={()=>{showCategory(item); setCurrentCategory(item);}}>{item}</button>
                    )
                })
            }
        </div>
    )
}
export default Category;

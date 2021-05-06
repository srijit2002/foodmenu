import React,{useState} from "react";
import Card from "./Card";
import data from "./data";
import Category from "./Category";

const Container = () => {
    const [items,setItems]=useState(data);
    const showCategory=(category)=>{
        const filteredItem=data.filter(item=>(item.category===category));
        setItems(filteredItem);
       
    }

    const showAll=()=>{
        setItems(data);
    }
    
    return (
        <div className="container">
           <h1 className="container__heading">Food doesn't have a religion.<br/>It is a religion.</h1>
           <Category showCategory={showCategory} showAll={showAll}/>
            <div className="container__body">
               {items.map(menuItem=>{
                   return(
                       <Card key={menuItem.id} {...menuItem}/>
                   )
               })}
            </div>
        </div>
    )

}
export default Container;
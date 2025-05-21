import { useContext } from "react";
import Card from "../components/Card/Card";
import categoryContext from "../context/categoryContext";

export default function Category(){
    
    const categories = useContext(categoryContext);
    
    const display =  categories.map((category,i)=>{
        return <Card key={i} category={category}/>
    });

    function categoriesLoaded(){
        return <div className="categoryContent">
            {display}
        </div>
    }
    function categoriesLoading(){
        return <h4>Loading ...</h4>
    }

    return categories ? categoriesLoaded() : categoriesLoading();
}
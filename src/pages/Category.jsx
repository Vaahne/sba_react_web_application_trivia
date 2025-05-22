import { useContext } from "react";
import Card from "../components/Card/Card";
import categoryContext from "../context/categoryContext";

export default function Category(){
    // getting the categories from categoryContext using useContext
    const categories = useContext(categoryContext);
    
    const display =  categories.map((category,i)=>{
        return <Card key={i} category={category}/>
    });
    // renders all categories once loaded
    function categoriesLoaded(){
        return <div className="categoryContent">
            {display}
        </div>
    }
    //  displays loading if the categories are still loading
    function categoriesLoading(){
        return <h4>Loading ...</h4>
    }

    return categories ? categoriesLoaded() : categoriesLoading();
}
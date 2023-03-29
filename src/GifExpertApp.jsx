import { useState } from "react";
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState(['item 1']);  
  
  const onAddCategory =( newCategory )=>{

    if(categories.includes( newCategory )) return;
    
    setCategories([newCategory, ...categories]);      
  }

    return (
   <>
    <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ onAddCategory } />

        {/* <button onClick={ onAddCategory }> Agregar </button> */}
            {
                categories.map(
                    (cat) =>( <GifGrid key={cat} category={cat} />
                    // <div key={cat}>
                    //     <h3>{ cat }</h3>
                    //     <li>{ cat } </li>
                    // </div>
                            ))
            }
   
   </>   
  )
}

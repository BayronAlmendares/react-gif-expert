import { useState } from "react"

//creando el componente addCategory
export const AddCategory = ({ onNewCategory }) => {

//creando hook useState para manejar cambio de estado del input
const [inputValue, setInputValue] = useState('');

//haciendo que el estado cambie por el valor ingresado en la casilla
//destructuracion del elemento target del evento de onChange 
const onInputChange =({target})=>{

    //cambiar estado inicial usando funcion del hook useState
    setInputValue(target.value);
    // console.log(e);
}

const onSubmit = (event) => {
    //prevenir que el formulario actulize el componente
    event.preventDefault();
    //si no hay mas de una letra no coninua con la funcion
    if(inputValue.trim().length <= 1)  return;
    
    //ingresa en el setCagorias del copnente gifExpertApp lo que se escriba en la casilla
            //setCategories(cat => [inputValue, ...cat]); 
            
    //FUNCION PROVENIENTE DE NODO PADRE GIGEXPERTAPP
    onNewCategory(inputValue);
    
    //limpia la casilla una vez haya finalizado
    setInputValue('');
}

  return (
    // <form onSubmit = {(event) => onSubmit(event)}>
    <form onSubmit = { onSubmit }>
        <input
        type="text" 
        placeholder="Buscar Gift"
        value = { inputValue }
        // onChange = { (e)=>onInputChange(e) }
        onChange= { onInputChange }
        />

    </form>     
  )

}

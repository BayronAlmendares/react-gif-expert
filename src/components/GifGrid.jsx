import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

const { images, isLoading } = useFetchGifs( category );


  return (
    <>
        <h3>{ category }</h3>
        {
            // isLoading ? <h2>Cargando...</h2> : null
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            {/* {images.map( i =>
                <li key={i.id}> {i.title} </li>
            )} */}
            {images.map( (i) =>
                // <li key={ id }> { title } </li>
                <GifItem 
                    key={ i.id } 
                    { ...i }
                />
            )}
        </div>
    </>
  )
}

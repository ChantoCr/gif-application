import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    //console.log(categories)

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        //console.log('hola mundo');
        setCategories([newCategory, ...categories])
        //setCategories(cat => [...cat ' Valorant ', 'Loler'])
    }


    return (
        <>  
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory (value) }               
            />

            {/* Listado de Tarjetas Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}

            { 
                categories.map( (category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }

                {/* Gif Item */}
        </>
    )
}
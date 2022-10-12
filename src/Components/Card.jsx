import React from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
//    console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
            
                pokemon.map((item) => {
                    // console.log(item);
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                                <p style={{color:'red',marginLeft:'8px'}}>{item.types[0].type.name}</p>
                               
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;
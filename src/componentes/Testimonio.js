import React from "react";
import '../estilo/Testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className="imagen-testimonio"
                 src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} 
                 alt="Imagen de Noel" />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> 
                    <strong>{props.nombre}</strong> en {props.pais} 
                </p>
                <p className="cargo-testimonio"> 
                    {props.cargo}
                </p>
                <p className="texto-testimonio"> 
                    "{props.testimonio}" 
                </p>
            </div>
            
        </div>
    );
}

export default Testimonio;
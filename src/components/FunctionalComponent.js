import {useState} from "react";

const FunctionalComponent = () => {
    const [nombre, setNombre] = useState ('Camila');
    const updateName = () => {
        setNombre('Jazmin')
    }
  return (
    <>
    <div onClick = {updateName}>Actualiza el nombre</div>
      <div>{nombre}</div>
    </>
    
  )
}

export default FunctionalComponent
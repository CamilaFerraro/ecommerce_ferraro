import './style.css';

const FunctionalComponent = ({titulo, subtitulo}) => {
    console.log(titulo);
    console.log(subtitulo);
    return (
        <div> 
            <h1> {titulo} </h1>
        </div>
    );
};

export default FunctionalComponent;
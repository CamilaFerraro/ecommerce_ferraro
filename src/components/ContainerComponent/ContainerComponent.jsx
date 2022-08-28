import ClassComponent from '../ClassComponents/ClassComponent';

const ContainerComponent = ({titulo, saludo}) => {
  return( 
  <div>
    <h2>{titulo}</h2>
    <p>{saludo}</p>
    <ClassComponent tipoDeAuto='Sedan'/>
  </div>
  );
};

export default ContainerComponent;
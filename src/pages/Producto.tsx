import { useParams } from "react-router-dom";

const Producto = () => {
  const { id } = useParams();
  
  return (
    <div className="container px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-foreground">Producto {id}</h1>
      <p className="text-lg text-muted-foreground">
        Página de detalle de producto en construcción
      </p>
    </div>
  );
};

export default Producto;

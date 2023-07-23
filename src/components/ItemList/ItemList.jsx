import { Link } from "react-router-dom";
import { clock } from "../../assets";

const ItemList = ({ id, title, cursos, duration, standardPlan, coderBeca }) => {
  return (
    <div className="flex flex-col rounded-md border bg-base-100 w-3/3 h-[550px] md:w-[450px] justify-center relative overflow-hidden">
      <span className="bg-secondary text-neutral font-bold text-sm text-center absolute top-0 w-full">Aprovechá la CoderBeca del 70%</span>
      <div className="flex flex-col px-14 py-5 gap-5">
        <p className="text-3xl font-bold">{title}</p>
        <div className="text-gray-400 text-sm">
          <p className="mb-4 font-semibold">Incluye {cursos.length} cursos</p>
          <ul>
            {cursos.map((curso, index) => (
              <li key={index}>•{curso}</li>
            ))}
          </ul>
          <span className="flex items-center gap-2 my-5 text-xs">
            <img src={clock} alt="clock" />
            {duration} / 2 clases semanales de 2 h
          </span>
          Standard Plan $ {standardPlan} ARS<br/> CoderBeca + 15% OFF $ {coderBeca} ARS 
        </div>
 
        <span className="flex flex-col">
          <p>Hasta 6 cuotas sin interés</p>
          <p className="text-3xl">$ {(standardPlan / 6).toFixed(0)} ARS</p>
        </span>
        <Link to={`/products/item/${id}`}>
        <button className="btn btn-primary btn-outline w-full mx-auto">
          Ver Carrera
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemList;
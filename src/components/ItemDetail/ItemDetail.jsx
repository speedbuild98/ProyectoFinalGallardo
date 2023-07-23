import { onlineRed } from "../../assets";
import { company } from "../../assets/tech-companies";
import BuyButton from "../BuyButton/BuyButton";

const ItemDetail = ({ product }) => {
  return (
    <div className="flex flex-col gap-10 overflow-hidden relative w-fit">
      <span className="flex items-center">
        <img src={onlineRed} alt="onlineRed" className="animate-pulse" /> Online
        en vivo
      </span>
      <h1 className="text-4xl font-black md:text-6xl">{product.title}</h1>
      <ul className="md:font-semibold flex flex-col md:gap-6">
        <li>• Corrección de proyectos prácticos</li>
        <li>• Tutoría personalizada</li> 
        <li className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-0 w-fit block">• ¡Aprovechá 2 clases de prueba!</li>
      </ul>
      <BuyButton
        product={product}
        standardPlan={product.standardPlan}
        coderBeca={product.coderBeca}
      />

      <div className="md:w-fit flex flex-col border-b border-gray-600 gap-5">
        <p>Programa cocreado con expertos de:</p>
        <div className="flex flex-row flex-wrap justify-around md:justify-start">
          {company.map((company) => (
            <img key={company.id} className="invert w-24" src={company.logo} alt={company.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

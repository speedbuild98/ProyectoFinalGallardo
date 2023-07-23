import ItemDetail from "../ItemDetail/ItemDetail";
import Layout from "../Layout/Layout";
import BuyButton from "../BuyButton/BuyButton";
import { Navigate, useParams, Link } from "react-router-dom";
import { DataContext } from "../../utils/DataContextProvider";
import { useContext } from "react";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { cursos } = useContext(DataContext); 
  const product = cursos.find((curso) => curso.id.toString() === productId);

  if (!product) {
    return <Navigate to="/error404" />;
  }
  return (
    <Layout>
      <div className="flex flex-col gap-10 w-full">
      <ItemDetail product={product} />
      </div>
      <button>
        <Link to="/products" className="btn btn-ghost btn-outline btn-sm">
          Volver
        </Link>
      </button>
      <div className="w-screen border-t border-gray-400 fixed bottom-0 bg-base-100">
        <div className="w-full flex flex-row justify-between items-center py-5 px-5 md:px-32 mx-auto max-w-[1440px]">
          <span className="text-xs md:text-md">
            <p>Hasta 6 cuotas sin interés de</p>
            <p className="font-semibold text-3xl">$31025 ARS</p>
            <p>CoderBeca + 15% OFF $188150 ARS</p>
          </span>
          <BuyButton product={product} />
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetailContainer;

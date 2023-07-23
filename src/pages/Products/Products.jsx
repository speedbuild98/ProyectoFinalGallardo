import { useEffect, useState, useContext } from "react"; 
import { onlineRed } from "../../assets";
import { Layout, ItemListContainer } from "../../components";
import { useParams,Link } from "react-router-dom"; 
import {DataContext} from "../../utils/DataContextProvider";

const Products = () => {
  const { categoryId } = useParams();
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId);
  const { cursos } = useContext(DataContext); // Usa el contexto para acceder a los cursos

  useEffect(() => {
    setSelectedCategoryId(categoryId);
  }, [categoryId]);

  const categories = [...new Set(cursos.map((curso) => curso.category))];

  return (
    <Layout>
      <span className="flex items-center">
        <img src={onlineRed} alt="onlineRed" className="animate-pulse" /> Online en vivo
      </span>
      <h1 className="uppercase font-black text-2xl">Elegí tu curso o carrera</h1>
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        {categories.map((category) => (
          <Link to={`/products/category/${category}`} key={category}>
            <button
              className={`btn btn-sm ${
                selectedCategoryId === category ? "btn-primary" : "btn-secondary"
              }`}
            >
              {category}
            </button>
          </Link>
        ))}
      </div>
      <ItemListContainer categoryId={selectedCategoryId} />
    </Layout>
  );
};

export default Products;













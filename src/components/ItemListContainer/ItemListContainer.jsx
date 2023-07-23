import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { useContext } from "react";
import {DataContext} from "../../utils/DataContextProvider";

import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
// Importar el componente ItemList
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({ categoryId }) {
  const { cursos } = useContext(DataContext);
  const filteredProducts = categoryId
    ? cursos.filter((curso) => curso.category === categoryId)
    : cursos;

  return (
    <>
      <Swiper className="z-0 flex flex-row w-full justify-center items-center md:hidden" navigation={true} modules={[EffectFade, Navigation]} effect="fade">
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ItemList
              id={product.id}
              title={product.title}
              cursos={product.cursos}
              duration={product.duration}
              standardPlan={product.standardPlan}
              coderBeca={product.coderBeca}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="hidden md:flex flex-row w-full justify-center items-center z-1 gap-10 flex-wrap">
          {filteredProducts.map((product) => (
            <ItemList
              key={product.id}
              id={product.id}
              title={product.title}
              cursos={product.cursos}
              duration={product.duration}
              standardPlan={product.standardPlan}
              coderBeca={product.coderBeca}
            />
          ))}
        </div>
      </div>
    </>
  );
}
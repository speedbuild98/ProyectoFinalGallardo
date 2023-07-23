// Desc: This is the Home page of the application
import { useState } from "react";
import { Link } from "react-router-dom";
//Components
import { Layout } from "../../components";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineYoutube,AiFillCloseCircle } from "react-icons/ai";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(!showVideo);
  };

  return (
    <Layout>
      <button className="py-4 px-12 rounded-md border text-center flex flex-col shadow-yellow">
        <a
          target="blank"
          href="https://coderhouse.typeform.com/to/VszHAU1f?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx"
        >
          Accedé a nuestra Charla informativa y conocé todo sobre Coderhouse
          <span className="flex mx-auto justify-center items-center gap-1">
            Ver ahora
            <FaArrowRight />
          </span>
        </a>
      </button>
      <h1 className="text-3xl font-[700] my-10 text-center md:text-5xl">
        Unite a la comunidad de aprendizaje online en{" "}
        <span className="text-primary">vivo</span> más grande de Latinoamérica
      </h1>
      <button className="btn btn-primary w-[230px]">
        <Link to="/products">
        Ver todos los cursos
        </Link>
      </button>
      <button onClick={handlePlay} className="btn btn-ghost text-primary w-[230px]">
        <AiOutlineYoutube className="text-2xl" />
        Conocé Coderhouse
      </button>
      {showVideo ? (
        <div className="absolute w-full max-w-[80%] md:max-w-[50%]">
          <button
            onClick={handlePlay}
            className="absolute top-2 right-2 btn btn-primary btn-circle h-4 w-4"
          >
            <AiFillCloseCircle />
          </button>
          <iframe
            className="w-full min-h-[300px] rounded-md"
            src="https://www.youtube.com/embed/alu-bkwsBAE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
    </Layout>
  );
};

export default Home;

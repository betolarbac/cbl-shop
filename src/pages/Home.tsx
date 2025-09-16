import bannerImage from "../assets/banner.png";
import { Link } from "react-router";
import { Banner } from "../components/Banner";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 text-center">
      <div>
        <Banner image={bannerImage} link="/ofertas" />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo à Nossa Loja!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        As melhores ofertas da semana estão a apenas um clique de distância.
      </p>
      <Link
        to="/ofertas"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Ver Ofertas da Semana
      </Link>
    </div>
  );
}

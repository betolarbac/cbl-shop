import type { Product } from "../interfaces/Product";

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className=" relative bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div className="p-4">
        <div className="flex justify-center items-center h-48 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <h3 className="text-sm font-semibold text-gray-800 h-10">{product.title}</h3>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xl font-bold text-gray-900">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>

      <div className="p-2">
        <button className="w-full bg-blue-600 text-white text-center py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
        onClick={() => alert('Produto adicionado ao carrinho!')}>Comprar</button>
      </div>
    </div>
  );
}

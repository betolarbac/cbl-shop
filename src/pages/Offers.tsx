import bannerImage from '../assets/banner.png';
import { Banner } from '../components/Banner';
import { CategoryFilter } from '../components/CategoryFilter';
import { Pagination } from '../components/Pagination';
import { ProductGrid } from '../components/ProductGrid';
import { usePagination } from '../hooks/usePagination';
import { useProducts } from '../hooks/useProducts';

export function Offers() {
  const { products, categories, loading, selectedCategory, setSelectedCategory } = useProducts();
  const {
    currentPage,
    totalPages,
    paginatedItems,
    handleNextPage,
    handlePreviousPage,
    resetPage
  } = usePagination(products, 6);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    resetPage();
  }

  return (
    <div className="w-full">
      <Banner image={bannerImage} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Ofertas da Semana
        </h1>

        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        <ProductGrid products={paginatedItems} loading={loading} />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        )}
      </main>
    </div>
  );
}
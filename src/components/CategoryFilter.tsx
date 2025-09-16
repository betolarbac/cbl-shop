interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }
  
  export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
    return (
      <div className="flex justify-center mb-8 flex-wrap">
        <button
          onClick={() => onSelectCategory('')}
          className={`px-4 py-2 mx-2 mb-2 rounded-lg ${selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Todos
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 mx-2 mb-2 rounded-lg ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
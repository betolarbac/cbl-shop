interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
  }
  
  export function Pagination({ currentPage, totalPages, onNextPage, onPreviousPage }: PaginationProps) {
    return (
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-200 rounded-lg disabled:opacity-50 cursor-pointer" 
        >
          Anterior
        </button>
        <span className="mx-4">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-200 rounded-lg disabled:opacity-50 cursor-pointer"
        >
          Próxima
        </button>
      </div>
    );
  }
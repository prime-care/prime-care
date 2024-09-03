import { useState } from "react";

// components
import { Pagination } from "flowbite-react";

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

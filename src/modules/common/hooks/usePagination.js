import { useState } from "react";

const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const resetPage = () => {
        setCurrentPage(1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    return {
        currentItems,
        currentPage,
        totalPages,
        handlePageChange,
        resetPage,
    };
};

export default usePagination;

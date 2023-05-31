import React from "react";
import styles from "./pagination.module.scss";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handleNextPage: (page: number) => void;
    handlePrevPage: (page: number) => void;
};

const Pagination = ({
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage
}: PaginationProps) : JSX.Element => {
    const {
        pagination__container,
        pagination__navigationButton,
        pagination__pageInfo
    } = styles;
    return (
        <div className={pagination__container}>
            <button
                className={pagination__navigationButton}
                onClick={() => handlePrevPage(currentPage)}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>

            <span className={pagination__pageInfo}>
                Page {currentPage} of {totalPages}
            </span>

            <button
                className={pagination__navigationButton}
                onClick={() => handleNextPage(currentPage)}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;

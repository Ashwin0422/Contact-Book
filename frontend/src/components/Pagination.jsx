import React from 'react';

const Pagination = ({ page, totalPages, onPageChange }) => {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
            >
                &laquo; Prev
            </button>
            <span>
                Page {page} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page >= totalPages}
            >
                Next &raquo;
            </button>
        </div>
    );
};

export default Pagination;

/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import classNames from "classnames";
import Pagination from "../model/Pagination";

export interface PaginationViewProps {
    pagination?: Pagination;
    onClick: (clickedNumber: number) => void;
}

export default function PaginationView(props: PaginationViewProps) {
    const { pagination, onClick } = props;
    if (!pagination) return null;

    const currentPage = pagination.getCurrentPage();
    const pageList = pagination.getPageButtonNumberList();
    const isCurrentPage = (num: number) => (num === currentPage);

    return (
        <div>
            {pagination.hasPrevPages() && (
                <button onClick={() => onClick(currentPage - 1)}>PREV</button>
            )}
            {pageList.map(page => (
                <button
                    className={classNames({ current: isCurrentPage(page) })}
                    style={{ fontWeight: isCurrentPage(page) ? 'bold' : 'normal'}}
                    key={page}
                    onClick={() => onClick(page)}
                >
                    {page}
                </button>
            ))}
            {pagination.hasNextPages() && (
                <button onClick={() => onClick(currentPage + 1)}>NEXT</button>
            )}
        </div>
    );
}
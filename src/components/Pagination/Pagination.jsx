import React, { useState } from 'react'
import s from './Pagination.module.scss';
import classnames from 'classnames';

export const Pagination = ({itemsAmount = 100, itemsPerPage = 10, onChange, amountPagesToShow = 5}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesAmount = itemsAmount / itemsPerPage;
  const setPage = page => setCurrentPage(page);

  const increasePage = () => {
    currentPage < pagesAmount && setCurrentPage(currentPage + 1)
    onChange(currentPage);
  };
  const decreasePage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
    onChange(currentPage);
  };

  const renderPages = amount => {
    const from = currentPage - amountPagesToShow < 1 ? 1 : currentPage - amountPagesToShow;
    const to = from + amountPagesToShow;
    const pages = [];
    for(let i = 1; i <= amount; i++) {
      pages.push(i);
    }
    return pages.filter(i => {
      return i >= from && i <= to;
    }).map(i => {
      return (
      <span
        key={i}
        onClick={() => {
          onChange(i);
          setPage(i);
        }}
        className={classnames(
          s.pagination__item,
          {[s['pagination__item--active']]: i === currentPage }
        )}>
        {i}
      </span>);
    });
  }

  return (
    <div className={s.pagination}>
      <span 
        onClick={decreasePage}
        className={`${s.pagination__item} ${s.pagination__arrow} ${s.pagination__arrow__left}`}>
        ←
      </span>
        {renderPages(pagesAmount)}
      <span
        onClick={increasePage}
        className={`${s.pagination__item} ${s.pagination__arrow} ${s.pagination__arrow__left}`}>
        →
      </span>
    </div>
  )
}

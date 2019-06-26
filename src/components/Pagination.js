import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    //add list of page numbers to array
    //should add numbers 1-10 to array
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination

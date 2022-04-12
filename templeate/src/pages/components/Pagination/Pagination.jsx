import React from "react";

const Pagination = () => {
    return (
        <>
            <div className='Paginationcontainer'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="./Longin" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="./Longin">1</a></li>
                        <li className="page-item"><a className="page-link" href="./Longin">2</a></li>
                        <li className="page-item"><a className="page-link" href="./Longin">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Pagination;
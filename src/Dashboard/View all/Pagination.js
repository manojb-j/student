import React from 'react'
import './style.css'

function Pagination({ totalRows, rowsPerPage, setCurrentPage, CurrentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pages.push(i)
    }
    return (

        <div className='Pagination d-flex align-items-center justify-content-center' style={{ marginTop: "1%" }}>
            <button onClick={() => setCurrentPage(1)} className='pg-btn'
                style={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    border: "white",
                    backgroundColor: "skyblue",
                    marginRight: "1%"
                }}
            >first page</button>
            {
                pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page === CurrentPage ? 'active' : ''}
                            style={{
                                width: "40px",
                                height: "30px",
                                borderRadius: "5px",
                                border: "white",
                                backgroundColor: page === CurrentPage ? "#f55151" : "skyblue", 
                                marginRight: "1%"
                            }}
                        >
                            {page}
                        </button>
                    )
                })
            }
            <button className='pg-btn' onClick={() => setCurrentPage(pages[pages.length - 1])}
                style={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    border: "white",
                    backgroundColor: "skyblue",
                    marginRight: "1%"
                }}
            >last page</button>
        </div>
    )
}

export default Pagination
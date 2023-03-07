import React from 'react'

const Sales = () => {
    return (
        <>
            <div className="container">
                <section>
                    <div className='special'>
                        <h4 className="">
                            SALE PRODUCTS
                        </h4>
                        {" "}
                        <div
                            id="carouselExampleCaptions"
                            class="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                >

                                </button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                >

                                </button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                >

                                </button>
                            </div>
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <img
                                        src="images/wood-portfolio-placeholder.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                        style={{ height: 500 }}
                                        className="carousel-inner2"
                                    />

                                </div>

                                <div class="carousel-item">
                                    <img
                                        src="images/wood-portfolio-placeholder.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                        style={{ height: 500 }}
                                        className="carousel-inner2"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Sales
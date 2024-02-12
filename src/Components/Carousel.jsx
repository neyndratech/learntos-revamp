import React, { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Carousedata from '../Data/Carousel.json';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import '../Styles/Carousel.css'

function Carousel_file() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <BrowserRouter>
            <div>
                <Carousel
                    activeIndex={activeIndex}
                    onSelect={handleSelect}
                    prevIcon={false}
                    nextIcon={false}
                    nextLabel={false}
                    prevLabel={false}
                    slide={false}
                    indicators={false}
                >
                    {Carousedata.entries.map((data, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={data.imagelink}
                                style={{ maxHeight: '70vh' }}
                                alt={`Slide ${index + 1}`}
                            />
                            <Carousel.Caption className='carousel-content col-10 py-5 my-5'>
                                <h1>{data.header}</h1>
                                <p>{data.paragraph}</p>
                                <Link to="/learn-more" className="btn btn-success border-0">Learn more</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="carousel-indicators text-center col-2">
                    <Button style={{ background: 'transparent' }} className='carousel-scroll-button border-0 ml-auto mr-5'>
                        <FaAngleDoubleDown />
                    </Button>
                    {Carousedata.entries.map((data, index) => (
                        <Link
                            key={index}
                            to={`/${data.header}`}
                            className={index === activeIndex ? 'indicator-active mx-2 px-3 rounded' : 'indicator mx-2 px-3 rounded'}
                            onClick={() => handleButtonClick(index)}
                        >
                            {data.header}
                        </Link>
                    ))}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Carousel_file;

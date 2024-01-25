import React, { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Carousedata from '../Data/Carousel.json';
import { Button } from 'react-bootstrap';
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
                            <Button
                                variant="success"
                                className="border-0"
                                onClick={() => console.log('Learn more clicked')}
                            >
                                Learn more
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="carousel-indicators text-center col-2">
                <Button style={{ background: 'transparent' }} className='carousel-scroll-button border-0 ml-auto mr-5'>
                    <FaAngleDoubleDown />
                </Button>
                {Carousedata.entries.map((data, index) => (
                    <Button
                        key={index}
                        className={index === activeIndex ? 'active bg-primary border-0' : 'm-1 bg-light text-dark border-0'}
                        onClick={() => handleButtonClick(index)}
                    >
                        {data.header}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Carousel_file

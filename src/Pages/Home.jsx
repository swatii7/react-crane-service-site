import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import cardImgOne from '../assets/Images/crane-img-one.png';
import cardImgTwo from '../assets/Images/crane-img-two.png';
import cardImgThree from '../assets/Images/crane-img-three.png';
import cardImgFour from '../assets/Images/crane-img-four.png';
import cardImgFive from '../assets/Images/crane-img-five.png';
import cardImgSix from '../assets/Images/crane-img-six.png';
import Card from "../Components/CardComponent";

function Home(){
    const serviceArr = [
        {
            image: cardImgOne,
            title: 'Crane Rental Services',
            alt: 'crane rental services',
            description: <ul>
                <li>Mobile cranes for construction sites</li>
                <li>Truck-mounted cranes for transportation and lifting</li>
                <li>Hydraulic and all-terrain cranes</li>
            </ul>
        },
        {
            image: cardImgTwo,
            title: 'Heavy Lifting & Hoisting',
            description: <ul>
                <li>Lifting machinery, equipment, or large structures</li>
                <li>Industrial hoisting solutions</li>
                <li>Warehouse and factory lifting</li>
            </ul>
        },
        {
            image: cardImgThree,
            title: 'Construction Support',
            description: <ul>
                <li>Assistance in building multi-story structures</li>
                <li>Concrete pouring and material lifting</li>
                <li>Steel beam placement</li>
            </ul>
        },
        {
            image: cardImgFour,
            title: 'Loading & Unloading Services',
            description: <ul>
                <li>Loading and unloading of heavy cargo</li>
                <li>Port, warehouse, and storage lifting</li>
                <li>Logistics support for oversized items</li>
            </ul>
        },
        {
            image: cardImgFive,
            title: 'Specialized Services',
            description: <ul>
                <li>Crane operation for event setups (stages, billboards, tents)</li>
                <li>Emergency lifting and disaster support</li>
                <li>Customized lifting solutions for unique projects</li>
            </ul>
        },
        {
            image: cardImgSix,
            title: 'Skilled Operators & Safety',
            description: <ul>
                <li>Experienced, certified crane operators</li>
                <li>Safety compliance and risk assessment</li>
                <li>On-site guidance and project supervision</li>
            </ul>
        },
    ]
    return(
        <>
        <section className="heroContainer text-center position-relative d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col lg="8" className="mx-auto">
                        <h1 className="text-light fw-bold fs-1 mb-3 px-lg-5">Reliable Crane & Lifting Solutions- 
                            <TypeAnimation
                                sequence={[
                                    'Anytime',
                                    1000,
                                    'Anywhere',
                                    1000,
                                ]}
                                speed={60}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-light fw-normal mb-5">At <strong>Ashok Crane Service</strong>, we provide safe, efficient, and 
                            affordable crane rentals for construction, transport, and heavy-lifting 
                            projects. With modern equipment and skilled operators, we make lifting 
                            simple and hassle-free.
                        </p>
                        <a href="tel:+919876543210" className="box__link button-animation fs-4 fw-semibold">
                            Call Now: +91-9876543210
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="our_services">
            <Container>
                <Row>
                    <Col xs="12">
                    <h2>Our Services</h2>
                    <p></p>
                    </Col>
                    {serviceArr.map((card, index)=>
                    <Col xs="12" md="6" lg="4" key={index} className="mb-4">
                        <Card imgSrc={card.image} imgAlt={card.alt} cardTitle={card.title} cardDescription={card.description} />
                    </Col>
                    )}
                    
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Home;

import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Card as BootstrapCard,
} from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import cardImgOne from "../assets/Images/imageOne.png";
import cardImgTwo from "../assets/Images/imageTwo.png";
import cardImgThree from "../assets/Images/image_three.png";
import cardImgFour from "../assets/Images/imageFour.png";
import cardImgFive from "../assets/Images/imageFive.png";
import cardImgSix from "../assets/Images/imageSix.png";
import workVideo from "../assets/Images/work.mp4";
import Card from "../Components/CardComponent";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const serviceArr = [
    {
      image: cardImgOne,
      title: "Crane Rental Services",
      alt: "crane rental services",
      description: (
        <ul>
          <li>Mobile cranes for construction sites</li>
          <li>Truck-mounted cranes for transportation and lifting</li>
          <li>Hydraulic and all-terrain cranes</li>
          <li>24/7 emergency crane services</li>
        </ul>
      ),
    },
    {
      image: cardImgTwo,
      title: "Heavy Lifting & Hoisting",
      description: (
        <ul>
          <li>Lifting machinery, equipment, or large structures</li>
          <li>Industrial hoisting solutions</li>
          <li>Warehouse and factory lifting</li>
          <li>Precision heavy equipment placement</li>
        </ul>
      ),
    },
    {
      image: cardImgThree,
      title: "Construction Support",
      description: (
        <ul>
          <li>Assistance in building multi-story structures</li>
          <li>Concrete pouring and material lifting</li>
          <li>Steel beam placement</li>
          <li>Infrastructure development projects</li>
        </ul>
      ),
    },
    {
      image: cardImgFour,
      title: "Loading & Unloading Services",
      description: (
        <ul>
          <li>Loading and unloading of heavy cargo</li>
          <li>Port, warehouse, and storage lifting</li>
          <li>Logistics support for oversized items</li>
          <li>Container handling and transport</li>
        </ul>
      ),
    },
    {
      image: cardImgFive,
      title: "Specialized Services",
      description: (
        <ul>
          <li>Crane operation for event setups (stages, billboards, tents)</li>
          <li>Emergency lifting and disaster support</li>
          <li>Customized lifting solutions for unique projects</li>
          <li>Bridge construction and maintenance</li>
        </ul>
      ),
    },
    {
      image: cardImgSix,
      title: "Skilled Operators & Safety",
      description: (
        <ul>
          <li>Experienced, certified crane operators</li>
          <li>Safety compliance and risk assessment</li>
          <li>On-site guidance and project supervision</li>
          <li>Regular equipment maintenance and inspection</li>
        </ul>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Construction Ltd.",
      text: "Ashok Crane Service has been our reliable partner for over 5 years. Their professionalism, safety standards, and timely delivery are unmatched in the industry.",
    },
    {
      name: "Priya Sharma",
      company: "Sharma Industries",
      text: "Excellent service and competitive pricing. They completed our complex industrial project on time and within budget. Highly recommended for any heavy lifting needs!",
    },
    {
      name: "Amit Patel",
      company: "Patel Logistics",
      text: "The team is highly skilled and the equipment is well-maintained. They made our challenging heavy lifting project look effortless. Outstanding work!",
    },
    {
      name: "Sunita Gupta",
      company: "Gupta Builders",
      text: "Professional service with attention to detail. Their safety protocols and experienced operators give us complete confidence in their work.",
    },
  ];

  const whyChooseUs = [
    {
      icon: "🏗️",
      title: "15+ Years Experience",
      description:
        "Over a decade and a half of expertise in crane operations and heavy lifting across various industries",
    },
    {
      icon: "🛡️",
      title: "Safety First Approach",
      description:
        "Certified operators and strict safety protocols ensuring zero accidents and maximum project security",
    },
    {
      icon: "⚡",
      title: "24/7 Emergency Service",
      description:
        "Round-the-clock availability for emergency and urgent lifting needs across the region",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description:
        "Affordable rates without compromising on quality, safety, or service excellence",
    },
    {
      icon: "🔧",
      title: "Modern Equipment",
      description:
        "Latest crane technology and well-maintained fleet ensuring efficient and reliable operations",
    },
    {
      icon: "📞",
      title: "Quick Response",
      description:
        "Fast response time and immediate availability for urgent project requirements",
    },
  ];

  const galleryImages = [
    { src: cardImgOne, alt: "Mobile Crane in Action" },
    { src: cardImgTwo, alt: "Heavy Lifting Operation" },
    { src: cardImgThree, alt: "Construction Site Work" },
    { src: cardImgFour, alt: "Loading Operations" },
    { src: cardImgFive, alt: "Specialized Lifting" },
    { src: cardImgSix, alt: "Safety-First Operations" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="heroContainer text-center position-relative d-flex justify-content-center align-items-center"
      >
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <h1 className="text-light fw-bold mainHeading mb-3 px-lg-5">
                Reliable Crane & Lifting Solutions-
                <TypeAnimation
                  sequence={[
                    "Anytime",
                    1000,
                    "Anywhere",
                    1000,
                    "Any Project",
                    1000,
                  ]}
                  speed={60}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-light fw-normal mb-5 fs-5">
                At <strong>Ashok Crane Service</strong>, we provide safe,
                efficient, and affordable crane rentals for construction,
                transport, and heavy-lifting projects. With modern equipment and
                skilled operators, we make lifting simple and hassle-free across
                India.
              </p>
              <a
                href="tel:+919876543210"
                className="box__link button-animation fs-4 fw-semibold"
              >
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

      {/* Why Choose Us Section */}
      <section className="whyChooseUs py-5">
        <Container>
          <Row>
            <Col xs="12" className="text-center mb-5">
              <h2 className="sectionHeading fw-bold fs-1">
                Why Choose Ashok Crane Service?
              </h2>
              <p className="text-muted fs-5">
                We deliver excellence in every project with our commitment to
                safety, reliability, and customer satisfaction
              </p>
            </Col>
            {whyChooseUs.map((item, index) => (
              <Col xs="12" md="6" lg="4" key={index} className="mb-4">
                <div className="whyChooseCard text-center p-4 h-100">
                  <div className="whyChooseIcon mb-3">
                    <span className="fs-1">{item.icon}</span>
                  </div>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="our_services">
        <Container>
          <Row>
            <Col xs="12" className="text-center mb-5">
              <h2 className="sectionHeading fw-bold fs-1">
                Our Comprehensive Services
              </h2>
              <p className="text-muted fs-5">
                Complete crane and lifting solutions for all your project needs
              </p>
            </Col>
            {serviceArr.map((card, index) => (
              <Col xs="12" md="6" lg="4" key={index} className="mb-4">
                <Card
                  imgSrc={card.image}
                  imgAlt={card.alt}
                  cardTitle={card.title}
                  cardDescription={card.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Us Section */}
      <section id="about" className="aboutUs py-5">
        <Container>
          <Row>
            <Col
              xs="12"
              lg="6"
              className="text-center text-lg-start mb-4 order-2"
            >
              <h2 className="sectionHeading fw-bold fs-1">
                About Ashok Crane Service
              </h2>
              <p className="fs-6">
                Since 2008, <strong>Ashok Crane Service</strong> has been a
                trusted name in the lifting and crane rental industry. With over{" "}
                <strong>15 years of experience</strong>, we have successfully
                completed more than <strong>1000+ projects</strong> across
                various sectors including construction, manufacturing,
                logistics, and infrastructure development.
              </p>
              <p className="fs-6">
                Our commitment to safety, reliability, and efficiency has made
                us the preferred choice for both commercial and residential
                projects. We pride ourselves on our{" "}
                <strong>experienced team of certified operators</strong>, modern
                fleet of cranes, and dedication to delivering timely,
                cost-effective services tailored to your specific needs.
              </p>
              <p className="fs-6">
                At Ashok Crane Service, we don't just lift heavy loads — we lift
                your projects to success with precision, safety, and excellence.
              </p>
              <div className="aboutStats mt-4">
                <Row>
                  <Col xs="6" className="text-center">
                    <h3 className="fw-bold text-primary">1000+</h3>
                    <p className="text-muted">Projects Completed</p>
                  </Col>
                  <Col xs="6" className="text-center">
                    <h3 className="fw-bold text-primary">15+</h3>
                    <p className="text-muted">Years Experience</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" lg="6" className="mb-4 order-1 aboutImgWrap">
              <div className="aboutImagePlaceholder d-flex align-items-center justify-content-center">
                <span className="fs-1 text-muted">🏗️</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery py-5 bg-light">
        <Container>
          <Row>
            <Col xs="12" className="text-center mb-5">
              <h2 className="sectionHeading fw-bold fs-1">Our Work Gallery</h2>
              <p className="text-muted fs-5">
                See our cranes in action across various projects and industries
              </p>
            </Col>
            {galleryImages.map((image, index) => (
              <Col xs="12" md="6" lg="4" key={index} className="mb-4">
                <BootstrapCard className="galleryCard h-100">
                  <div className="galleryImageWrap">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="galleryImage"
                    />
                  </div>
                  <BootstrapCard.Body className="text-center">
                    <BootstrapCard.Title className="fw-bold">
                      {image.alt}
                    </BootstrapCard.Title>
                  </BootstrapCard.Body>
                </BootstrapCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5">
        <Container>
          <Row>
            <Col xs="12" className="text-center mb-5">
              <h2 className="sectionHeading fw-bold fs-1">
                What Our Clients Say
              </h2>
              <p className="text-muted fs-5">
                Hear from our satisfied customers about their experience with us
              </p>
            </Col>
            {testimonials.map((testimonial, index) => (
              <Col xs="12" md="6" lg="3" key={index} className="mb-4">
                <div className="testimonialCard p-4 h-100 d-flex flex-column justify-content-between">
                  <div className="testimonialText mb-3">
                    <p className="fst-italic">"{testimonial.text}"</p>
                  </div>
                  <div className="testimonialAuthor">
                    <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.company}</small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-5">
        <Container>
          <Row>
            <Col xs="12" className="text-center mb-5">
              <h2 className="sectionHeading fw-bold fs-1">
                Get In Touch With Us
              </h2>
              <p className="text-muted fs-5">
                Ready to start your project? Contact us for a free quote and
                consultation
              </p>
            </Col>
            <Col xs="12" lg="8" className="mx-auto">
              <Row>
                <Col xs="12" md="6" className="mb-4">
                  <div className="contactInfo">
                    <h4 className="fw-bold mb-4">Contact Information</h4>
                    <div className="contactItem mb-3">
                      <h6 className="fw-bold">📞 Phone Numbers</h6>
                      <a className="text-white d-block text-decoration-none" href="tel:+919816603673">+91 98166 03673</a>
                      <a className="text-white d-block text-decoration-none" href="tel:+918219595118">+91 82195 95118</a>
                      <a className="text-white d-block text-decoration-none" href="tel:+919805866501">+91 98058 66501</a>
                    </div>
                    <div className="contactItem mb-3">
                      <h6 className="fw-bold">📧 Email Address</h6>
                      <p>
                        info@ashokcraneservice.com
                      </p>
                    </div>
                    <div className="contactItem">
                      <h6 className="fw-bold">🕒 Working Hours</h6>
                      <p>
                        24/7 Emergency Service
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Service Required</Form.Label>
                      <Form.Select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a service</option>
                        <option value="crane-rental">Crane Rental</option>
                        <option value="heavy-lifting">Heavy Lifting</option>
                        <option value="construction-support">
                          Construction Support
                        </option>
                        <option value="loading-unloading">
                          Loading & Unloading
                        </option>
                        <option value="specialized">
                          Specialized Services
                        </option>
                        <option value="emergency">Emergency Service</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Project Details</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your project requirements..."
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      className="btn btn-primary w-100 btn-lg"
                    >
                      Send Inquiry
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-light">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <h5 className="fw-bold mb-3">Ashok Crane Service</h5>
              <p className="mb-2">
                Your trusted partner for all crane and lifting needs since 2008
              </p>
              <p className="mb-0">
                &copy; 2024 Ashok Crane Service. All rights reserved.
              </p>
              <p className="mb-0">
                Serving across India with excellence and safety
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Home;

import React, { useState } from 'react';
import { Card, Col, Button, Modal, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Show.css'

const Show = (props) => {
    const { name, image, rating, genres, language, summary, status, schedule, url } = props.show;

    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Col data-aos="zoom-in" data-aos-delay="700" >
                <div className="thumbnail">
                    <Card.Img src={image?.medium} />
                    <div className="hover">
                    </div>
                    <div className="content">
                        <h2>{name}</h2>
                        <p><span className="text">Genres: </span>{genres[0]}</p>
                        <p><span className="text">Language: </span>{language}</p>
                        <p><Rating className="p-2" initialRating={rating.average} fullSymbol={<AiFillStar />} emptySymbol={<AiOutlineStar />} readonly />
                        </p>
                        <Button onClick={() => setLgShow(true)}>See Details</Button>

                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    {name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                        <Card.Img src={image?.medium} />
                                    </Col>
                                    <Col>
                                        <p>{summary}</p>
                                        <p><span className="text-primary">Status: </span>{status}</p>
                                        <p><span className="text-primary">Schedule: </span>{schedule.time}</p>
                                        <Button varient="info"><a className="text text-decoration-none" href={url} target="blank">SHOW NOW</a></Button>
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </Col>

        </>
    );
};

export default Show;
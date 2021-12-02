import React, { useState } from 'react';
import { Card, Col, Button, Modal, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Show.css'

const Show = (props) => {
    const { name, image, rating, genres, summary } = props.show;

    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Col data-aos="zoom-in" data-aos-delay="700" >
                <div className="thumbnail">
                    <Card.Img src={image?.medium} />

                    <div className="hover" >

                        <h2>{name}</h2>
                        <p><span className="text-primary">Genres: </span>{genres[0]}</p>
                        <Rating className="p-2" initialRating={rating.average} fullSymbol={<AiFillStar />} emptySymbol={<AiOutlineStar />} readonly />
                        <Button onClick={() => setLgShow(true)}>Details</Button>

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
                                        {summary}
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
import React, { useState } from 'react';
import { Container, Form, FormControl, Row } from 'react-bootstrap';
import Show from './../Show/Show';

const Search = () => {
    const [tvShow, setTvShow] = useState([]);

    const handelSearch = e => {
        const find = e.target.value;
        fetch(`https://api.tvmaze.com/search/shows?q=${find}`)
            .then(res => res.json())
            .then(data => setTvShow(data))
    }
    console.log(tvShow);
    return (
        <>
            <Container className="my-5">
                <h1 className="text-center"><span className="text-primary">Search</span> your favorite <span className="text-info">TV Show </span></h1>
                <Form className="w-50 m-auto">
                    <FormControl type="search" onChange={handelSearch} placeholder="Search your favorite TV shows" className="me-2" aria-label="Search" />
                </Form>
            </Container>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        tvShow.map(show => <Show key={show.show.id} show={show.show}></Show>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Search;
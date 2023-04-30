import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorSights from '../EditorSights';

const News = () => {
    const news = useLoaderData()
    const { title, details, _id, image_url, author, category_id } = news;
    return (
        <>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorSights></EditorSights>
        </>
    );
};

export default News;
import moment from 'moment';
import React from 'react';
import { Image } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image src={author?.img} roundedCircle style={{ height: '40px' }} />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details?.length < 250 ? <>
                        {details}
                    </> : <>{details?.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                

                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
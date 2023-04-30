import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard';

const Catagories = () => {
    //const {id} = useParams()
    const catagoryNews = useLoaderData();
    
    return (
        <div>
            <h2>This is catagory:{catagoryNews.length}</h2>
            {
                catagoryNews.map(news =><NewsCard
                   key={news._id}
                   news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagories;
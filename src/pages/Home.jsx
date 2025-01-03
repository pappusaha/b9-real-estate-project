import React from 'react';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import AgentList from '../Components/AgentList';
import Faq from '../Components/Faq';
import QueryForm from '../Components/QueryForm';
import Sponsor from '../Components/Sponsor';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='bg-gray-100 '>
              {/* this is dynamic title */}
       <Helmet>
                <title> Real-estate |Home</title>
            </Helmet>
        <Banner></Banner>
        <div className='w-11/12 mx-auto'>
        <Products></Products>
        <AgentList></AgentList>
        
        </div>
        <QueryForm></QueryForm>
        <div className='w-11/12 mx-auto'>
        <Faq></Faq>

        </div>
        <Sponsor></Sponsor>
        </div>
    );
};

export default Home;
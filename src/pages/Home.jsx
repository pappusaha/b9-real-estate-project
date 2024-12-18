import React from 'react';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import AgentList from '../Components/AgentList';
import Faq from '../Components/Faq';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <div className='w-11/12 mx-auto'>
        <Products></Products>
        <AgentList></AgentList>
        <Faq></Faq>
        </div>
        </div>
    );
};

export default Home;
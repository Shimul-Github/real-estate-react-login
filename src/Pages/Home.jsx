import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Estates from '../components/Estates';
import LeftSideNav from '../components/LeftSideNav';
import RightSideNav from '../components/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border-solid'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border-solid'>
                    <Estates></Estates>
                </div>
                <div className='border-solid'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>



        </div>
    );
};

export default Home;
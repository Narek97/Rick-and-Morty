import React from 'react';
import logo from '../public/images/logo.jpg';
import Image from "next/image";

const Index = () => {
    return (
        <div className={'page home-page'}>
            <h1 data-aos="zoom-in">Rick and Morty API</h1>
            <div className={'home-page--logo'}>
                <Image src={logo} alt={'Logo'} width={300} height={400}
                       sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,33vw"/>
            </div>
        </div>
    );
};

export default Index;
import React from 'react';
import catLoader from './cat-loader.jpg';  

const Loader = (): JSX.Element => {
    return (
        <img src={catLoader.src} alt="catLoader"/>
    );
};

export default Loader;
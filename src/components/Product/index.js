import React, { useState } from 'react';
import { data } from '../Data';
import ProductCard from '../ProductCard';

const Product = () => {

    return (
        <div id='menu'>
            <div className="container">
                <div className="menu flex item-center justify-center flex-wrap gap-10 my-7">
                   {
                    data.sort((a , b ) =>  b.price - a.price).map((el) => <ProductCard el={el}/>)}
                </div>
                
            </div>
        </div>
    );
};

export default Product;
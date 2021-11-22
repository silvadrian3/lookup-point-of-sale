import React from 'react'
// import { Grid } from "tabler-react";
import Product from './Product';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AppEndpoints } from '../../constants/AppEnpoints';

const ProductList = (props) => {
    console.group('ProductList');
    const pCategory = props.category;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
     }, [])

    const getProducts = async() => {
        const uri = `http://localhost/lookup/lookup-api/public/api/v1/${AppEndpoints.PRODUCTS}/3`;
        const res = await axios.get(uri);
        const result = res.data;
    
        if(result.result)
            setProducts(result.data);
    }
   

    // const products = [{
    //     id: 1,
    //     name: 'Product 1',
    //     selling_price: 100.0,
    //     logo: productlogo,
    //     category_id: 1
    // },
    // {
    //     id: 2,
    //     name: 'Product 2',
    //     selling_price: 300.01,
    //     logo: productlogo,
    //     category_id: 2
    // }, {
    //     id: 3,
    //     name: 'Product 1',
    //     selling_price: 1100.0,
    //     logo: productlogo,
    //     category_id: 1
    // },
    // {
    //     id: 4,
    //     name: 'Product 2',
    //     selling_price: 22030.22,
    //     logo: productlogo,
    //     category_id: 1 
    // }, {
    //     id: 5,
    //     name: 'Product 1',
    //     selling_price: 120020.0,
    //     logo: productlogo,
    //     category_id: 1
    // },
    // {
    //     id: 6,
    //     name: 'Product 2',
    //     selling_price: 1101930.5,
    //     logo: productlogo,
    //     category_id: 2
    // }];

    return (
        <>
        {/* // <Grid.Row cards deck>
        //     {
        //         products.filter(byCategory => 
        //             byCategory.category_id === pCategory || 
        //             pCategory === 0)
        //         .map(
        //             (p, index) => <Product key={index} index={index} product={p} />
        //         )
        //     }
        // </Grid.Row> */}
        </>

    )
}

export default ProductList

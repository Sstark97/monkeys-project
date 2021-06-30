import React, {useEffect, useRef, useState } from 'react';
import { getProducts, setProducts, setIntoShopCard} from '../actions';
import { connect } from 'react-redux';
import ProductChild from '../components/ProductChild';
import { Flex } from "@chakra-ui/react";
import useAxios from '../hooks/useAxios';
import axios from 'axios';
import ShopCard from '../components/ShopCard';

const Products = (props) => {

    const btnRef = useRef();
    const [drawShow,setDrawShow] = useState(false);

    useEffect(() => {

        getData();
        props.setIntoShopCard({});

    }, []);

    const { categoryId } = props.match.params;
    let data;

    const getData = async () => {
        const resp = await axios.get(`https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/products/search?categoryId=${categoryId}`);
        data = resp.data.results;
        props.setProducts(data);
    }

    const handleOpenDraw = () => {

        setDrawShow(true);

    }
    
    const handleCloseDraw = () => {

        setDrawShow(false);

    }


    if(props.products !== undefined){

        return (
            <Flex direction="row" height="100%" wrap="wrap" width="100%">

                {props.products.map(child => {

                    return (<Flex key={child.modelId} width="20%"> 
                                <ProductChild product = {child} btnRef={btnRef} handleOpenDraw={handleOpenDraw} /> 
                           </Flex>);
                })};

                <ShopCard btnRef={btnRef} drawShow={drawShow} handleCloseDraw={handleCloseDraw}/>
            
            </Flex>
        );

    } else {
        return <></>;
    }
}

const mapStateToProps = state => {

    return {

        products: state.products,
        shopCard: state.shopCard

    };

};

const mapDispatchToProps = {
    
    setProducts,
    getProducts,
    setIntoShopCard
    
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);
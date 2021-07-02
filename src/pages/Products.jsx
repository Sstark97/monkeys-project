import React, {useEffect, useRef, useState } from 'react';
import { getProducts, setProducts, setIntoShopCard} from '../actions';
import { connect } from 'react-redux';
import ProductChild from '../components/ProductChild';
import { Flex } from "@chakra-ui/react";
import axios from 'axios';
import ShopCard from '../components/ShopCard';

const Products = (props) => {

    const btnRef = useRef();
    const [drawShow,setDrawShow] = useState(false);

    useEffect( () => {

        getData();
        if(props.shopCard === undefined){
            
            props.setIntoShopCard({});

        }

    }, []);

    const getData = async () => {

        const { categoryId } = props.match.params;
        const resp = await axios.get(`https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/products/search?categoryId=${categoryId}`);
        props.setProducts(resp.data.results);

    }

    const handleOpenDraw = () => {

        setDrawShow(true);

    }
    
    const handleCloseDraw = () => {

        setDrawShow(false);

    }


    if(props.products !== undefined){

        return (
            <Flex direction="row" height="80%" wrap="wrap" width="100%">

                {props.products.map(child => {

                    return (<Flex key={child.modelId} width="20%" maxHeight="fit-content"> 
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
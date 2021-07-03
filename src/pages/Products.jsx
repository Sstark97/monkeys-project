import React, {useEffect, useRef, useState } from 'react';
import { getProducts, setProducts, setIntoShopCard} from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import { Flex, Spinner } from "@chakra-ui/react";
import ProductChild from '../components/ProductChild';
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

    async function getData (){

        const { categoryId } = props.match.params;
        const resp = await axios.get(`https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/products/search?categoryId=${categoryId}`);
        props.setProducts(resp.data.results);


    }

    const handleOpenDraw = () => {

        setDrawShow(true);

    };
    
    const handleCloseDraw = () => {

        setDrawShow(false);

    };


    if(props.products !== undefined){

        return (
            <Flex direction="row" height="80%" wrap="wrap" width="100%">

                {props.products.map(child => {

                    return (

                        <Flex key={child.modelId} width="20%" maxHeight="fit-content">

                            <ProductChild product= {child} btnRef={btnRef} handleOpenDraw={handleOpenDraw} /> 

                        </Flex>
                    );

                })}
            
                <ShopCard btnRef={btnRef} drawShow={drawShow} handleCloseDraw={handleCloseDraw} />

            </Flex>
        );

    } 
    
    return(
        <Flex direction="row" height="80%" wrap="wrap" width="100%" justifyContent="center" alignItems="center">

            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />

        </Flex>  
    );
    
}

const mapStateToProps = (state) => {

    return {

        products: state.products,
        shopCard: state.shopCard,

    };

};

const mapDispatchToProps = {
    
    setProducts,
    getProducts,
    setIntoShopCard,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

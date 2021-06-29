import React, {useEffect} from 'react';
import { getProducts, setProducts} from '../actions';
import { connect } from 'react-redux';
import ProductChild from '../components/ProductChild';
import { Flex } from "@chakra-ui/react";
import useAxios from '../hooks/useAxios';
import axios from 'axios';

const Products = (props) => {
    const { categoryId } = props.match.params;
    let data;

    const getData = async () => {
        const resp = await axios.get(`https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/products/search?categoryId=${categoryId}`);
        data = resp.data.results;
        props.setProducts(data);
    }

    useEffect(() => {
        getData();
        props.getProducts();

    }, []);

    if(props.products !== undefined){

        return (
            <Flex direction="row" height="100%" wrap="wrap" width="100%">
                {props.products.map(child => {
                    return <Flex key={child.modelId} width="20%"> <ProductChild product = {child}/> </Flex>
                })}
            
            </Flex>
        );

    } else {
        return <></>;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = {
    setProducts,
    getProducts
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);
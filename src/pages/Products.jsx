import React, {useEffect} from 'react';
import { getCategory, setCategories} from '../actions';
import { connect } from 'react-redux';
import ProductChild from '../components/ProductChild';
import { List, ListItem, ListIcon, OrderedList, UnorderedList, Text, Wrap, WrapItem, Flex} from "@chakra-ui/react";
import useAxios from '../hooks/useAxios';
import axios from 'axios';

const Products = (props) => {
    const { categoryId } = props.match.params;
    // const hasCategory = Object.keys(props.category).length > 0;
    const id = [categoryId];
    console.log(categoryId)
    let data;
    const getData = async () => {
        const resp = await axios.get(`https://private-anon-180d22d3a2-gocco.apiary-mock.com/stores/2/products/search?categoryId=${categoryId}`);
        data = resp.data.results;
        console.log(data)
        props.setCategories(data);
    }

    getData()
    props.getCategory(categoryId);
    // useEffect(() => {
    //     getData();
    //     props.getCategory(categoryId);
    //     console.log(props)

    // }, id);

    if(props.category !== undefined){
        return (
            <>

            <Text textAlign="center" fontWeight="extrabold" fontSize="2xl" >{props.category.name}</Text>
            <Flex direction="row" height="100%" wrap="wrap" width="100%">
                {props.category.children.map(child => {
                    return <Flex key={child.categoryId} width="20%"> <ProductChild subCategory = {child}/> </Flex>
                })}
            
            </Flex>

            </>
        )
    } else {
        return <></>;
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        category: state.category
    };
};

const mapDispatchToProps = {
    getCategory,
    setCategories
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);
import React, {useEffect} from 'react';
import { Flex, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../actions';
import '../assets/styles/categories.css';

import useAxios from '../hooks/useAxios';

const CategoriesNavBar = props => {
    const data = useAxios('categories').response;
    console.log(data)
    props.setCategories(data)

    useEffect(() => {
        props.setCategories(data)
    },[])

    
    return (
        

            <Wrap display= "flex" direction="row" height="50%" spacing="10" width="100%" justifyContent="center" alignItems="center" alignContent="center">
                {
                    data.map(category => <WrapItem className="category" key={category.categoryId} marginTop="8rem">
                        <Link to={'/category/' + category.categoryId}><Text fontWeight="light" fontSize="xl">{category.name}</Text></Link>
                    </WrapItem>) 
                    
                }
            </Wrap>

    )
}

const mapDispatchToProps = {
    setCategories
}


export default connect(null,mapDispatchToProps)(CategoriesNavBar);

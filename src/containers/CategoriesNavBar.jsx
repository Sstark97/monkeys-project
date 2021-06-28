import React, {useEffect, useState} from 'react';
import { Flex, Text, Wrap, WrapItem, Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../actions';
import '../assets/styles/categories.css';
import SubCategories from '../components/SubCategories';

import useAxios from '../hooks/useAxios';

const CategoriesNavBar = props => {
    const data = useAxios('categories').response;
    props.setCategories(data)
    console.log(data)

    useEffect(() => {
        props.setCategories(data)
    },[])




    
    return (

        <>
            <Wrap display= "flex" direction="row" height="30%" spacing="10" width="100%" justifyContent="center" alignItems="center" >
                {
                    data.map(category =>

                        <WrapItem className="category" key={category.categoryId}  height="100%">
                            <Box>
                            <Link to={'/category/' + category.categoryId}>
                                <Text fontWeight="light" fontSize="xl">{category.name}</Text>
                            </Link>
                            {/* <SubCategories subCategories={category.children} hover/> */}
                            </Box>

                        </WrapItem>
                    ) 
                    
                }
            </Wrap>

        
        </>
        



    )
}

const mapDispatchToProps = {
    setCategories
}


export default connect(null,mapDispatchToProps)(CategoriesNavBar);

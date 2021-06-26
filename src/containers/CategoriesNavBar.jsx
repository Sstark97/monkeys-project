import React, {useEffect} from 'react';
import { Flex, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../actions';

import useAxios from '../hooks/useAxios';

const CategoriesNavBar = props => {
    const data = useAxios('categories').response;
    console.log(data)
    props.setCategories(data)

    useEffect(() => {
        props.setCategories(data)
    },[])

    
    return (
        
        <Flex flexDirection="column" height="100%" width="8%" justifyContent="flex-start" mx="6rem">
            {console.log('hola')}
            <Text fontWeight="extrabold" fontSize="2xl" my="4rem" >Categorías</Text>

            <Wrap direction="column" height="50%" spacing="10">
                {
                    data.map(category => <WrapItem key={category.categoryId} marginTop="8rem">
                        <Link to={'/category/' + category.categoryId}>{category.name}</Link>
                    </WrapItem>) 
                    
                }
            </Wrap>
        </Flex>
    )
}

const mapDispatchToProps = {
    setCategories
}


export default connect(null,mapDispatchToProps)(CategoriesNavBar);

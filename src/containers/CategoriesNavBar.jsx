import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../actions';
import '../assets/styles/categories.scss';
import useAxios from '../hooks/useAxios';
import { 
    Text, 
    Wrap, 
    WrapItem,
} from '@chakra-ui/react';

const CategoriesNavBar = props => {
    const data = useAxios('categories').response;
    props.setCategories(data)

    return (

            <Wrap display= "flex" direction="row" height="30%" spacing="10" width="100%" justifyContent="center" alignItems="center" >
                {
                    data.map(category =>

                        <WrapItem className="category" key={category.categoryId}  height="100%">

                            <Link to={'/category/' + category.categoryId}>

                                <Text fontWeight="light" fontSize="xl" >{category.name}</Text>

                            </Link>

                        </WrapItem>
                    ) 
                    
                }
            </Wrap>

    );
}

const mapDispatchToProps = {
    setCategories
}

export default connect(null,mapDispatchToProps)(CategoriesNavBar);

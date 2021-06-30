import React, {useEffect} from 'react';
import { getCategory } from '../actions';
import { connect } from 'react-redux';
import CategoryChild from '../components/CategoryChild';
import { Text, Flex } from "@chakra-ui/react"

const Categories = (props) => {
    const { categoryId } = props.match.params;
    const id = [categoryId]

    useEffect(() => {

        props.getCategory(categoryId);

    }, id);

    if(props.category !== undefined){

        return (
            <>

                <Text textAlign="center" fontWeight="extrabold" fontSize="2xl" >{props.category.name}</Text>
                <Flex direction="row" height="100%" wrap="wrap" width="100%">

                    {props.category.children.map(child => {
                        return( <Flex key={child.categoryId} width="20%"> 

                                    <CategoryChild subCategory = {child}/> 
                                    
                                </Flex>);
                    })}
                
                </Flex>

            </>
        );

    } else {
        return <></>;
    }


};

const mapStateToProps = state => {

    return {

        category: state.category

    };
};

const mapDispatchToProps = {

    getCategory,
    
};

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
import React, { useEffect } from 'react';
import ProductChild from '../components/ProductChild';
import { connect } from 'react-redux';
import { getSearchProduct } from '../actions';

const Product = props => {

    useEffect(() => {

        props.getSearchProduct();

    },[]);

    return ( <ProductChild product={props.searchProduct}/>)

}

const mapDispatchToProps = {

    getSearchProduct,
}

const mapStateToProps = state => {
    return {
        searchProduct: state.searchProduct,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
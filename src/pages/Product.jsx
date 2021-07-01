import React from 'react';
import ProductChild from '../components/ProductChild';
import { connect } from 'react-redux';
import { getSearchProduct } from '../actions';

const Product = props => {

}

const mapStateToProps = state => {
    return {
        searchProduct: state.searchProduct,
    }
}

export default connect(mapStateToProps,null)(Product);
import React, { useState, useEffect, useRef } from 'react';
import ProductChild from '../components/ProductChild';
import ShopCard from '../components/ShopCard';
import { connect } from 'react-redux';
import { getSearchProduct, setIntoShopCard } from '../actions';

const Product = props => {

    const btnRef = useRef();
    const [drawShow,setDrawShow] = useState(false);

    useEffect(() => {
        if(props.shopCard === undefined){

            props.setIntoShopCard({});

        }

        props.getSearchProduct();

    },[]);
    
    const handleOpenDraw = () => {

        setDrawShow(true);

    }
    
    const handleCloseDraw = () => {

        setDrawShow(false);

    }

    return ( 

        <>
            <ProductChild product={props.searchProduct} btnRef={btnRef} handleOpenDraw={handleOpenDraw} />
            <ShopCard btnRef={btnRef} drawShow={drawShow} handleCloseDraw={handleCloseDraw}/>
        </>
        
    )

}

const mapStateToProps = state => {

    return {

        searchProduct: state.searchProduct,

    }
}

const mapDispatchToProps = {

    getSearchProduct,
    setIntoShopCard

}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
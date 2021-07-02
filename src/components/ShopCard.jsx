import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOnlyOneToShopCard, removeOneFromShopCard } from '../actions';
import {
    Icon,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';

const ShopCard = (props) => {

    const handleCloseDrawInChild = () => {

        props.handleCloseDraw();
        props.getOnlyOneToShopCard('');

    }

    const handleAmountChange = (event, productId) => {
        

        handleGetProduct(productId);
        //props.shopProduct.amount = parseInt(event) ;

    }

    const handleGetProduct = productId => {

        props.getOnlyOneToShopCard(productId);
        
    }

    const handleRemoveFromShopCard = productId => {

        props.removeOneFromShopCard(productId);

    }

    return (
        <>
            <Drawer
            isOpen={props.drawShow}
            placement="right"
            onClose={handleCloseDrawInChild}
            finalFocusRef={props.btnRef}
            key={1}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrito de Compra</DrawerHeader>

                <DrawerBody>
                    <UnorderedList direction="column" height="100%" justifyContent="space-between">

                        {props.shopCard.lenght !== 0 
                        
                            ?
                            <>
                                {props.shopCard.map(product => {
                                    if(product !== undefined){
                                        return(
                                            <ListItem key={ product.productId }>
                                                <Text as="h2" fontWeight="bold"> {product.name}</Text>
                                                <Text>{`Color ${product.color}, talla ${product.size}`}</Text>
                                                <Text>{product.price}€</Text>
                                                <Text cursor="pointer" onClick={() => {handleRemoveFromShopCard(product.productId)}}> Eliminar del Carrito...</Text>
                                                <NumberInput defaultValue={1} min={1} max={20} onChange={(event) => {handleAmountChange(event,product.productId)}} >
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </ListItem>
                                        )
                                    }
                                })}
                                <Text display="flex" alignSelf="flex-end">Final Price: {props.shopCard[0] !== undefined
                                    ?  
                                        props.shopCard.reduce((acc,current) => acc + Number(current.price),0)

                                    : 0}€
                                </Text>
                            
                            </>
                            :
                            <></>
                        }
                        

                    </UnorderedList>

                </DrawerBody>

                <DrawerFooter display="flex" justifyContent="center">
                    <Button colorScheme="blue">Finalizar Compra</Button>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>  
        
        </>

    );
};

const mapStateToProps = state => {

    return {

      shopCard: state.shopCard,
      shopProduct: state.shopProduct

    };
  
}

const mapDispatchToProps = {
    getOnlyOneToShopCard,
    removeOneFromShopCard
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ShopCard);
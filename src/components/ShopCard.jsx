import React from 'react';
import { connect } from 'react-redux';
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

    }

    return (
        <>
            <Drawer
            isOpen={props.drawShow}
            placement="right"
            onClose={handleCloseDrawInChild}
            finalFocusRef={props.btnRef}
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
                                    return(
                                        <ListItem key={ product.productId }>
                                            <Text as="h2" fontWeight="bold"> {product.name}</Text>
                                            <Text>{product.color}</Text>
                                            <Text>{product.price}€</Text>
                                            <NumberInput defaultValue={1} min={1} max={20}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </ListItem>
                                    )
                                })}
                                <Text display="flex" alignSelf="flex-end">Final Price: {props.shopCard[0] !== undefined
                                    ?  
                                        props.shopCard[props.shopCard.length - 1].total
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

      shopCard: state.shopCard

    };
  
}
  
export default connect(mapStateToProps, null)(ShopCard);
import React, { useEffect, useState } from 'react';
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

    const [shop, setShop] = useState([])

    useEffect(() => {
        setShop(props.shopCard);
        console.log(props.shopCard);
    },shop)

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
                    <UnorderedList direction="column">

                        {props.shopCard.lenght !== 0 
                        
                            ?
                            props.shopCard.map(product => {
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
                            })
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
    }
  
  }
  
// const mapDispatchToProps = {
//     getShopCard
// };

export default connect(mapStateToProps, null)(ShopCard);
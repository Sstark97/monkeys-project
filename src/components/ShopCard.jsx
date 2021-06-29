import React, { useRef } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
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
    Flex,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

const ShopCard = ({btnRef, drawShow, handleCloseDraw}) => {

    const handleCloseDrawInChild = () => {
        handleCloseDraw();
    }

    return (
        <>
            <Drawer
            isOpen={drawShow}
            placement="right"
            onClose={handleCloseDrawInChild}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrito de Compra</DrawerHeader>

                <DrawerBody>
                    <Flex direction="column">
                        <Text as="h2" fontWeight="bold"> dwf</Text>
                        <Text>rff</Text>
                        <Text>grgr</Text>
                        <NumberInput defaultValue={1} min={1} max={20}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                    </Flex>

                </DrawerBody>

                <DrawerFooter display="flex" justifyContent="center">
                    <Button colorScheme="blue">Finalizar Compra</Button>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>  
        
        </>

    );
};

export default ShopCard;
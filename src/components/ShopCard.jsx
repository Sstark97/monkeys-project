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
    useDisclosure,
    Button,
    Flex,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

const ShopCard = ({color, name, price}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <>

            <Button ref={btnRef} onClick={onOpen}><Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}/></Button>
            <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrito de Compra</DrawerHeader>

                <DrawerBody>
                    <Flex direction="column">
                        <Text as="h2" fontWeight="bold"> {name}</Text>
                        <Text>{color}</Text>
                        <Text>{price}</Text>
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
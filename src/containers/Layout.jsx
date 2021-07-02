import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ShopHeader from './ShopHeader';
import CategoriesNavBar from './CategoriesNavBar';
import Footer from './Footer';


const Layout = ({children}) => (
    <>

        <Flex height ="20%" direction="column" justifyContent="center"> 

            <ShopHeader />
            <CategoriesNavBar />

        </Flex>
        
        <Box my="3rem" width="100%" >{children}</Box>
        <Box marginTop="96" width="100%" height="20%"><Footer /></Box>

    </>
    
);

export default Layout;
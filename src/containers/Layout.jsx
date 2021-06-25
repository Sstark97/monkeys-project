import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ShopHeader from './ShopHeader';
import CategoriesNavBar from './CategoriesNavBar';


const Layout = ({children}) => (
    <Flex flexDirection="column" height="100%">
        <ShopHeader />

        <Flex height ="100%"> 
            
            <CategoriesNavBar />
            <Box my="3rem" width="100%" height="100%">{children}</Box>
        
        </Flex>

    </Flex>
)

export default Layout;
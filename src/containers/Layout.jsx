import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ShopHeader from './ShopHeader';
import CategoriesNavBar from './CategoriesNavBar';


const Layout = ({children}) => (
    <Flex flexDirection="column" height="100%">
        <Flex height ="100%" direction="column" justifyContent="center"> 
            <ShopHeader />
            
            <CategoriesNavBar />
        
        </Flex>

            <Box my="3rem" width="100%" height="100%">{children}</Box>
    </Flex>
)

export default Layout;
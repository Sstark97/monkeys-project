import React from 'react';
import { Flex } from '@chakra-ui/react';
import ShopHeader from './ShopHeader';
import Categories from './Categories';


const Layout = ({children}) => (
    <Flex flexDirection="column" height="100%">
        <ShopHeader />

        <Flex height ="100%"> 
            
            <Categories />
            {children} 
        
        </Flex>

    </Flex>
)

export default Layout;
import React from 'react';
import { ListItem, UnorderedList } from "@chakra-ui/react"

const SubCategories = ( {subCategories} ) => {

    return (
        <UnorderedList zIndex={1000} height="20%" width="xs" padding="12">

            {subCategories.map(category => 
                <ListItem key={category.categoryId}>
                    
                    {category.name}
                
                </ListItem>)
            }
            
        </UnorderedList>
    );

};

export default SubCategories;
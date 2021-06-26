import React from 'react';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

const SubCategories = ( {hover, subCategories } ) => {
    
    if(hover) {
        return (
            <UnorderedList>
                {subCategories.map(category => <ListItem key={category.categoryId}>{category.name}</ListItem>)}
            </UnorderedList>
        )
    } else {
        <></>
    }

}

export default SubCategories;
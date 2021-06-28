import React from 'react';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Wrap,
    WrapItem,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

const CategoryChild = ({ subCategory }) => {
  console.log('-----------------------')
    console.log(subCategory)

    return (
        // <Flex p={50} w="full" alignItems="center" justifyContent="center">
        //   <Box
        //     bg={useColorModeValue('white', 'gray.800')}
        //     maxW="sm"
        //     borderWidth="1px"
        //     rounded="lg"
        //     shadow="lg"
        //     position="relative">
    
        //     <Image
        //       src={data.imageURL}
        //       alt={`Picture of Pepe`}
        //       roundedTop="lg"
        //     />
    
        //     <Box p="6">
        //       <Box d="flex" alignItems="baseline">
        //       </Box>
        //       <Flex mt="1" justifyContent="space-between" alignContent="center">
        //         <Box
        //           fontSize="lg"
        //           fontWeight="semibold"
        //           as="h4"
        //           lineHeight="tight"
        //           isTruncated
        //           width="170px">
        //           {subCategory !== undefined ? subCategory.name : 'example'}
        //         </Box>
        //       </Flex>
        //     </Box>
        //   </Box>
        // </Flex>
        
        <>
          <Wrap display= "flex" direction="row" height="30%" spacing="10" width="100%" justifyContent="center" alignItems="center" >    

                      <WrapItem className="category" key={subCategory.categoryId}  height="100%">
                          <Box>
                          <Link to={'/product/' + subCategory.categoryId}>
                              <Text fontWeight="light" fontSize="xl" >{subCategory.name}</Text>
                          </Link>
                          {/* <SubCategories subCategories={category.children} hover/> */}
                          </Box>

                      </WrapItem>
                  
                  

          </Wrap>
        </>
      );

}



export default CategoryChild;
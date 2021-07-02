export const setCategories = payload => ({
    type: 'SET_CATEGORIES',
    payload,
});

export const getCategory = payload => ({
    type: 'GET_CATEGORY',
    payload,
})

export const setProducts = payload => ({
    type: 'SET_PRODUCTS',
    payload,
});

export const getProducts = payload => ({
    type: 'GET_PRODUCTS',
    payload,
});

export const getProduct = payload => ({
    type: 'GET_PRODUCT',
    payload,
})

export const setIntoShopCard = payload => ({
    type: 'SET_INTO_SHOP_CARD',
    payload,
});

export const getShopCard = payload => ({
    type: 'GET_SHOP_CARD',
    payload,
});

export const getOnlyOneToShopCard = payload => ({
    type: 'GET_ONLY_ONE_TO_SHOP_CARD',
    payload,
});

export const removeOneFromShopCard = payload => ({
    type: 'REMOVE_ONE_FROM_SHOP_CARD',
    payload,
});

export const setSearchProduct = payload => ({
    type: 'SET_SEARCH_PRODUCT',
    payload,
});

export const getSearchProduct = payload => ({
    type: 'GET_SEARCH_PRODUCT',
    payload,
});

export const updatedOneProduct = (productId, amount) => ({
    type: 'UPDATED_ONE_PRODUCT',
    payload: {productId, amount},
});

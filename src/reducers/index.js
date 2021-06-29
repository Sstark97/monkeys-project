const reducer = (state, action) => {

    switch(action.type){
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        case 'GET_CATEGORY':
            return {
                ...state,
                category: state.categories.find(category => {console.log(category);return category.categoryId === action.payload}) || []
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: state.products || []
            }
    }

}

export default reducer;
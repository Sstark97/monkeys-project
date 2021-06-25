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
                category: state.categories.find(category => category.categoryId === action.payload) || []
            }
    }

}

export default reducer;
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        category:
          state.categories.find(
            (category) => category.categoryId === action.payload
          ) || [],
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: state.products || [],
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product:
          state.products !== undefined ?
          state.products.find((item) => item.modelId === action.payload) :
          {},
      };
    case "SET_INTO_SHOP_CARD":
      return {
        ...state,
        shopCard:
          state.shopCard !== undefined ?
          [...state.shopCard, action.payload] :
          [],
      };
    case "GET_SHOP_CARD":
      return [...state.shopCard];
    case "REMOVE_ONE_FROM_SHOP_CARD":
      return {
        ...state,
        shopCard: state.shopCard.filter(
          (product) => product.productId !== action.payload
        ),
      };
    case "UPDATED_ONE_PRODUCT":
      return {
        ...state,
        shopCard: updatedProduct(
          state.shopCard,
          action.payload.productId,
          action.payload.amount
        ),
      };
    case "GET_ONLY_ONE_TO_SHOP_CARD":
      return {
        ...state,
        shopProduct:
          state.shopCard.find((item) => item.productId === action.payload) !==
          undefined ?
          state.shopCard.find((item) => item.productId === action.payload) :
          {},
      };
    case "SET_SEARCH_PRODUCT":
      return {
        ...state,
        searchProduct: action.payload,
      };
    case "GET_SEARCH_PRODUCT":
      return {
        ...state,
      };
  }
};

function updatedProduct(shopCard, productId, amount) {
  const productToUpdate = shopCard.find(
    (product) => product.productId === productId
  );
  productToUpdate.amount = amount;

  return shopCard;
}

export default reducer;

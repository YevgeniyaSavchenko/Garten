const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_SEARCH_FILTER = "PRODUCTS_SEARCH_FILTER";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCTS_DISCOUNT_FILTER = "PRODUCTS_DISCOUNT_FILTER";
const PRODUCTS_SORT_PRICE_FILTER = "PRODUCTS_SORT_PRICE_FILTER";
const PRODUCTS_SORT_TITLE_FILTER = "PRODUCTS_SORT_TITLE_FILTER";
const PRODUCTS_SORT_FROM_TO_FILTER = "PRODUCTS_SORT_FROM_TO_FILTER";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsSearchAction = (payload) => ({
  type: PRODUCTS_SEARCH_FILTER,
  payload,
});

export const productDiscountFilterAction = (payload) => ({
  type: PRODUCTS_DISCOUNT_FILTER,
  payload,
});

export const productsResetFilter = () => ({
  type: PRODUCTS_RESET_FILTER,
});

export const productsSortPriceAction = (payload) => ({
  type: PRODUCTS_SORT_PRICE_FILTER,
  payload,
});

export const productsSortTitleAction = (payload) => ({
  type: PRODUCTS_SORT_TITLE_FILTER,
  payload,
});

const getPrice = ({ price, discountPercentage }) => {
  return price - (price * discountPercentage) / 100;
};

export const productsSortFromToFilterAction = (minPrice, maxPrice) => ({
  type: PRODUCTS_SORT_FROM_TO_FILTER,
  payload: { minPrice, maxPrice },
});

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload.map((item) => ({ ...item, show: true }));
    case PRODUCTS_SEARCH_FILTER:
      return state.map((item) => ({
        ...item,
        show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
      }));
    case PRODUCTS_RESET_FILTER:
      return state.map((item) => ({ ...item, show: true }));
    case PRODUCTS_DISCOUNT_FILTER:
      if (action.payload) {
        return state.filter((item) => item.discont_price !== null);
      } else {
        return state;
      }
    case PRODUCTS_SORT_PRICE_FILTER:
      if (action.payload === "ascend") {
        return [...state].sort((a, b) => getPrice(a) - getPrice(b));
      } else {
        return [...state].sort((a, b) => getPrice(b) - getPrice(a));
      }
    case PRODUCTS_SORT_TITLE_FILTER:
      if (action.payload === "ascend") {
        return [...state].sort((a, b) => a.title.localeCompare(b.title));
      } else {
        return [...state].sort((a, b) => b.title.localeCompare(a.title));
      }
    default:
      return state;
  }
};

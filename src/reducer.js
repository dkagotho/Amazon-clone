export const initialState = {
  basket: [
    {
      id: "3251234576",
      title:
        "Braun series 9 - 9295cc Electric Shaver with clean & charge station",
      price: 249.99,
      rating: 4,
      image:
        "https://www.amazon.ca/Braun-9295cc-Electric-Shaver-station/dp/B079JZM1GD/ref=gbps_img___5a653e0f?smid=A3DWYIK6Y9EEQB",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for adding item to basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Can not remove produc (id: ${action.id}) as its not in basket"
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;

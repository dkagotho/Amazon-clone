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

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for adding item to basket
      return { state };
    default:
      return state;
  }
};

export default reducer;

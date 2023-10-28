export const reducer = (state, action) => {
     switch (action.type) {
          case "ADD_CAMPAIGN":
               return [...state, action.payload];

          case "UPDATE_CAMPAIGN":
               return action.payload;

          default:
               return state;
     }
};

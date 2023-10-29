import { SUB_CAMPAIGNS } from "../components/types/types";

export const reducer = (
     state: SUB_CAMPAIGNS[],
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     action: { type: string; payload: any }
) => {
     switch (action.type) {
          case "ADD_CAMPAIGN":
               return [...state, action.payload];

          case "UPDATE_CAMPAIGN":
               return action.payload;

          default:
               return state;
     }
};

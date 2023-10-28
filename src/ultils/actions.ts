import { SUB_CAMPAIGNS } from "../components/types/types";

export const addCampaignAction = (index: number) => {
     return {
          type: "ADD_CAMPAIGN",
          payload: {
               id: index,
               name: `Chiến dịch con ${index}`,
               status: true,
               total: 0,
               ads: [{ id: "Quảng cáo 1", name: "Quảng cáo 1", quantity: 0 }],
          },
     };
};
export const updateCampaignAction = (newList: SUB_CAMPAIGNS[]) => {
     return {
          type: "UPDATE_CAMPAIGN",
          payload: newList,
     };
};

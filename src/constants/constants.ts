export enum TabEnums {
     INFO = "1",
     CAMPAIGN = "2",
}

export const TABS = [
     { label: "Thông tin", value: TabEnums.INFO },
     { label: "Chiến dịch con", value: TabEnums.CAMPAIGN },
];

export const SELECT_ITEM = 1;
export const initialState = [
     {
          id: 1,
          name: "Chiến dịch con 1",
          status: true,
          total: 0,
          ads: [{ id: "Quảng cáo 1", name: "Quảng cáo 1", quantity: 0 }],
     },
];

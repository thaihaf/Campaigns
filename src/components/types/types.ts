export type SUB_CAMPAIGNS = {
     id: number;
     name: string;
     status: boolean;
     total: number;
     ads: [
          {
               id: string;
               name: string;
               quantity: number;
          }
     ];
};

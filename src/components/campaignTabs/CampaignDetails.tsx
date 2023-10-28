import { Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { SUB_CAMPAIGNS } from "../types/types";
import { updateCampaignAction } from "../../ultils/actions";

interface CampaignDetailsProps {
     item: SUB_CAMPAIGNS | undefined;
     subCampaigns: SUB_CAMPAIGNS[];
     selectItem: number;
     dispatch: React.Dispatch<unknown>;
}
export default function CampaignDetails({
     item,
     subCampaigns,
     selectItem,
     dispatch,
}: CampaignDetailsProps) {
     const [name, setName] = useState(item?.name);
     const [status, setStatus] = useState(item?.status);

     useEffect(() => {
          setName(item?.name);
          setStatus(item?.status);
     }, [item]);

     return (
          <Grid container spacing={10}>
               <Grid item xs={8}>
                    <TextField
                         id="name"
                         label="Tên chiến dịch con"
                         variant="standard"
                         required
                         fullWidth
                         value={name}
                         onChange={(e) => {
                              const value = e.target.value;
                              setName(value);

                              const newList = subCampaigns.map((item) => {
                                   if (item.id === selectItem) {
                                        return {
                                             ...item,
                                             name: value,
                                        };
                                   }

                                   return item;
                              });

                              dispatch(updateCampaignAction(newList));
                         }}
                    />
               </Grid>
               <Grid item xs={4}>
                    <FormControlLabel
                         control={
                              <Checkbox
                                   onChange={(e) => {
                                        const status = e.target.checked;
                                        setStatus(status);

                                        const newList = subCampaigns.map(
                                             (item) => {
                                                  if (item.id === selectItem) {
                                                       return {
                                                            ...item,
                                                            status: status,
                                                       };
                                                  }

                                                  return item;
                                             }
                                        );

                                        dispatch(updateCampaignAction(newList));
                                   }}
                                   checked={status}
                              />
                         }
                         label="Đang hoạt động"
                    />
               </Grid>
          </Grid>
     );
}

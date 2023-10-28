import {
     Button,
     Checkbox,
     Grid,
     TextField,
     Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { SUB_CAMPAIGNS } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { updateCampaignAction } from "../../ultils/actions";

interface AdsProps {
     item: SUB_CAMPAIGNS | undefined;
     subCampaigns: SUB_CAMPAIGNS[];
     selectItem: number;
     dispatch: React.Dispatch<unknown>;
}

export default function Ads({
     item,
     subCampaigns,
     selectItem,
     dispatch,
}: AdsProps) {
     console.log(item);
     return (
          <div>
               <Typography
                    variant="h6"
                    sx={{ textTransform: "uppercase", marginTop: 5 }}
               >
                    Danh sách quảng cáo
               </Typography>

               <Grid
                    container
                    spacing={5}
                    sx={{ alignItems: "center", borderBottom: "1px" }}
               >
                    <Grid item>
                         <Checkbox />
                    </Grid>
                    <Grid item xs={4}>
                         Tên quảng cáo*
                    </Grid>
                    <Grid item xs={6}>
                         Số lượng*
                    </Grid>
                    <Grid item xs={1}>
                         <Button
                              variant="outlined"
                              startIcon={<AddIcon />}
                              onClick={() => {
                                   const newSubCampaigns = subCampaigns.map(
                                        (campaign) => {
                                             if (campaign.id === selectItem) {
                                                  const abc = {
                                                       ...campaign,
                                                       ads: [
                                                            ...campaign.ads,
                                                            {
                                                                 id: uuidv4(),
                                                                 name: `Quảng cáo ${
                                                                      campaign
                                                                           .ads
                                                                           .length +
                                                                      1
                                                                 }`,
                                                                 quantity: 0,
                                                            },
                                                       ],
                                                  };

                                                  return abc as SUB_CAMPAIGNS;
                                             }

                                             return campaign;
                                        }
                                   );

                                   dispatch(
                                        updateCampaignAction(newSubCampaigns)
                                   );
                              }}
                         >
                              Thêm
                         </Button>
                    </Grid>
               </Grid>

               {item?.ads.map((ad) => (
                    <Grid container spacing={5} sx={{ alignItems: "end" }}>
                         <Grid item>
                              <Checkbox />
                         </Grid>
                         <Grid item xs={4}>
                              <TextField
                                   id="adsName"
                                   variant="standard"
                                   required
                                   fullWidth
                                   value={ad.name}
                                   onChange={(e) => {
                                        const value = e.target.value;

                                        const newSubCampaigns =
                                             subCampaigns.map((campaign) => {
                                                  if (
                                                       campaign.id ===
                                                       selectItem
                                                  ) {
                                                       const abc = {
                                                            ...campaign,
                                                            ads: campaign.ads.map(
                                                                 (c) => {
                                                                      if (
                                                                           c.id ===
                                                                           ad.id
                                                                      ) {
                                                                           return {
                                                                                ...c,
                                                                                name: value,
                                                                           };
                                                                      }

                                                                      return c;
                                                                 }
                                                            ),
                                                       };

                                                       return abc as SUB_CAMPAIGNS;
                                                  }

                                                  return campaign;
                                             });

                                        dispatch(
                                             updateCampaignAction(
                                                  newSubCampaigns
                                             )
                                        );
                                   }}
                              />
                         </Grid>
                         <Grid item xs={6}>
                              <TextField
                                   id="name"
                                   variant="standard"
                                   required
                                   fullWidth
                                   type="number"
                                   value={ad.quantity}
                                   onChange={(e) => {
                                        const value = Number(e.target.value);

                                        const newSubCampaigns =
                                             subCampaigns.map((campaign) => {
                                                  if (
                                                       campaign.id ===
                                                       selectItem
                                                  ) {
                                                       const abc = {
                                                            ...campaign,
                                                            ads: campaign.ads.map(
                                                                 (c) => {
                                                                      if (
                                                                           c.id ===
                                                                           ad.id
                                                                      ) {
                                                                           return {
                                                                                ...c,
                                                                                quantity:
                                                                                     value,
                                                                           };
                                                                      }

                                                                      return c;
                                                                 }
                                                            ),
                                                       };

                                                       return abc as SUB_CAMPAIGNS;
                                                  }

                                                  return campaign;
                                             });

                                        dispatch(
                                             updateCampaignAction(
                                                  newSubCampaigns
                                             )
                                        );
                                   }}
                              />
                         </Grid>
                         <Grid item>
                              <Button
                                   variant="outlined"
                                   startIcon={<DeleteIcon />}
                                   onClick={() => {
                                        const newSubCampaigns =
                                             subCampaigns.map((campaign) => {
                                                  if (
                                                       campaign.id ===
                                                       selectItem
                                                  ) {
                                                       const abc = {
                                                            ...campaign,
                                                            ads: campaign.ads.filter(
                                                                 (item) =>
                                                                      item.id !==
                                                                      ad.id
                                                            ),
                                                       };
                                                       console.log(abc);

                                                       return abc as SUB_CAMPAIGNS;
                                                  }

                                                  return campaign;
                                             });

                                        dispatch(
                                             updateCampaignAction(
                                                  newSubCampaigns
                                             )
                                        );
                                   }}
                              ></Button>
                         </Grid>
                    </Grid>
               ))}
          </div>
     );
}

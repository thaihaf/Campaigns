import TabPanel from "@mui/lab/TabPanel";
import { SELECT_ITEM, TabEnums } from "../../constants/constants";

import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import Ads from "./Ads";
import { SUB_CAMPAIGNS } from "../types/types";
import { pink, green, grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { useState, useMemo } from "react";
import { addCampaignAction } from "../../ultils/actions";
import CampaignDetails from "./CampaignDetails";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface CampaignsTabsProps {
     subCampaigns: SUB_CAMPAIGNS[];
     dispatch: React.Dispatch<unknown>;
}
export default function CampaignsTabs({
     subCampaigns,
     dispatch,
}: CampaignsTabsProps) {
     const [selectItem, setSelectItem] = useState(SELECT_ITEM);

     const item = useMemo(() => {
          return subCampaigns.find((i) => i.id === selectItem);
     }, [selectItem, subCampaigns]);

     return (
          <TabPanel value={TabEnums.CAMPAIGN}>
               <Grid
                    container
                    spacing={2}
                    overflow={"auto"}
                    alignItems={"start"}
                    wrap="nowrap"
               >
                    <Grid item>
                         <IconButton
                              aria-label="delete"
                              sx={{ backgroundColor: "#ededed" }}
                              onClick={() => {
                                   dispatch(
                                        addCampaignAction(
                                             subCampaigns.length + 1
                                        )
                                   );
                                   setSelectItem(subCampaigns.length + 1);
                              }}
                         >
                              <AddIcon sx={{ color: pink[500] }} />
                         </IconButton>
                    </Grid>
                    {subCampaigns.map((subCampaign) => (
                         <Grid item marginBottom={4}>
                              <Card
                                   sx={{
                                        width: 210,
                                        borderWidth: "2px",
                                        borderStyle: "solid",
                                        borderColor:
                                             subCampaign.id === selectItem
                                                  ? "#2196f3"
                                                  : "#ffffff",
                                        cursor: "pointer",
                                   }}
                                   onClick={() => setSelectItem(subCampaign.id)}
                              >
                                   <CardContent sx={{ textAlign: "center" }}>
                                        <Typography sx={{}} variant="body1">
                                             <Typography
                                                  sx={{
                                                       display: "-webkit-box",
                                                       overflow: "hidden",
                                                       WebkitBoxOrient:
                                                            "vertical",
                                                       WebkitLineClamp: 2,
                                                       fontSize: 20,
                                                       fontWeight: "medium",
                                                       textOverflow: "ellipsis",
                                                  }}
                                             >
                                                  {subCampaign.name}
                                             </Typography>

                                             <CheckCircleIcon
                                                  sx={{
                                                       fontSize: 14,
                                                       color: subCampaign.status
                                                            ? green[500]
                                                            : grey[500],
                                                       //  marginLeft: "7px",
                                                  }}
                                             />
                                        </Typography>
                                        <Typography
                                             variant="h5"
                                             component="div"
                                             sx={{
                                                  fontSize: 24,
                                                  margin: "5px",
                                             }}
                                        >
                                             {subCampaign.ads.reduce(
                                                  (total, currentValue) => {
                                                       return (
                                                            total +
                                                            currentValue.quantity
                                                       );
                                                  },
                                                  0
                                             )}
                                        </Typography>
                                   </CardContent>
                              </Card>
                         </Grid>
                    ))}
               </Grid>

               <CampaignDetails
                    item={item}
                    subCampaigns={subCampaigns}
                    selectItem={selectItem}
                    dispatch={dispatch}
               />
               <Ads
                    item={item}
                    subCampaigns={subCampaigns}
                    selectItem={selectItem}
                    dispatch={dispatch}
               />
          </TabPanel>
     );
}

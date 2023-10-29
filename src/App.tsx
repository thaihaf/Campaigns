import { useReducer } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import * as React from "react";

import { TABS, initialState } from "./constants/constants";

import InformationsTabs from "./components/informationsTabs/InformationsTabs";
import CampaignsTabs from "./components/campaignTabs/CampaignsTabs";

import Box from "@mui/material/Box";
import { reducer } from "./ultils/reducer";

export default function App() {
     const [subCampaigns, dispatch] = useReducer(reducer, initialState);
     const [value, setValue] = React.useState("1");
     const [name, setName] = React.useState("");
     const [desc, setDesc] = React.useState("");

     const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue);
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          const data = {
               campaign: {
                    information: {
                         name,
                         desc,
                    },
                    subCampaigns: subCampaigns,
               },
          };

          alert(`Thêm thành công chiến dịch 
					${JSON.stringify(data)}
					`);
     };
     return (
          <Box sx={{ width: "100%", typography: "body1" }}>
               <form onSubmit={handleSubmit}>
                    <Button
                         variant="contained"
                         sx={{
                              marginBottom: "10px",
                              marginTop: "50px",
                              display: "flex",
                              marginLeft: "auto",
                         }}
                         type="submit"
                    >
                         SUBMIT
                    </Button>
                    <Divider />
                    <TabContext value={value}>
                         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                              <TabList
                                   onChange={handleChange}
                                   aria-label="lab API tabs example"
                              >
                                   {TABS.map((tab) => (
                                        <Tab
                                             label={tab.label}
                                             value={tab.value}
                                        />
                                   ))}
                              </TabList>
                         </Box>

                         <InformationsTabs
                              name={name}
                              desc={desc}
                              handleName={setName}
                              handleDesc={setDesc}
                         />
                         <CampaignsTabs
                              subCampaigns={subCampaigns}
                              dispatch={dispatch}
                         />
                    </TabContext>
               </form>
          </Box>
     );
}

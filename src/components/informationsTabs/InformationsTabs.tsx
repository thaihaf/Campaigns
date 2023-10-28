import TabPanel from "@mui/lab/TabPanel";
import { TabEnums } from "../../constants/constants";
import TextField from "@mui/material/TextField";

interface InformationsTabsProps {
     name: string;
     desc: string;
     handleName: React.Dispatch<React.SetStateAction<string>>;
     handleDesc: React.Dispatch<React.SetStateAction<string>>;
}
export default function InformationsTabs({
     name,
     desc,
     handleName,
     handleDesc,
}: InformationsTabsProps) {
     return (
          <TabPanel value={TabEnums.INFO}>
               <TextField
                    id="name"
                    name="name"
                    label="Tên chiến dịch"
                    variant="standard"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => handleName(e.target.value)}
               />
               <TextField
                    id="description"
                    name="description"
                    label="Mô tả"
                    variant="standard"
                    fullWidth
                    value={desc}
                    onChange={(e) => handleDesc(e.target.value)}
               />
          </TabPanel>
     );
}

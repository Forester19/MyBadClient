import React from 'react';
import {Box, styled, Tab, Tabs} from "@mui/material";
import {LinkProps, Route, Routes} from "react-router-dom";
import ModalForm from "../ModalForm";
import { Link } from 'react-router-dom'
import CommonPrefixComponent from "../commopPrefix/CommonPrefixComponent";

interface TabProps {
    label: string;
    component: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
    to: string
}

const CustomizedTab = styled((props: TabProps) => (
    <Tab {...props}/>
))`
    color: #8e8d8d
`;

const MainTabsComponent = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%'}}>
            <Tabs value={value} onChange={handleChange} centered textColor={"primary"}>
                <CustomizedTab label="Main" component={Link} to={'/'}/>
                <CustomizedTab label="Common prefix" component={Link} to={'/common-prefix'}/>
                <CustomizedTab label="Item Three" component={Link} to={'/item-three'}/>
            </Tabs>
            <Routes>
                <Route path="/" element={<ModalForm/>}/>
                <Route path="/common-prefix" element={<CommonPrefixComponent/>}/>
                <Route path="/item-three" element={<></>}/>
            </Routes>
        </Box>
    );
};

export default MainTabsComponent;
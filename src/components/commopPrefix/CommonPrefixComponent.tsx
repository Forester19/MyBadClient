import React, {useState} from 'react';
import {Box, Button, FilledTextFieldProps, styled, TextField} from "@mui/material";
import {useMutation} from "@apollo/client";
import {CREATE_COMMON_PREFIX_REQUEST} from "../../mutation/CommonPrefix";

interface TextFieldProps {
    id: string;
    label: string;
    multiline?: boolean;
    rows: number;
    defaultValue: string;
    variant: FilledTextFieldProps["variant"];
    disabled?: boolean,
    onChange?: (e: any) => void
}

const wrapperStyle = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
}

const CustomizedTextField = styled((props: TextFieldProps) => (
    <TextField {...props} />
))`
    & .MuiFilledInput-root {
        background-color: white
    }
    & .MuiFilledInput-root:hover {
        background-color: white
    }
    & .MuiFilledInput-root.Mui-focused {
        background-color: white
    }
    & .MuiFilledInput-root.Mui-disabled {
        background-color: white
    }
    & label.MuiInputLabel-root.Mui-focused {
        color: black
    }
`;

const CommonPrefixComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [newCommonPrefixObject] = useMutation(CREATE_COMMON_PREFIX_REQUEST);

    const submitHandle = () => {
        newCommonPrefixObject({
            variables: {
                input: {
                    str: inputValue
                }
            }
        }).then(({data}) => {
            console.log(data)
            setInputValue('');
        }).catch(er => console.log);
    }

    return (
        <div style={wrapperStyle}>
            <Box component="form"
                 sx={{
                     '& .MuiTextField-root': {m: 1, width: '35ch'},
                 }} noValidate autoComplete="off">
                <CustomizedTextField
                    id="filled-multiline-static"
                    label="Please enter words through a space"
                    multiline
                    rows={4}
                    defaultValue={inputValue}
                    variant="filled"
                    onChange={e => setInputValue(e.target.value)}
                />
            </Box>
            <Button variant="contained" color={"secondary"} onClick={submitHandle}>Get common prefix</Button>
            <Box component="form"
                 sx={{
                     '& .MuiTextField-root': {m: 1, width: '35ch'},
                 }} noValidate autoComplete="off">
                <CustomizedTextField
                    id="filled-multiline-static"
                    label="Common prefix"
                    rows={1}
                    disabled
                    defaultValue=""
                    variant="filled"
                />
            </Box>
        </div>
    );
};

export default CommonPrefixComponent;
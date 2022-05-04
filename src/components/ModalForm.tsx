import React, {useEffect, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {UserType} from "../types/User";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../query/User";
import {CREATE_USER} from "../mutation/User";

const style = {
    width: 400,
    backgroundColor: "lightgray",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalForm = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const {data, loading, refetch} = useQuery(GET_ALL_USERS, {pollInterval: 500});
    const [newUser] = useMutation(CREATE_USER);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);

    console.log(data);

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers);
        }
    }, [data]);

    const addUser = () => {
        newUser({
            variables: {
                input: {
                    username, age
                }
            }
        }).then(({data}) => {
            console.log(data)
            setUsername('');
            setAge(0);
        });
    }

    const getAll = () => {
        refetch();
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return <div>
        <Box sx={style}>
            <div style={{display: "flex", flexFlow: "column"}}>
                <TextField sx={{margin: '10px'}} id="outlined-basic" label="Username"
                           value={username} variant="outlined" onChange={e => setUsername(e.target.value)}/>
                <TextField sx={{margin: '10px'}} type={"number"} id="outlined-basic" label="Age" variant="outlined"
                           value={age} onChange={e => setAge(Number(e.target.value))}/>
            </div>
            <div style={{display: "flex", flexFlow: "row", alignItems: 'center', justifyContent: 'center'}}>
                <Button onClick={() => addUser()} sx={{margin: '5px'}} variant="contained">Save</Button>
                <Button onClick={() => getAll()} sx={{margin: '5px'}} variant="contained">Get</Button>
            </div>
        </Box>

        <div>
            {users.map((user) => {
                return <div className={'user'}>{user.id} {user.username} {user.age}</div>
            })}
        </div>
    </div>
}

export default ModalForm;
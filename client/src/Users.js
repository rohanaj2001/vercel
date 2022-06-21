// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { useMediaQuery } from '@mui/material';
import MyUrlField from './MyUrlField';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />            
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
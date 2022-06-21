import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin'
import { PostList, PostEdit, PostCreate } from './Doctors';
import { UserList } from './Patients';
import jsonServerProvider from 'ra-data-json-server';
import Patient from '@mui/icons-material/PeopleAlt';
import Doctor from '@mui/icons-material/MedicalServices';
import { createTheme } from '@mui/material/styles';
import Dashboard from './Dashboard';
import authProvider from './authProvider';


let theme = createTheme({
  palette: { 
    customPrimary: {
      main: '#ff3402',
    },
  },
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard}  authProvider={authProvider} dataProvider={dataProvider} color={theme}>
      <p>${theme}</p>
        <Resource name="users" list={UserList} icon={Patient}/>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={Doctor} />

    </Admin>
);

export default App;
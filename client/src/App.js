import * as React from "react";
import { Admin, Resource, CustomRoutes, restProvider } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import Patient from '@mui/icons-material/PeopleAlt';
import Doctor from '@mui/icons-material/MedicalServices';
import Blog from '@mui/icons-material/RateReview';
import { createTheme } from '@mui/material/styles';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import {DoctorList, DoctorEdit, DoctorCreate} from './Doctors';
import {PatientList, PatientCreate, PatientEdit} from './Patients';
import {BlogList,BlogEdit, BlogCreate} from './Blogs';
import simpleRestProvider from 'ra-data-simple-rest'
import { browserHistory, Router, Route } from 'react-router';


let theme = createTheme({
  palette: {
    customPrimary: {
      main: '#ff3402',
    },
  },
});

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (

  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={simpleRestProvider('http://localhost:3000')} >
    <Resource name="Doctors" list={DoctorList} edit={DoctorEdit} create={DoctorCreate} icon={Doctor} />
    <Resource name="Patients" list={PatientList}  edit={PatientEdit} create={PatientCreate} icon={Patient} />
    <Resource name="Blogs"  list={BlogList} edit={BlogEdit} create={BlogCreate} icon={Blog} />

    {/* <CustomRoutes noLayout>
      <Route path="/doctors" element={<Doctors />} icon={Patient} />
    </CustomRoutes>
    <CustomRoutes noLayout>
      <Route path="/patients" element={<Patients />} icon={Patient} />
    </CustomRoutes> */}
  </Admin>

);

export default App;
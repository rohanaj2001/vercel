import * as React from "react";
import { Admin, Resource, fetchUtils, CustomRoutes, useAuthenticated, restProvider, defaultTheme } from 'react-admin'
import { Route } from 'react-router-dom';
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
import MyLoginPage from "./MyLoginPage";

const theme = createTheme({
  palette: {
    primary: {
      // light: '#95C8EA',
      main: 'rgba(11, 158, 95, 0.7);',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    secondary: {
      main: '#95C8EA',
      // contrastText: '#000',
    },
  },

  typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    RaDatagrid: {
        styleOverrides: {
          root: {
            backgroundColor: "#E4F1F9",
            "& .RaDatagrid-headerCell": {
                backgroundColor: "#95C8EA",
            },
          }
       }
    }
}
})


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};



const dataProvider = simpleRestProvider('http://103.76.248.116:3000/api/v1/admin') 
// add httpClient 👆
const App = () => (
  
  <Admin dashboard={Dashboard} loginPage={MyLoginPage}  
  theme={theme}
  dataProvider={dataProvider}
  authProvider={authProvider}
  requireAuth
   >
    {/* requireAuth */}
    {/* authProvider={authProvider}  */}
    <Resource name="doctors" list={DoctorList} edit={DoctorEdit} create={DoctorCreate} icon={Doctor} />
    <Resource name="patients" list={PatientList}  edit={PatientEdit} create={PatientCreate} icon={Patient} />
    <Resource name="blogs"  list={BlogList} edit={BlogEdit} create={BlogCreate} icon={Blog} />

  </Admin>
);

export default App;
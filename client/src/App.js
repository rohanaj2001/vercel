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
import { defaultTheme } from 'react-admin';


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

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (

  <Admin dashboard={Dashboard} authProvider={authProvider}  
  theme={theme}
  dataProvider={simpleRestProvider('http://103.76.248.116:3000/api/v1/admin')} >
    <Resource name="doctors" list={DoctorList} edit={DoctorEdit} create={DoctorCreate} icon={Doctor} />
    <Resource name="patients" list={PatientList}  edit={PatientEdit} create={PatientCreate} icon={Patient} />
    <Resource name="blogs"  list={BlogList} edit={BlogEdit} create={BlogCreate} icon={Blog} />

    {/* <CustomRoutes noLayout>
      <Route path="/doctors" element={<Doctors />} icon={Patient} />
    </CustomRoutes>
    <CustomRoutes noLayout>
      <Route path="/patients" element={<Patients />} icon={Patient} />
    </CustomRoutes> */}
  </Admin>

);

export default App;
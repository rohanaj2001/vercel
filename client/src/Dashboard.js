import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import MyChart from './LineChart'
import { Chart } from "react-charts/dist/react-charts.development";
import useAuthenticated from 'react-admin'

const Dashboard = () => {
return (
<>
    <Card>
        <CardHeader title="Welcome to the Admin Dashboard" />
        <CardContent>You can add new patients and doctors, edit existing patient's/doctor's information.</CardContent>
    </Card>
    <MyChart />
    </>
)
}
export default Dashboard ;
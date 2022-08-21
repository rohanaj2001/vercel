import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import MyChart from './LineChart'
import { Chart } from "react-charts/dist/react-charts.development";

export default () => (
<>
    <Card>
        <CardHeader title="Welcome to the admin dashboard" />
        <CardContent>You can add new patients and doctors, edit existing patient's/doctor's information.</CardContent>
    </Card>
    <MyChart />
    </>
)
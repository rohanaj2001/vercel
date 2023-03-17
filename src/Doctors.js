import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    SelectInput,
    DateTimeInput,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    RadioButtonGroupInput,
    useRecordContext,
    ReferenceInput,
    AutocompleteInput,
    TimeInput,
    DateField,
} from 'react-admin';

export const DoctorList = (props) => {
    return (
        <List filters={DoctorFilters} {...props}>
            <Datagrid>
                {/* <TextField source="_id" /> */}
                <TextField label="MR Number" source="MR_no" />
                <TextField source="name" />
                <TextField source="designation" />
                <TextField source="phone" />
                <TextField source="email" />
                <DateField  source="free_from" showTime={true} showDate={false}/>
                <DateField  source="free_till" showTime={true} showDate={false}/>
                <EditButton basePath={"/doctors/"} />
            </Datagrid>
        </List>
    )
}

const DoctorTitle = () => {
    const record = useRecordContext();
    return <span>Doctor {record ? `"${record.title}"` : ''}</span>;
}
export const DoctorEdit = (props) => (
    <Edit  {...props}>
        <SimpleForm>
        <TextInput source="name" />
        <TextInput source="doctor_id" label="Doctor Id"/>
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="gender" choices={[
    { id: 'm', name: 'Male' },
    { id: 'f', name: 'Female' },
    { id: 'Others', name: 'Others' },
]} />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput label="Medical Registration Number" source="MR_no" placeholder="KMC658399"/>
            <TextInput source="designation" />
            <TimeInput source="free_from" />
            <TimeInput source="free_till" />
        </SimpleForm>
    </Edit>
);
export const DoctorCreate = props => (
    <Create {...props}>
         <SimpleForm>
        <TextInput source="name" />
        <TextInput source="doctor_id" label="Doctor Id" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="gender" choices={[
    { id: 'm', name: 'Male' },
    { id: 'f', name: 'Female' },
    { id: 'Others', name: 'Others' },
]} />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput label="Medical Registration Number" source="MR_no" placeholder="KMC658399"/>
            <TextInput source="designation" />
            <TimeInput  source="free_from" />
            <TimeInput  source="free_till" />
        </SimpleForm>
    </Create>
);
const DoctorFilters = [
    <TextInput source="q" label="Search Doctors" alwaysOn />,
    <ReferenceInput source="name" label="Doctor's name" reference="doctors" >
        <AutocompleteInput optionText="name" />
    </ReferenceInput>,
];
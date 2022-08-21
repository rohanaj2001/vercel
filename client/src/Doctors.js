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
} from 'react-admin';

export const DoctorList = (props) => {
    return (
        <List filters={DoctorFilters} {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField label="Medical Registration Number" source="MR No" />
                <TextField source="name" />
                <TextField source="designation" />
                <TextField source="age" />
                <TextField source="sex" />
                <TextField source="free From" />
                <EditButton basePath={"/doctors/"} />
            </Datagrid>
        </List>
    )
}

const DoctorTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}
export const DoctorEdit = (props) => (
    <Edit  {...props}>
        <SimpleForm>
        <TextInput source="name" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="sex" choices={[
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' },
    { id: 'Others', name: 'Others' },
]} />
            <TextInput source="mobile" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput label="Medical Registration Number" source="MR No" placeholder="KMC658399"/>
            <TextInput source="designation" />
            <DateTimeInput source="free From" />
            <DateTimeInput source="free Till" />
        </SimpleForm>
    </Edit>
);
export const DoctorCreate = props => (
    <Create {...props}>
         <SimpleForm>
        <TextInput source="name" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="sex" choices={[
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' },
    { id: 'Others', name: 'Others' },
]} />
            <TextInput source="mobile" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput label="Medical Registration Number" source="MR No" placeholder="KMC658399"/>
            <TextInput source="designation" />
            <DateTimeInput source="free From" />
            <DateTimeInput source="free Till" />
        </SimpleForm>
    </Create>
);
const DoctorFilters = [
    <TextInput source="q" label="Search Doctors" alwaysOn />,
    <ReferenceInput source="doctorAssigined" label="name" reference="doctors" >
        <AutocompleteInput optionText="name" />
    </ReferenceInput>,
];
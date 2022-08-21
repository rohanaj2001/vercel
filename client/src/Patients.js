import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    SelectInput,
    ReferenceInput,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    AutocompleteInput,
    TextInput,
    RadioButtonGroupInput,
    NumberInput,
    useRecordContext,
    DateTimeInput,
} from 'react-admin';

export const PatientList = (props) => {
    return (
        <List filters={PatientFilters}  {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="hospital No"/>
                <TextField source="name" />
                <TextField source="mobile No" />
                <TextField source="doctor Assigned" />
                <DateField source="previous Appointment" />
                <DateField source="next Appointment" />
                <TextField source="age"/>
                <TextField source="sex"/>
                <TextField source="address"/>
                <EditButton basePath={"/patients/"} />
            </Datagrid>
        </List>
    )
}

const PatientTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}
export const PatientEdit = (props) => (
    <Edit  {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="sex" choices={[
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' },
    { id: 'Others', name: 'Others' },
]} />
            <NumberInput source="mobile No" />
            <span id="message"></span>
            <TextInput source="address" />
            <TextInput source="hospital No" placeholder="abc00123456"/>
            <ReferenceInput  source="doctor Assigned" reference="doctors" sort={{ field: 'id', order: 'ASC' }}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput source="previous Appointment" />
            <DateTimeInput source="next Appointment" />
        </SimpleForm>
    </Edit>
);
export const PatientCreate = props => (
    <Create {...props}>
         <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="sex" choices={[
    { id: 'Male', name: 'Male' },
    { id: 'Female', name: 'Female' },
    { id: 'Others', name: 'Others' },
]} />
            <NumberInput source="mobile No" />
            <span id="message"></span>
            <TextInput source="address" />
            <TextInput source="hospital No" placeholder="abc00123456"/>
            <ReferenceInput  source="doctor Assigned" reference="doctors" sort={{ field: 'id', order: 'ASC' }}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput source="previous Appointment" />
            <DateTimeInput source="next Appointment" />
        </SimpleForm>
    </Create> 
);
const PatientFilters = [
    <TextInput source="q" label="Search Patients" alwaysOn />,
    <ReferenceInput source="doctorAssigined" label="Doctor id" reference="doctors" >
        <AutocompleteInput optionText="Name" />
    </ReferenceInput>,
];
function mobileNumberValidation()
{

    var mobile = document.getElementById('mobile');
    if(mobile.value.length!=10){
      console.log("sahi hai ");
    }}
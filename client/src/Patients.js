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
        <List  filters={PatientFilters}   {...props}>
            <Datagrid optimized>
                
            {/* <TextField source="_id"/> */}
                <TextField source="hospital_no"/>
                <TextField source="name" />
                <TextField source="phone" label="Phone Number" />
                <TextField source="email" />
                <TextField source="patient_id" label="Patient ID" />
                <TextField source="doctor_id" />
                <DateField source="previous_appointment" />
                <DateField source="next_appointment" />
                <TextField source="age"/>
                <TextField source="gender"/>
                <TextField source="address"/>
                <EditButton basePath={"/patients/"} />
            </Datagrid>
        </List>
    )
}

const PatientTitle = () => {
    const record = useRecordContext();
    return <span>Patient {record ? `"${record.title}"` : ''}</span>;
}
export const PatientEdit = (props) => (
    <Edit  {...props}>
            <SimpleForm>
            <TextInput source="name" />
            <TextInput label="Patient ID" source="patient_id" contentEditable ="false" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="gender" choices={[
             { id: 'm', name: 'Male' },
             { id: 'f', name: 'Female' },
             { id: 'Others', name: 'Others' },
            ]} />
            <NumberInput source="phone" label="Phone Number" />
            <TextInput label="Email Address" source="email" type="email" />
            <span id="message"></span>
            <TextInput source="address" />
            <TextInput source="hospital_no" placeholder="abc00123456"/>
            <ReferenceInput  source="doctor_id" reference="doctors" >
            {/* sort={{ field: 'id', order: 'ASC' }} */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput source="previous_appointment" />
            <DateTimeInput source="next_appointment" />
        </SimpleForm>
    </Edit>
);
export const PatientCreate = props => (
    <Create {...props}>
         <SimpleForm>
            <TextInput source="name" />
            <TextInput label="Patient ID" source="patient_id" />
            <NumberInput source="age" max={125} min={0} />
            <RadioButtonGroupInput source="gender" choices={[
             { id: 'm', name: 'Male' },
             { id: 'f', name: 'Female' },
             { id: 'Others', name: 'Others' },
            ]} />
            <NumberInput source="phone" label="Phone Number" />
            <TextInput label="Email Address" source="email" type="email" />
            <span id="message"></span>
            <TextInput source="address" />
            <TextInput source="hospital_no" placeholder="abc00123456"/>
            <ReferenceInput  source="doctor_id" reference="doctors" >
            {/* sort={{ field: 'id', order: 'ASC' }} */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateTimeInput source="previous_appointment" />
            <DateTimeInput source="next_appointment" />
        </SimpleForm>
    </Create> 
);
const PatientFilters = [
    <TextInput source="q" label="Search Patients" alwaysOn />,
    <ReferenceInput source="name" label="Patient's name" reference="patients" >
        <AutocompleteInput optionText="name" />
    </ReferenceInput>,
];

function mobileNumberValidation()
{

    var mobile = document.getElementById('mobile');
    if(mobile.value.length!=10){
      alert("Enter a ten digit phone number")
    }}
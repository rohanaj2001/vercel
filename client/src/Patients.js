import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    SelectInput,
    ReferenceInput,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    AutocompleteInput,
    TextInput,
    useRecordContext,
} from 'react-admin';

export const PatientList = (props) => {
    return (
        <List filters={PatientFilters}  {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="doctorAssigned" />
                <TextField source="status" />
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
            <TextField disabled source="id" />
            <TextInput source="name" />
            <TextInput source="doctorAssigned" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);
export const PatientCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput  source="doctorAssigned" reference="doctors" sort={{ field: 'id', order: 'ASC' }}>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
const PatientFilters = [
    <TextInput source="q" label="Search Patients" alwaysOn />,
    <ReferenceInput source="doctorAssigined" label="Doctor id" reference="doctors" >
        <AutocompleteInput optionText="name" />
    </ReferenceInput>,
];

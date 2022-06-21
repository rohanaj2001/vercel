import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    SelectInput,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    useRecordContext,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';

export const DoctorList = (props) => {
    return (
        <List filters={DoctorFilters} {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="dessignation" />
                <TextField source="status" />
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
            <TextField disabled source="id" />
            <TextInput source="name" />
            <TextInput source="dessignation" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);
export const DoctorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="dessignation" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);
const DoctorFilters = [
    <TextInput source="q" label="Search Doctors" alwaysOn />,
    <ReferenceInput source="doctorAssigined" label="name" reference="doctors" >
        <AutocompleteInput optionText="name" />
    </ReferenceInput>,
];
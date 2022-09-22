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
    useRecordContext,
    ReferenceInput,
    AutocompleteInput,
    ImageInput,
    Show,
    SimpleShowLayout,
    DateField,
    ImageField,
    required,
    RichTextField,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const BlogList = (props) => {
    return (
        <List filters={BlogFilters} {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="content" />
                <ImageField label="Related Images" source="pictures.src"  />
                <EditButton basePath={"/doctors/"} />
            </Datagrid>
        </List>
    )
}


const BlogTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}
export const BlogEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth resettable />
            <TextInput source="content" validate={[required()]} multiline fullWidth resettable />
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);
export const BlogCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth resettable />
            <TextInput source="content" validate={[required()]} multiline fullWidth resettable />
            <ImageInput source="pictures" label="Related pictures" accept="image/*" >
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
const BlogFilters = [
    <TextInput source="q" label="Search Blogs" alwaysOn />,
    <ReferenceInput source="title" label="name" reference="blogs" >
        <AutocompleteInput optionText="title" />
    </ReferenceInput>,
];
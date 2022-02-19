import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    required,
} from 'react-admin';

export const MovieCreate = props => (
    <Create {...props}>
        <SimpleForm redirect={'/movies'}>
            <TextInput source='name' label='Name' validate={[required()]}/>
            <NumberInput source='release_year' label='Release' validate={[required()]}/>
            <TextInput source='director_first_name' label='Director First name' validate={[required()]}/>
            <TextInput source='director_last_name' label='Director Last name' validate={[required()]}/>
        </SimpleForm>
    </Create>
);

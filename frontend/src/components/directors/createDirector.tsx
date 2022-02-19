import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from 'react-admin';

export const DirectorCreate = props => (
    <Create {...props}>
        <SimpleForm redirect={'/directors'}>
            <TextInput source='first_name' label='Name' validate={[required()]}/>
            <TextInput source='last_name' label='Last name' validate={[required()]}/>
        </SimpleForm>
    </Create>
);

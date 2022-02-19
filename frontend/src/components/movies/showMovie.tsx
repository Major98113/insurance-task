import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
} from 'react-admin';

export const MovieShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='name' />
            <NumberField source='release_year' />
            <TextField source='director_first_name' />
            <TextField source='director_last_name' />
        </SimpleShowLayout>
    </Show>
);

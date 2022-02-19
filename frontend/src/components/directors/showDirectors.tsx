import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from 'react-admin';

export const DirectorShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source='id' />
            <TextField source='first_name' />
            <TextField source='last_name' />
        </SimpleShowLayout>
    </Show>
);

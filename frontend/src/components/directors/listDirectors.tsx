import * as React from 'react';
import {
    TextField,
    List,
    Datagrid,
    ShowButton,
    TopToolbar,
    CreateButton,
} from 'react-admin';

export const DirectorsActions = ({ basePath }) => (
    <TopToolbar>
        <CreateButton basePath={basePath} />
    </TopToolbar>
);

export const DirectorsList = props => (
    // @ts-ignore
    <List {...props} actions={<DirectorsActions/>} perPage={200}>
         <Datagrid>
            <TextField source='id' />
            <TextField source='first_name' />
            <TextField source='last_name' />
            <ShowButton />
        </Datagrid>
    </List>
);

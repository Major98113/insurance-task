import * as React from 'react';
import {
    TextField,
    NumberField,
    List,
    Datagrid,
    ShowButton,
    TopToolbar,
    CreateButton,
} from 'react-admin';

export const MoviesActions = ({ basePath }) => (
    <TopToolbar>
        <CreateButton basePath={basePath} />
    </TopToolbar>
);

export const MoviesList = props => (
    // @ts-ignore
    <List {...props} actions={<MoviesActions/>} perPage={200}>
         <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <NumberField source='release_year' />
            <TextField source='director_first_name' />
            <TextField source='director_last_name' />
            <ShowButton />
        </Datagrid>
    </List>
);

import * as React from 'react';
import { Admin, Resource } from 'react-admin';

import { DirectorCreate } from './components/directors/createDirector';
import { DirectorShow } from './components/directors/showDirectors';
import { DirectorsList } from './components/directors/listDirectors';

import { MovieCreate } from './components/movies/createMovie';
import { MovieShow } from './components/movies/showMovie';
import { MoviesList } from './components/movies/listMovies';

import authProvider from './utils/authProvider';
import dataProvider from './utils/jsonServerProvider';

const App = () => (
    <Admin
        dataProvider={dataProvider()}
        authProvider={authProvider}
    >
        <Resource
            name='directors'
            list={DirectorsList}
            show={DirectorShow}
            create={DirectorCreate}
        />
        <Resource
            name='movies'
            list={MoviesList}
            show={MovieShow}
            create={MovieCreate}
        />
    </Admin>
);
export default App;

import { v4 as uuidv4 } from 'uuid';
import { injectable } from 'inversify';
import 'reflect-metadata';

import { DBInterface } from '../types/db.types';
import { IMovie } from '../types/movies.types';
import { serviceLogger as log } from '../utils/logger.helpers';

@injectable()
class MoviesService {
    private readonly DB: DBInterface;
    private readonly table = `movies`;

    constructor( DB: DBInterface ) {
        this.DB = DB;
    }

    @log
    public async getAllMovies( ): Promise<IMovie[]> {
        const { rows } = await this.DB.query(
            `SELECT * FROM ${ this.table }`
        );

        return rows;
    }

    @log
    public async getMovieById( id: string ): Promise<IMovie> {
        const { rows: [ movie ] } = await this.DB.query(
            `SELECT * FROM ${ this.table }
                WHERE id = $1`, [id]
        );

        return movie;
    }

    @log
    public async createMovie( movie: IMovie ) {
        const movieId: string = uuidv4();
        const { name, release_year, director_first_name, director_last_name } = movie;
        const { rows: [ createdMovie ] } = await this.DB.query(
            `INSERT INTO ${ this.table }
                ( id, name, release_year, director_first_name, director_last_name )
                    VALUES ( $1, $2, $3, $4, $5 ) RETURNING *`,
                    [ movieId, name, release_year, director_first_name, director_last_name ]
        );

        return createdMovie;
    }
}

export { MoviesService };
import { v4 as uuidv4 } from 'uuid';
import { injectable } from 'inversify';
import 'reflect-metadata';

import { DBInterface } from '../types/db.types';
import { IDirector } from '../types/movies.types';
import { serviceLogger as log } from '../utils/logger.helpers';

@injectable()
class DirectorsService {
    private readonly DB: DBInterface;
    private readonly table = `directors`;

    constructor( DB: DBInterface ) {
        this.DB = DB;
    }

    @log
    public async getAllDirectors( ): Promise<IDirector[]> {
        const { rows } = await this.DB.query(
            `SELECT * FROM ${ this.table }`
        );

        return rows;
    }

    @log
    public async getDirectorById( id: string ): Promise<IDirector> {
        const { rows: [ director ] } = await this.DB.query(
            `SELECT * FROM ${ this.table }
                WHERE id = $1`, [id]
        );

        return director;
    }

    @log
    public async createDirector( director: IDirector ) {
        const directorId: string = uuidv4();
        const { first_name, last_name } = director;
        const { rows: [ createdDirector ] } = await this.DB.query(
            `INSERT INTO ${ this.table }
                ( id, first_name, last_name )
                    VALUES ( $1, $2, $3 ) RETURNING *`,
                    [ directorId, first_name, last_name ]
        );

        return createdDirector;
    }
}

export { DirectorsService };
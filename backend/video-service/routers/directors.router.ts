import express from 'express';

import { serviceContainer } from '../config/inversify.config';

import { DB, DBInterface } from "../types/db.types";

import { DirectorsService } from "../services/directors.service";
import { routerErrorLog } from "../utils/logger.helpers";
import { IDirector } from '../types/movies.types';

const router = express.Router();

const DirectorsServiceInstance = new DirectorsService( serviceContainer.get<DBInterface>(DB) );

router.get('/', async ( req: express.Request, res: express.Response, next ) => {
    try {
        const directors = await DirectorsServiceInstance.getAllDirectors();

        if ( directors )
            return res.status(200).json({ directors });

        return next({
            statusCode: 400,
            message: 'Bad request!'
        });
    }
    catch( error ){
        next( routerErrorLog('GET /directors', req.query, error ) );
    }
});

router.get('/:id', async ( req: express.Request, res: express.Response, next ) => {
    try {
        const { id } = req.params;
        const director: IDirector = await DirectorsServiceInstance.getDirectorById(id);
        
        if( director )
            return res.status(200).json({ director });

        return next({
            statusCode: 404,
            message: 'Director not found!'
        });
    }
    catch( error ){
        next( routerErrorLog('GET /directors/:id', req.params, error ) );
    }
});

router.post('/', async ( req: express.Request, res: express.Response, next ) => {
    try{
        const director: IDirector = await DirectorsServiceInstance.createDirector( req.body );
        
        if( director )
            return res.status(200).json({ director })

        return next({
            statusCode: 400,
            message: 'Director is already exists!'
        });
    }
    catch( error ){
        next( routerErrorLog('POST /directors', req.body, error ) );
    }
});

export default router;
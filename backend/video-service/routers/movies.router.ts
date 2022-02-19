import express from 'express';

import { serviceContainer } from '../config/inversify.config';

import { DB, DBInterface } from "../types/db.types";

import { MoviesService } from "../services/movies.service";
import { routerErrorLog } from "../utils/logger.helpers";
import { IMovie } from '../types/movies.types';

const router = express.Router();

const MoviesServiceInstance = new MoviesService( serviceContainer.get<DBInterface>(DB) );

router.get('/', async ( req: express.Request, res: express.Response, next ) => {
    try {
        const movies = await MoviesServiceInstance.getAllMovies();

        if ( movies ) {
            res.setHeader('X-Total-Count', String(movies.length));
            res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
            return res.status(200).json({ data: movies, total: movies.length });
        }

        return next({
            statusCode: 400,
                message: 'Bad request!'
        });
    }
    catch( error ){
        next( routerErrorLog('GET /movies', req.query, error ) );
    }
});

router.get('/:id', async ( req: express.Request, res: express.Response, next ) => {
    try {
        const { id } = req.params;
        const movie: IMovie = await MoviesServiceInstance.getMovieById(id);
        
        if( movie )
            return res.status(200).json({ data: movie });

        return next({
            statusCode: 404,
            message: 'Movie not found!'
        });
    }
    catch( error ){
        next( routerErrorLog('GET /movies/:id', req.params, error ) );
    }
});

router.post('/', async ( req: express.Request, res: express.Response, next ) => {
    try{
        const movie: IMovie = await MoviesServiceInstance.createMovie( req.body );
        
        if( movie )
            return res.status(200).json({ data: movie })

        return next({
            statusCode: 400,
            message: 'Movie is already exists!'
        });
    }
    catch( error ){
        next( routerErrorLog('POST /movies', req.body, error ) );
    }
});

export default router;
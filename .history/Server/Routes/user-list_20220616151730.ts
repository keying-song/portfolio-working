import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayList} from '../Controllers/movie-list';

router.get('/movie-list', AuthGuard, DisplayMovieList);


export default router;
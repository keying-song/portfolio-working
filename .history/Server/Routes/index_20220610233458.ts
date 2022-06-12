import express from 'express';
const router = express.Router();
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayMovieList, DisplayProjectsPage, DisplayServicesPage} from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);
/* GET projects page. */
router.get('/projects', DisplayProjectsPage);
/* GET services page. */
router.get('/services',DisplayServicesPage);
/* GET contact page. */
router.get('/contact',DisplayContactPage);

router.get('/movielist', DisplayMovieList);

export default router;
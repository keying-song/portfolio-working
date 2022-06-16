import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList} from '../Controllers/contact-list';

router.get('/contact-list', AuthGuard, DisplayContactList);


export default router;
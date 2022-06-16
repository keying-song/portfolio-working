import express from 'express';
import { AuthGuard } from '../Util';

const router = express.Router();
import {DisplayContactList} from '../Controllers/contacts';

router.get('/user-list', AuthGuard, DisplayUserList);


export default router;
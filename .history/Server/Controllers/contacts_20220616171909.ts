import express from 'express';
import User from '../Models/user';
import { UserDisplayName } from '../Util';
export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   User.find(function(err, contacsCollection){
      if(err){
        console.error(err);
        res.end(err);
      }
      res.render('index',{title: 'Contact List', page: 'contact-list', users:contactsCollection, displayName: UserDisplayName(req)});

   });
}
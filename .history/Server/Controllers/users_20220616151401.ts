import express from 'express';
import User from '../Models/user';
import { UserDisplayName } from '../Util';
export function DisplayUserList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   .find(function(err, moviesCollection){
      if(err){
        console.error(err);
        res.end(err);
      }
      res.render('index',{title: 'Movie List', page: 'movie-list', movies:moviesCollection, displayName: UserDisplayName(req)});

   });
}
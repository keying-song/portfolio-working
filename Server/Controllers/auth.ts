import express from 'express';
import User from '../Models/user';
import passport from 'passport';

//Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: ''});
}



//process Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    passport.authenticate('local', function(err, user, info)
    {
     // are there server errors?
     if(err)
     {
         console.error(err);
         res.end(err);
     }
 
     // are there login errors?
     if(!user)
     {
         req.flash('loginMessage', 'Authentication Error!');
         return res.redirect('/login');
     }
 
     // no problems - we have a good username and password
     req.logIn(user, function(err)
     {
         // are there db errors?
         if(err)
         {
             console.error(err);
             res.end(err);
         }
 
         return res.redirect('/movie-list');
     });
    })(req, res, next);
  
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
  
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}



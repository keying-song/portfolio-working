import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page:'home' });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Abres.render('index', { title: 'About Me', page:'about' });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
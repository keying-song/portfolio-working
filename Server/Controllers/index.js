"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayWebPage = exports.DisplayDesktopPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const Util_1 = require("../Util");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'My Services', page: 'services', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayDesktopPage(req, res, next) {
    res.render('index', { title: 'Desktop App', page: 'desktopapp', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayDesktopPage = DisplayDesktopPage;
function DisplayWebPage(req, res, next) {
    res.render('index', { title: 'Web App', page: 'webapp', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayWebPage = DisplayWebPage;
//# sourceMappingURL=index.js.map
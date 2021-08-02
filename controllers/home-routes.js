const router = require('express').Router();
const { User } = require('../models/User');

router.get('/', async (req, res) => {
    res.render('home', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;
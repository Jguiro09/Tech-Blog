const router = require('express').Router();
const Blog = require('../models/Blog');
const { User } = require('../models/User');

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll().catch((err) => {
        res.json(err);
    });
    const blogs = blogData.map((dish) => dish.get({plain: true}));

    res.render('home', { blogs,
        loggedIn: req.session.loggedIn
    });
});

router.get('/dashboard', async (req, res) => {
    if(!req.session.loggedIn){
        res.redirect('/login')
        alert('You need to be logged in!');
    }
    else
    {
        const blogData = await Blog.findAll().catch((err) => {
            res.json(err);
        });
        const blogs = blogData.map((dish) => dish.get({plain: true}));
        res.render('dashboard', {
            blogs,
            loggedIn: req.session.loggedIn
        });
    }
});

router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/signup', async (req, res) => {
    res.render('signup', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;
const router = requireA('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        res.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData)
        });
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }

    else{
        res.status(404).end();
    }
})

module.exports = router;
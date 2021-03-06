const router = require('express').Router();
const {Blog} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbUserData = await Blog.create({
            title: req.body.title,
            text: req.body.content,
            user_id: req.session.user_id
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData)
        })
    }

    catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.put('/', async (req, res) => {
    try {
        console.log(req.body);
        const dbUserData = await Blog.update(
            {
                title: req.body.title,
                text: req.body.content,
            },
            {
                where: {
                    id: req.body.id
                } 
            },
        );

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData)
        })
    }

    catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.delete('/', async (req,res) => {
    Blog.destroy(
        {
            where: {
                id: req.body.id
            },
        }
    )
    .then((deletedBlog) => {
        res.json(deletedBlog);
    })
    .catch((err) => res.json(err))
})

module.exports = router;
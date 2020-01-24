const Post = require('../models/post-model')

createPost = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Nincs bejegyzés beírva',
        })
    }

    const post = new Post(body)

    if (!post) {
        return res.status(400).json({ success: false, error: err })
    }

    post
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: post._id,
                message: 'A bejegyzés hozzáadva!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'A bejegyzés NINCS HOZZÁADVA!',
            })
        })
}

updatePost = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Be kell írni szöveget amire módosuljon',
        })
    }

    Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'A bejegyzés nem található!',
            })
        }
        post.user_id = body.user_id
        post.title = body.title
        post.text = body.text
        post
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: post._id,
                    message: 'A bejegyzés módosításra került!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'A bejegyzés NEM került módosításara!',
                })
            })
    })
}

deletePost = async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res
                .status(404)
                .json({ success: false, error: `Nem található a bejegyzés` })
        }

        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

getPostById = async (req, res) => {
    await Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res
                .status(404)
                .json({ success: false, error: `Nem található a bejegyzés` })
        }
        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

getPosts = async (req, res) => {
    await Post.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Nem található a bejegyzés` })
        }
        return res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getPostById,
}
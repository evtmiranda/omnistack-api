const Post = require('../model/Post')

module.exports = {
    async store(req, res){
        const post = await Post.findById(req.params.id)

        post.likes++

        await post.save()

        req.io.emit('like', post);

        res.json({ success: true, post})
    }
}
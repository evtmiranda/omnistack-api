import Post from '../model/Post'

export const store = async (req, res) => {
    const post = await Post.findById(req.params.id)

    post.likes++

    await post.save()

    req.io.emit('like', post);

    res.json({ success: true, post })
}
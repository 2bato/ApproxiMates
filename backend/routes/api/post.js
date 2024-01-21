const express = require('express');
const router = express.Router();

// Load post model
const post = require('../../models/post');

// @route GET api/post/test
// @description tests post route
// @access Public
router.get('/test', (req, res) => res.send('Post route testing!'));

// @route GET api/post
// @description Get all post
// @access Public
router.get('/', (req, res) => {
  post.find()
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'No post found' }));
});

// @route GET api/post
// @description add/save post
// @access Public
router.post('/', (req, res) => {
  post.create(req.body)
    .then(post => res.json({ msg: 'Post added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this post' }));
});

// @route GET api/post/:id
// @description Update post
// @access Public
router.put('/:id', (req, res) => {
  post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/post/:id
// @description Delete post by id
// @access Public
router.delete('/:id', (req, res) => {
  post.findByIdAndRemove(req.params.id, req.body)
    .then(post => res.json({ mgs: 'Post entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such post' }));
});

module.exports = router;
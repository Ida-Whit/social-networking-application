//Get all thoughts
//get thought by ID
//post create new thought
    //push created thoughts id to the associated users thoughts array field
//put to update thought by its id
//delete thought by its id

//post create a reaction stored in a single thoughts reactions array field
//delete to pull and remove reaction by its id

const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController');

  router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
  .route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions/reactionId')
  .post (addReaction)
  .delete (deleteReaction);

module.exports = router
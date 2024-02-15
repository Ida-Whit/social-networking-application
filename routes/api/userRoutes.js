//Get all users
//get single user by its id and populate thought and friend data
//post new user.
//put to update user by its id
//delete user and its associated thoughts

//post to add a new friend to a users friend list
//delete to remove a friend from users friend list.

const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/userController');

  router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
  .route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/friendId')
  .post (addFriend)
  .delete (deleteFriend);

module.exports = router
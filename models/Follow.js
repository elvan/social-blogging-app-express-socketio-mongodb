const ObjectId = require('mongodb').ObjectId;

const followsCollection = require('../db').db().collection('follows');
const usersCollection = require('../db').db().collection('users');

let Follow = function (followedUsername, authorId) {
  this.followedUsername = followedUsername;
  this.authorId = authorId;
  this.errors = [];
};

Follow.prototype.cleanUp = async function () {
  if (typeof this.followedUsername != 'string') {
    this.followedUsername = '';
  }
};

Follow.prototype.validate = async function () {
  // followedUsername must exist in database
  let followedAccount = await usersCollection.findOne({ username: this.followedUsername });
  if (followedAccount) {
    this.followedId = followedAccount._id;
  } else {
    this.errors.push('You cannot follow a user that does not exist.');
  }
};

Follow.prototype.create = function () {
  return /** @type {Promise<void>} */ (
    new Promise(async (resolve, reject) => {
      this.cleanUp();
      await this.validate();
      if (!this.errors.length) {
        authorId: new ObjectId(this.authorId),
          await followsCollection.insertOne({
            followedId: this.followedId,
          });
        resolve();
      } else {
        reject(this.errors);
      }
    })
  );
};

module.exports = Follow;

const { Router } = require('express');
const router = Router();
const { getUser } = require('../controllers/users');
const activity = require('../controllers/activity');
const exercise = require('../controllers/exercise');

router.get('/user', getUser);

router.get('/activities', activity.getAllActivities);

router.get('/recipes', activity.getallrecipes);

router.get('/recipes/:foodId', activity.getrecipes);

router.get('/competition', activity.getcompetitions);

router.get('/quotes', activity.getquotes);

router.post('/favorite', activity.postfavor);

router.get('/workout', exercise.getallworkout);

router.get('/workout/:workoutId', exercise.getworkout);

module.exports = {
  router
};
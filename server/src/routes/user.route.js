import express from 'express';
import { body } from 'express-validator';

import favoriteController from '../controllers/favorite.controller.js';
import userController from '../controllers/user.controller.js';
import userModel from '../models/user.model.js';
import requestHandler from '../handlers/request.handler.js';
import tokenMiddleware from '../middlewares/token.middleware.js';
import favoriteModel from '../models/favorite.model.js';

const router = express.Router();

router.post(
  '/signup',

  body('username')
    .exists()
    .withMessage('Username is required')
    .isLength({ min: 8 })
    .withMessage('Username must be minum 8 characters')
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject('Username already used');
    }),

  body('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password minium 8 characters'),

  body('confirmPassword')
    .exists()
    .withMessage('ConfirmPassword is required')
    .isLength({ min: 8 })
    .withMessage('ConfirmPassword minium 8 characters')
    .custom((value, { req }) => {
      if (value != req.body.password)
        throw new Error('ConfirmPassword not match');
      return true;
    }),

  body('displayName')
    .exists()
    .withMessage('DisplayName is required')
    .isLength({ min: 8 })
    .withMessage('displayName minium 8 characters'),

  requestHandler.validate,
  userController.signUp
);

router.post(
  '/sigin',

  body('username')
    .exists()
    .withMessage('Username is required')
    .isLength({ min: 8 })
    .withMessage('Username must be minum 8 characters'),

  body('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password minium 8 characters'),

  requestHandler.validate,
  userController.signIn
);

router.put(
  '/update-password',

  body('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password minium 8 characters'),

  body('newPassword')
    .exists()
    .withMessage('newPassword is required')
    .isLength({ min: 8 })
    .withMessage('newPassword minium 8 characters'),

  body('confirmPassword')
    .exists()
    .withMessage('confirmPassword is required')
    .isLength({ min: 8 })
    .withMessage('confirmNewPassword minium 8 characters')
    .custom((value, { req }) => {
      if (value != req.body.newpassword)
        throw new Error('ConfirmPassword not match');
      return true;
    }),

  requestHandler.validate,
  userController.updatePassword
);

router.get('/info', tokenMiddleware.auth, userController.getInfo);

router.get(
  '/favorities',
  tokenMiddleware.auth,
  favoriteController.getFavoriteOfUser
);

router.post(
  '/favorities',

  tokenMiddleware.auth,

  body('mediaType')
    .exists()
    .withMessage('MediaType is required')
    .custom((type) => ['movie', 'tv'].includes(type))
    .withMessage('MediaType invalid'),

  body('mediaId')
    .exists()
    .withMessage('mediaId is required')
    .isLength({ min: 1 })
    .withMessage('mediaId can not be empty'),

  body('mediaTitle').exists().withMessage('mediaTitle is required'),
  body('mediaPoster').exists().withMessage('mediaPoster is required'),
  body('mediaRate').exists().withMessage('mediaRate is required'),

  requestHandler.validate,
  favoriteController.addFavorite
);

router.delete(
  '/favorities/:favoriteId',
  tokenMiddleware.auth,
  favoriteController.removeFavorite
);

export default router;

import express from 'express';
import { handleOAuthCallback, getUserData, logoutUser } from '../ctrls/google.js';

const router = express.Router();

router.get('/oauth/callback', handleOAuthCallback);
router.get('/me', getUserData);
router.post('/logout', logoutUser); // ✅ Added logout route

export default router;

import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import getMyFriends from "../controllers/user/getMyFriends.js";
import getRecommendedUsers from "../controllers/user/getRecommendedUser.js";
import sendFriendRequest from "../controllers/user/sendFriendRequest.js";
import acceptFriendRequest from "../controllers/user/acceptFriendRequest.js";
import getFriendRequest from "../controllers/user/getFriendRequest.js";
import getOutgoingFriendReqs from "../controllers/user/getOutgoingFriendReqs.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequest);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);
export default router;

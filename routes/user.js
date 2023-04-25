import express from "express";
import {
  deleteUser,
  getAllUsers,
  register,
  specialUser,
  updateUser,
  userDetailsById,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.get("/userid/special", specialUser);

// router.get("/userid/:id", userDetailsById);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

// Instead of above 3 lines we can do the following line
router
  .route("/userid/:id")
  .get(userDetailsById)
  .put(updateUser)
  .delete(deleteUser);

export default router;

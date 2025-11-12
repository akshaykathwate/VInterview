import { requireAuth } from "@clerk/express";

export const protectRoute = [
  requireAuth(),
  async (req, res, auth) => {
    try {
      const clarkId = req.auth().usedId;
      if (!clarkId)
        return res
          .status(401)
          .json({ message: "Unauthorized access : invalid token" });

      const user = await User.findOne({ clerkId });
      if (!user)
        return res.status(404).json({
          message: "User Not found",
        });

      req.user = user;

      next();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];

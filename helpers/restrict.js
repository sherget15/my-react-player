import jwt from "jsonwebtoken";
const TOKEN_KEY = process.env.TOKEN_KEY || "123456789";

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (jwt.verify(token, TOKEN_KEY)) {
      next();
    }
  } catch (e) {
    console.log(e.message);
    res.status(403).json({ error: "Unauthorized" });
  }
};

export default restrict;

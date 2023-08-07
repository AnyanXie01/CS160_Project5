// To implement authorization.
import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  // next: allows us to have the function continue.
  try {
    let token = req.header("Authorization"); // frontend will set token to be in this field/ key.
    // token: Bearer eyJhbGciO...
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // ?? what if token not valid
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

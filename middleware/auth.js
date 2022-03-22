import { UnAuthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = payload;
    req.user = { userId: payload.userId };
    next();
  } catch (err) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export default authenticateUser;

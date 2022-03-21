import { UnauthenticatedError } from "../errors/index.js";

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  
  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export default authenticateUser;

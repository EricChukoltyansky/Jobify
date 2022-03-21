const auth = async (req, res, next) => {
  console.log("auth middleware");
  next();
};

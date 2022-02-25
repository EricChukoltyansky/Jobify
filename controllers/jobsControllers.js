const createJob = async (req, res) => {
  res.send("Create job");
};
const getAllJobs = async (req, res) => {
  res.send("Get all jobs");
};
const updateJobs = async (req, res) => {
  res.send("Update jobs");
};
const deleteJob = async (req, res) => {
  res.send("Delete Jobs");
};
const showStats = async (req, res) => {
  res.send("Show stats");
};

export { createJob, deleteJob, getAllJobs, updateJobs, showStats };

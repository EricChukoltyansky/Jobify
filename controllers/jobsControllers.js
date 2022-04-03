import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";

const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({
    job,
  });
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

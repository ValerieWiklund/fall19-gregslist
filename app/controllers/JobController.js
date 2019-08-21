import JobService from "../services/JobService.js";
import Car from "../models/Car.js";

let _jobService = new JobService()

// draw the jobs to the page
// get jobs from JobService
//get the location to inject into

function _draw() {
  let template = ""
  let jobs = _jobService.Jobs

  jobs.forEach(job) => {
    template += jobs.template
  }


}













//public

export default class JobController {
  constructor() {
    console.log("Job Controller checking in");
  }

}
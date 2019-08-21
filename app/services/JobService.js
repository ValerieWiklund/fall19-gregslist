import Job from "../models/Job.js"

let _state = {
  jobs: [new Job({
    position: "Administrative Assistant",
    company: "Page One Power",
    description: "Do all the paperwork for all members of two different teams. Be organized and know Excel.",
    wage: 18,
    contact: "hrrecruiter@pageonepower.com"
  })]
}




//public



export default class JobService {
  constructor() {
    console.log("jobService checking in");

  }

  addJob(newJob) {
    _state.jobs.push(new Job(newJob))
    console.log(_state.jobs)
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job));
  }

}
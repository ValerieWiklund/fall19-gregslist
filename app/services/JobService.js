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

  get Jobs() {
    return _state.jobs.map(job => new Job(job));
  }

}
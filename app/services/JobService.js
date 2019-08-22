import Job from "../models/Job.js"

let _state = {
  jobs: [new Job({
    position: "Administrative Assistant",
    company: "Page One Power",
    description: "Do all the paperwork",
    wage: 16,
    contact: "hrrecruited@pageonepower.com"
  })]
}



export default class JobService {
  constructor() {
    console.log("JobService checking in")
  }

  deleteJob(index) {
    _state.jobs.splice(index, 1)
  }

  addJob(newJob) {
    _state.jobs.push(new Job(newJob))
  }


  get Job() {

    return _state.jobs.map(job => new Job(job))

  }

}

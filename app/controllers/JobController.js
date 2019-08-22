import JobService from "../services/JobService.js";


let _jobService = new JobService()

// draw the jobs to the page
// get jobs from JobService
//get the location to inject into

function _draw() {
  let template = ""
  let jobs = _jobService.Jobs

  jobs.forEach(job => {
    template += job.Template
  })

  document.querySelector("#jobs").innerHTML = template
}





//public

export default class JobController {
  constructor() {
    console.log("Job Controller checking in");
    _draw()
  }


  //map incoming form fields to the correct fields
  addJob(event) {

    event.preventDefault();
    let form = event.target;

    let newJob = {
      position: form.position.value,
      company: form.company.value,
      description: form.description.value,
      contact: form.contact.value,
      wage: form.wage.value
    }


    _jobService.addJob(newJob)
    _draw()
  }

}
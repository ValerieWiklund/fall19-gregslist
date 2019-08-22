import JobService from "../services/JobService.js";

//private

let _jobService = new JobService()

function _draw() {
  let template = ``
  let jobs = _jobService.Job

  jobs.forEach((job, index) => {
    template += job.getTemplate(index)
  });

  document.querySelector("#jobs").innerHTML = template
}

//public

export default class JobController {
  constructor() {
    _draw()

  }

  addJob(event) {
    event.preventDefault()
    let form = event.target

    let newJob = {
      position: form.position.value,
      company: form.company.value,
      description: form.description.value,
      wage: form.wage.value,
      contact: form.contact.value
    }
    _jobService.addJob(newJob)
    _draw()
    form.reset()
  }


  deleteJob(index) {
    _jobService.deleteJob(index)
    _draw()
  }


}
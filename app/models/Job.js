



export default class Job {
  constructor(data) {
    console.log("a Job was just created")
    this.position = data.position
    this.company = data.company
    this.description = data.description
    this.wage = data.wage
    this.contact = data.contact
  }


  getTemplate(index) {
    let template = `
  <div class="col-4 border">
        <h1>${this.position}</h1>
        <h3>${this.company}</h3>
        <h3>${this.description}</h3>
        <p>${this.wage}</p>
        <p>${this.contact}</p>
        <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${index})">Delete Job</button>
      </div>
    `
    return template
  }

}

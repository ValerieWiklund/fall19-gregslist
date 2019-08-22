

export default class Job {
  constructor(data) {
    this.position = data.position
    this.company = data.company
    this.description = data.description
    this.wage = data.wage
    this.contact = data.contact
    this.id = data.id || Math.floor(Math.random() * 40000)
  }

  get Template() {
    return `
    <div class="col-4 border">
    <h1>${this.position}</h1>
    <h3>${this.company}</h3>
    <p>${this.description}</p>
    <p>${this.contact}</p>
    <p>Wage/Salary: $ ${this.wage}</p>
    <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${this.id})"> Delete Job </button>
    </div>`
  }
}
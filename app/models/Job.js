

export default class Job {
  constructor(data) {
    this.position = data.position
    this.company = data.company
    this.description = data.description
    this.wage = data.wage
    this.contact = data.contact
  }

  get Template() {
    return `
    <div class="col-4">
    <h1>${this.position}</h1>
    <h3>${this.company}</h3>
    <p>${this.description}</p>
    <p>${this.contact}</p>
    <p>${this.wage}</p>
    </div>`
  }
}
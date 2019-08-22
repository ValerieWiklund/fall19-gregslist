import JobController from "./controllers/JobController.js"
import CarController from "./controllers/CarController.js"




class App {
  constructor() {
    this.controllers = {
      jobController: new JobController(),
      carController: new CarController()

    }
  }

}
window['app'] = new App()
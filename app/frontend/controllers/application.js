import { Application } from "@hotwired/stimulus"
//import "@hotwired/turbo-rails"
//import "./controllers"

// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }



console.log('application.js in jav/controllers!!');

// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { Application } from '@hotwired/stimulus'
import { registerControllers } from 'stimulus-vite-helpers'
const application = Application.start()
const controllers = import.meta.globEager('./**/*_controller.js')
registerControllers(application, controllers)



console.log("**************index.js !")

import { Controller } from "@hotwired/stimulus"

// Connects with data-controller="hello"
export default class extends Controller {
  

  connect() {
    console.log('hello controller connected ')
  }

  static targets = [ "name" ]
  greet() {
    console.log('hello world!!');
    const element = this.nameTarget
    const name = element.value
    console.log(`Hello, ${name}!`)
  }
}



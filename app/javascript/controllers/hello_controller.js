import { Controller } from "@hotwired/stimulus"

// Connects with data-controller="hello"
export default class extends Controller {
  static targets = [ "name", "output" ]

  connect() {
    console.log('hello controller connected ');
  }

  greet() {
    console.log('hello world!!');
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`
  }
}



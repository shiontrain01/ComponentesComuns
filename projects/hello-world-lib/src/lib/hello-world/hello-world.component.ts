import { Component } from '@angular/core';

@Component({
  selector: 'lib-hello-world',
  // Remove the templateUrl line
  template: `<p>Hello World from hello-world-lib!</p>`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {}

import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldLibComponent } from './hello-world-lib.component';


@NgModule({
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent] // Make sure you're exporting the component
})
export class HelloWorldLibModule {}

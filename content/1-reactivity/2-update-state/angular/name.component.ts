import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-name",
  template: `<h1>Hello {{ name }}</h1>`,
})
export class NameComponent {
  name = "John";

  constructor() {
    this.name = "Jane";
  }
}

@NgModule({
  declarations: [NameComponent],
  exports: [NameComponent],
})
export class NameModule {}
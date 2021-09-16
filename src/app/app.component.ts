import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nome = "";
  public deveMostrarNome = false;
  title = 'ngModel';

  public apresentarNome() {
    this.deveMostrarNome = true;
  }
}

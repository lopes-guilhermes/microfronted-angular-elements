import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input()
  inputstatus = '';

  @Input()
  outputstatus = '';

  @Input()
  nomeapp = '';

  @Output()
  nextstatus = new EventEmitter<string>();

  nextStep() {
    console.log(`${this.nomeapp} - Go to status: ${this.outputstatus}`);
    this.nextstatus.emit(this.outputstatus);
  }
}

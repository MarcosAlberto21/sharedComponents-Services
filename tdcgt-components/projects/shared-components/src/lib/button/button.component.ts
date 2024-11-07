import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() label= 'Click me';

  clickHandler(){
    console.log('Button clicked');
  }

}

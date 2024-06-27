import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';



@Component({
    selector: 'app-default-footer',
    templateUrl: './default-footer.component.html',
    styleUrls: ['./default-footer.component.scss'],
    imports:[IconDirective,RouterLink],
    standalone: true,
})
export class DefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
 
}

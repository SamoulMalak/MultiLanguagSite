import { Component } from '@angular/core';
import { SetDirection } from 'src/language/language.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  pageDirection =SetDirection();
}

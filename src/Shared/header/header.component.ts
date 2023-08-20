import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


     selectedLanguage = localStorage.getItem('Language');
  constructor( private translateService: TranslateService) 
  {
   let langInLocalstorage = localStorage.getItem('Language');

    if(langInLocalstorage==null)
    {
      localStorage.setItem('Language','en');
    }
    this.SetLanguageFromLocalStorage();
  
  }



  SetLanguageFromLocalStorage()
  {

    if(this.selectedLanguage!= null)
    {
    
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
    }
    else
    {
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
    }
 
  }
  

  ChoiceLanguage(lang : string)
  {
   

      localStorage.setItem('Language',lang);
      
      this.SetLanguageFromLocalStorage();
      location.reload();
  }
}

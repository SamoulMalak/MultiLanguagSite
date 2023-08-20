import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
    }
    }) 
  ],
  exports: [TranslateModule] 
})
export class LanguageModule { }

export function HttpLoaderFactory(http: HttpClient)
{
  return new TranslateHttpLoader(http, "./assets/lang/", ".json");
}

export function SetDirection () :string 
{
  let lang =localStorage.getItem('Language');
  if(lang =='ar')
  {
    return 'rtl';
  }
  else
  {
    return 'ltr';
  }
}

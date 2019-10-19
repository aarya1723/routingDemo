import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HtmlComponent } from './html/html.component';
import { CssPageComponent } from './css-page/css-page.component';
import { JavascriptPageComponent } from './javascript-page/javascript-page.component';
import { HtmlExampleComponent } from './html-example/html-example.component';


const routes: Routes = [{
  path:"home",
  component:HomeComponent
},
{
  path:"technologies",
  component:TechnologiesComponent,
  children:[
    {
      path:"html",
      component:HtmlComponent,
      children:[
        {
          path:"htmlExample",
          component:HtmlExampleComponent
        }
      ]
    },
    {
      path:"cssPage",
      component:CssPageComponent
    },
    {
      path:"javascriptPage",
      component:JavascriptPageComponent
    }
  ]
},
{
  path:"SignIn",
  component:SignInComponent
},
{
  path:"SignUp",
  component:SignUpComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

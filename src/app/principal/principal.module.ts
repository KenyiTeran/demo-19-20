import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    PostComponent
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class PrincipalModule { }

import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { FaqPageComponent } from '../faq-page/faq-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { FaqArticleComponent } from './components/faq-aritcle/faq-article.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    FaqPageComponent,
    FooterComponent,
    FaqArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    FaqPageComponent,
    FooterComponent,
    HttpClientModule,
    QuillModule,
    FaqArticleComponent
  ]
})
export class SharedModule {
}

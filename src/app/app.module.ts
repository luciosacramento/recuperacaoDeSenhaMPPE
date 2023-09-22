import { APP_INITIALIZER, DEFAULT_CURRENCY_CODE, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './core/globalErrorHandler';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { Utils } from './core/utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './core/httpConfig.interceptor';
import { RecuperarSenhaModule } from './modules/recuperar-senha/recuperar-senha.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ToastrModule.forRoot({
      positionClass: 'toast-position',
      closeButton: true
    }),
    RecuperarSenhaModule,
    MatPasswordStrengthModule.forRoot()
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    Utils,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from './autentication/autenticacao.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './autentication/auth.guard';
import { BlockUIModule } from 'ng-block-ui';
import { SafeHtmlPipe } from './pipe/safe-pipe';

@NgModule({
    imports: [
        ToastrModule.forRoot(),
        FormsModule
    ],
    exports: [SafeHtmlPipe],
    declarations: [SafeHtmlPipe],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AuthenticationService,
        AuthGuard
    ],
})
export class CommumModule { }

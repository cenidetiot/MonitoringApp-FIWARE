import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule} from './register/register.module';
import { AdminModule } from './admin/admin.module';
import { ForgotpasswordModule } from './forgotpassword/forgotpassword.module';

/*import { LeafletModule } from '@asymmetrik/ngx-leaflet/src/leaflet/leaflet.module';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw/src/leaflet-draw/leaflet-draw.module';
*/
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';
//import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    ForgotpasswordModule,
    AdminModule,
    //LeafletModule.forRoot(),
    //LeafletDrawModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

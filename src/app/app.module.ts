import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ShowPluginComponent } from './show-plugin/show-plugin.component'; 
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from './image-cropper/image-cropper.module';


@NgModule({
  declarations: [
    AppComponent,
    ShowPluginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule,
    NgbModule, FormsModule, ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

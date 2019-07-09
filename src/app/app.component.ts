import { Component, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from './image-cropper/interfaces/image-cropped-event.interface';
import { ImageCropperComponent } from './image-cropper/component/image-cropper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to the Plugin Module';

  redirect(plugin:string){
    window.location.href="/showplugins?plugin="+plugin;
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  showProcess=true;

  // @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
     console.log('Image loaded')
     this.showProcess=false;
  }
  cropperReady() {
    console.log('Cropper ready')
  }
  loadImageFailed () {
    console.log('Load failed');
  }

  myFunc(){
    //croppedImage is image url
    console.log(this.croppedImage);
  }



}

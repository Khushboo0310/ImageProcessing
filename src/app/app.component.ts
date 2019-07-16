import { Component, ViewChild, OnInit } from '@angular/core';
import { ImageCroppedEvent } from './image-cropper/interfaces/image-cropped-event.interface';
import { ImageCropperComponent } from './image-cropper/component/image-cropper.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'to the Plugin Module';

  plugins:any;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  showProcess=true;

  constructor(private http: HttpClient){}


  @ViewChild(ImageCropperComponent,{static:true}) imageCropper: ImageCropperComponent;

   ngOnInit(): void {
    this.http.get("http://localhost:5000/plugins/").subscribe(data=>{
      console.log(data);
      this.plugins = data;
    });
  }
  

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

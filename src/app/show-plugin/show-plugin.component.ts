import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Routes,Router } from '@angular/router';

@Component({
  selector: 'app-show-plugin',
  templateUrl: './show-plugin.component.html',
  styleUrls: ['./show-plugin.component.css']
})
export class ShowPluginComponent implements OnInit {
  plugin: string;
  UIdata: Object;
  checkbox: Array<Object> = [];
  radiobtn: Array<Object> = [];
  textbox: Array<Object> = [];
  should_open = false;
  openChildComponent(){
    console.log(this.should_open);
    this.should_open = true;
    console.log(this.should_open);
   }
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.router.navigate(['/']);
    this.route.queryParams
      .subscribe(params => {
        // location.reload();
        console.log(params);
        this.plugin = params.plugin;
        console.log(this.plugin);
        this.checkbox = [];
        this.radiobtn = [];
        this.textbox = [];

        this.http.get("http://localhost:5000/plugins/" + this.plugin)
          .subscribe(data => {
            // console.log(this.plugin,data);
            this.UIdata = data[0];
            // console.log(this.UIdata);
            for (let elem in this.UIdata) {
              console.log(elem);

              this.UIdata[elem].forEach(obj => {
                // let keys = Object.keys(obj);
                // console.log(keys);
                switch (elem) {
                  case 'checkbox': this.checkbox.push(obj); break;
                  case 'radiobutton': this.radiobtn.push(obj); break;
                  case 'textbox': this.textbox.push(obj); break;
                  default:
                }
              });
            }
          });

      });

     

  }


}

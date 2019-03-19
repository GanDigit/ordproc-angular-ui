import { Component, OnInit } from '@angular/core';
import { RestConfigService } from '../rest-config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})

export class ConfigComponent implements OnInit {
  
  endPoint_CatalogSerivce:string = 'http://localhost:8082/';
  endPoint_OrderSerivce:string = 'http://localhost:8081/';

  constructor(public rest:RestConfigService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  processConfig() {
    let key = this.route.snapshot.params['key'];
    let value = this.route.snapshot.params['value'];
    console.log("key-->" + key);
    console.log("Value-->" + value);

    if(key === "catalog") {
      console.log("Key Catalog-->" );
      this.endPoint_CatalogSerivce = value;
    } else if(key === "order") {
      console.log("Key order-->" );
      this.endPoint_OrderSerivce = value;
    }
  }

}

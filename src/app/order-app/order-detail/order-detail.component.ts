import { Component, OnInit } from '@angular/core';
import { RestOrderService } from '../rest-order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css', './../../app.component.css']
})
export class OrderDetailComponent implements OnInit {

  order:any;

  constructor(public rest:RestOrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getOrder(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.order = data;
    });
  }

}


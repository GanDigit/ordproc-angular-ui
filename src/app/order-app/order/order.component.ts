import { Component, OnInit } from '@angular/core';
import { RestOrderService } from '../rest-order.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css', './../../app.component.css']
})

export class OrderComponent implements OnInit {
  orders:any = [];

  constructor(public rest:RestOrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    this.orders = [];
    this.rest.getOrders().subscribe((data: {}) => {
      console.log(data);
      this.orders = data;
    });
  }

  add() {
    this.router.navigate(['/order-add']);
  }

  delete(id) {
    this.rest.deleteOrder(id)
      .subscribe(res => {
          this.getOrders();
        }, (err) => {
          console.log(err);
        }
      );
  }
}

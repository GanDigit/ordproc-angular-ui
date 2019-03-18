import { Component, OnInit, Input } from '@angular/core';
import { RestOrderService } from '../rest-order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css', './../../app.component.css']
})
export class OrderAddComponent implements OnInit {

  @Input() orderData:any = {  description: '', userName: ''};

  constructor(public rest:RestOrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addOrder() {
    this.rest.addOrder(this.orderData).subscribe((result) => {
      this.router.navigate(['/order-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}

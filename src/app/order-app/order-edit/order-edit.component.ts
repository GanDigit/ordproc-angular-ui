import { Component, OnInit, Input } from '@angular/core';
import { RestOrderService } from '../rest-order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css', './../../app.component.css']
})
export class OrderEditComponent implements OnInit {

  @Input() orderData:any = {  description: '', userName: '' };

  constructor(public rest:RestOrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getOrder(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.orderData = data;
    });
  }

  updateOrder() {
    this.rest.updateOrder(this.route.snapshot.params['id'], this.orderData).subscribe((result) => {
      this.router.navigate(['/order-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
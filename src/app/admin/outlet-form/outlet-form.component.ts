import { ActivatedRoute, Router } from '@angular/router';
import { OutletService } from '../../outlet.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'outlet-form',
  templateUrl: './outlet-form.component.html',
  styleUrls: ['./outlet-form.component.css']
})
export class OutletFormComponent implements OnInit {
  outlet = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outletService: OutletService) {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.outletService.get(this.id).take(1).subscribe(o => this.outlet = o);
   }

  save(outlet) {
    if (this.id) this.outletService.update(this.id, outlet);
    else this.outletService.create(outlet);

    this.router.navigate(['/admin/outlets']);
  }

  ngOnInit() {
  }

}
import { Rider } from './models/rider';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class RiderService {


  constructor(private db: AngularFireDatabase) { }

    create(rider) {
      rider.googleid ='null';
      rider.active ='false';
      return this.db.list('/riders').push(rider);
    }

    // update(riderId, rider) {
    //   return this.db.object('/riders/' + riderId).update(rider);
    // }

    update(riderId: string, rider: any) {
      return this.db.object('/riders/' + riderId).update(rider);
    }

    getAll() {
      return this.db.list('/riders');
    }

    get(riderId) {
      return this.db.object('/riders/' + riderId)
    }

    updateRider(active: string, value: any,rider) {
      return this.db.object(active, value).update(rider);
    }
    private handleError(error) {
    console.log(error);
  }
  }

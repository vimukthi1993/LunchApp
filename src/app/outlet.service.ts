import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OutletService {

  constructor(private db: AngularFireDatabase) { }

  create(outlet) {
    outlet.googleId = 'null';
    return this.db.list('/outlets').push(outlet);
  }

  update(outletId, outlet) {
    return this.db.object('/outlets/' + outletId).update(outlet);
  }

  getAll() {
    return this.db.list('/outlets');
  }
  
  get(outletId) {
    return this.db.object('/outlets/' + outletId)
  }
}

import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countUp, countDown, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent  {
 count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
 
  countUp() {
    this.store.dispatch(countUp());
  }
 
  countDown() {
    this.store.dispatch(countDown());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}

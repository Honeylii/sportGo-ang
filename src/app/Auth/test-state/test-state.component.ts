import { Component, OnInit } from '@angular/core'; 
import { Auth } from 'src/stores/auth.store';

@Component({
  selector: 'app-test-state',
  templateUrl: './test-state.component.html',
  styleUrls: ['./test-state.component.css']
})
export class TestStateComponent implements OnInit {

 
  constructor(public store: Auth) { }

  ngOnInit(): void {
  }

}

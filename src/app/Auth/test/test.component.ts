import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/stores/auth.store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private store: Auth) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core'; 
import { Roles } from 'src/app/models/auth.model';
import { Auth } from 'src/stores/auth.store';

@Component({
  selector: 'app-test-state',
  templateUrl: './test-state.component.html',
  styleUrls: ['./test-state.component.css']
})
export class TestStateComponent implements OnInit {

  public loading: boolean = false;
 message: string = '';
  constructor(public store: Auth) { }

  ngOnInit(): void {
  }
  save() {
    const newUser = this.store.signUp({
      email: 'boladebodes@hotmails.com',
      firstName: 'bold',
      lastName: 'bode',
      password: '12345678',
      sport: 'Soccer',
      userType: Roles.Player,  
    }).subscribe(res=>{
      console.log({ res});
      if(res.status === 201){
         this.message = res.data.message;
      }
    },(error) => {
      this.message = error;
      this.loading = false;
    });
  }

}

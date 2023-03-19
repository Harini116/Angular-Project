import { Component } from '@angular/core';

@Component({
  selector: 'app-userloans',
  templateUrl: './userloans.component.html',
  styleUrls: ['./userloans.component.scss']
})
export class UserloansComponent {
  title = 'crm';
  username ="";
checkuser(){
  if(this.username=="1"){
    return true;
  }
  else{
    return false;
  }
  }
  validation(){
    if(this.username!=''){
      return true;
    }
    else{
      return false;
    }
}
//PIPES
  abc="HARINI";
  def="hema";
  d=Date.now();
  j={user:"Harini",age:20,experience:20};
  cur = 125;
  percent = 10.8965467;
  user={firstname:"Harini",city:"Chennai",citycode:"CHN",pincode:603210};
  
}

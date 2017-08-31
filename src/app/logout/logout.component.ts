import { Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {

  logoutMessage: Message[] = [];
  constructor(private router: Router) { }
  ngOnInit() {
     let self = this;
    sessionStorage.removeItem('currentUser');
    this.logoutMessage.push({ severity: 'success', summary: 'Log Off Successfully !!', detail: 'Log OFF' });
    setTimeout(function () {
      self.router.navigate(['login']);
    }, 1200);
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from '@user/service/user.service';
import {BehaviorSubject} from 'rxjs';
import {User} from '@user/model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.list().pipe(
      tap((list: User[]) => this.list$.next(list)))
      .subscribe();
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'qoollo-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnInit {

  @Input()
  public user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}

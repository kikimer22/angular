import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/shared/services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent implements OnInit {

  public form: FormGroup;

  faq: { title: any, text: any }[] = [
    {title: '111', text: 'text1'},
    {title: '222', text: 'text2'},
    {title: '333', text: 'text3'}
  ];

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

}

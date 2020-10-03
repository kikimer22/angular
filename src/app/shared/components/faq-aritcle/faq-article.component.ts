import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../admin/shared/services/auth.service';

@Component({
  selector: 'app-faq-article',
  templateUrl: './faq-article.component.html',
  styleUrls: ['./faq-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqArticleComponent implements OnInit {

  @Input() article: { title: any, text: any };

  public editable: boolean;

  public form: FormGroup;

  constructor(
    public auth: AuthService,
    public cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  isAuth(): boolean {
    this.form = new FormGroup({
      title: new FormControl(this.article.title, [
        Validators.required,
      ]),
      text: new FormControl(this.article.text, [
        Validators.required,
      ])
    });
    return this.auth.isAuthenticated();
  }

  toggleEditState(): void {
    this.editable = !this.editable;
    this.cdr.detectChanges();
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.article.title = this.form.value.title;
    this.article.text = this.form.value.text;

    const faqArticle: { title: any, text: any } = {
      title: this.form.value.title,
      text: this.form.value.text
    };

  }
}

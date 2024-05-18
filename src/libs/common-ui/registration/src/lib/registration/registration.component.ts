import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  RegistrationFormProperties,
  RegistrationFormValue,
} from './model/registration.model';
import { AuthenticationService } from '@school-master/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize, of } from 'rxjs';
import { NotificationService } from '@school-master/utilities/service';
import { RouterLink } from '@angular/router';
import { ConfirmedValidator } from '@school-master/utilities/helper';
import { EMAIL_REGEX } from '@school-master/utilities/constants';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private authenticationService = inject(AuthenticationService);
  private notificationService = inject(NotificationService);
  private changeDetectorRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  registrationForm: FormGroup = new FormGroup({});

  statusLoading = false;
  signUpSuccessfully = false;

  readonly EMAIL_REGEX = EMAIL_REGEX;
  readonly RegistrationFormProperties = RegistrationFormProperties;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.registrationForm = this.formBuilder.group(
      {
        [RegistrationFormProperties.FIRST_NAME]: ['', [Validators.required]],
        [RegistrationFormProperties.LAST_NAME]: ['', [Validators.required]],
        [RegistrationFormProperties.EMAIL]: ['', [Validators.required]],
        [RegistrationFormProperties.PASSWORD]: ['', [Validators.required]],
        [RegistrationFormProperties.CONFIRM_PASSWORD]: [
          '',
          [Validators.required],
        ],
        [RegistrationFormProperties.POST_CODE]: ['', [Validators.required]],
        [RegistrationFormProperties.PHONE_NUMBER]: ['', [Validators.required]],
      },
      {
        validators: [
          ConfirmedValidator.confirmedValidator(
            RegistrationFormProperties.PASSWORD,
            RegistrationFormProperties.CONFIRM_PASSWORD
          ),
        ],
      } as unknown as AbstractControlOptions
    );
  }

  handleSignUp(registrationFormElm: HTMLElement) {
    if (this.registrationForm.invalid || this.statusLoading) return;
    const formData =
      this.registrationForm.getRawValue() as RegistrationFormValue;
    this.statusLoading = true;
    this.authenticationService.signup({
      body: {
        first_name: formData[RegistrationFormProperties.FIRST_NAME],
        last_name: formData[RegistrationFormProperties.LAST_NAME],
        email: formData[RegistrationFormProperties.EMAIL],
        password1: formData[RegistrationFormProperties.PASSWORD],
        password2: formData[RegistrationFormProperties.CONFIRM_PASSWORD],
        phone_number: formData[RegistrationFormProperties.PHONE_NUMBER],
        post_code: formData[RegistrationFormProperties.POST_CODE],
      },
    });
    of({})
      .pipe(
        finalize(() => {
          this.statusLoading = false;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.signUpSuccessfully = true;
          this.notificationService.setNotification({
            message: 'Registration successfully created',
          });
          registrationFormElm.scrollIntoView({ behavior: 'smooth' });
        },
        error: (err) => {
          this.notificationService.setNotification({
            modifier: 'danger',
            message: err.message,
          });
        },
      });
  }

  getControl<T>(controlName: RegistrationFormProperties): AbstractControl {
    return <AbstractControl<T, T>>this.registrationForm.get(controlName);
  }
}

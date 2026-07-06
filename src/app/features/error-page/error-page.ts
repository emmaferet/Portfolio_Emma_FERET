import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ErrorService } from '@shared/services/error/error-service';

@Component({
  selector: 'app-error-page',
  imports: [RouterLink, CommonModule, TranslatePipe],
  templateUrl: './error-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error-page.scss',
})
export class ErrorPage implements OnInit, OnDestroy {
  private errorService = inject(ErrorService);

  // Reactive selection of code and message using signals
  code = this.errorService.errorCode;
  message = computed(() => {
    const currentCode = this.code();
    return currentCode ? this.errorService.getErrorMessage(currentCode) : '';
  });
  ngOnInit(): void {
    // If the component is loaded directly (e.g. wildcard route), default to a 404 error
    if (this.code() === null) {
      this.errorService.setError(404);
    }
  }
  ngOnDestroy(): void {
    // Clear the error state when user leaves the page
    this.errorService.clearError();
  }
  simulateError(code: number): void {
    this.errorService.setError(code);
  }

  testCodes = this.errorService.getErrorCodes();
}

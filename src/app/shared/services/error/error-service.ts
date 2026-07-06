import { inject, Service, signal } from '@angular/core';
import { Router } from '@angular/router';

@Service()
export class ErrorService {
  private router = inject(Router);

  // Signal holding the current error code
  errorCode = signal<number | null>(null);

  // Map to associate error codes with messages
  private errorMessages: Record<number, string> = {
    400: 'ERROR_PAGE.MESSAGE.400',
    401: 'ERROR_PAGE.MESSAGE.401',
    403: 'ERROR_PAGE.MESSAGE.403',
    404: 'ERROR_PAGE.MESSAGE.404',
    429: 'ERROR_PAGE.MESSAGE.429',
    500: 'ERROR_PAGE.MESSAGE.500',
    503: 'ERROR_PAGE.MESSAGE.503',
  };

  /**
   * Get the message associated with the current error code
   */
  getErrorMessage(code: number): string {
    return this.errorMessages[code] || 'ERROR_PAGE.MESSAGE.DEFAULT';
  }

  /**
   * Set the error code and redirect to the error page
   */
  setError(code: number): void {
    this.errorCode.set(code);
    // skipLocationChange to prevent the router from updating the URL
    this.router.navigate(['/error-page'], { skipLocationChange: true });
  }

  /**
   * Clear the current error state
   */
  clearError(): void {
    this.errorCode.set(null);
  }
  getErrorCodes(): number[] {
    return Object.keys(this.errorMessages).map(Number);
  }
}

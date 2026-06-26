import { Service } from '@angular/core';

@Service()
export class StorageService {
  // Save data into localStorage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Get data from localStorage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove specific data
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

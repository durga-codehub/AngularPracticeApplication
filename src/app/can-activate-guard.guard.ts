import { CanActivateFn } from '@angular/router';
import { SharedService } from './shared.service';
import { inject } from '@angular/core';

export const canActivateGuardGuard: CanActivateFn = (route, state) => {

  const common = inject(SharedService)

  if(common.loginSuccess)return true;

  return false;

  
};

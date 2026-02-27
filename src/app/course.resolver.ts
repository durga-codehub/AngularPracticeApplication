import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SharedService } from './shared.service';

export const courseResolver: ResolveFn<boolean> = (route, state) => {
  const id= route.paramMap.get('id')
  return inject(SharedService).courseDetails.find((c:any)=>c.id === id);
};

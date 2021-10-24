import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoadingServiceService {

  isLoadingSubject= new ReplaySubject(1);

  constructor() { }

  setIsLoading(newIsLoadingValue:boolean){
    this.isLoadingSubject.next(newIsLoadingValue);
  }

  getIsLoading(){
    return this.isLoadingSubject;
  }
}

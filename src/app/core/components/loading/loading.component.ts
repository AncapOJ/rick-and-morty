import { Component, OnDestroy, OnInit } from '@angular/core';
import { IsLoadingServiceService } from 'src/app/shared/services/local/is-loading-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit , OnDestroy{

  isLoading:boolean=false;
  isLoadingSubs$:any;

  constructor(private isLoadingServiceService:IsLoadingServiceService) { }

  ngOnInit(): void {

    this.isLoadingSubs$ = this.isLoadingServiceService.getIsLoading().subscribe((isLoading:any) => {
      this.isLoading = isLoading;
    })
  }

  ngOnDestroy(){
    this.isLoadingSubs$.unsubscribe();
  }

}

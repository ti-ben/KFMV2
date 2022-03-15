import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Site} from "@site/model/business";
import {SiteService} from "@site/service/site.service";
import {ApiResponse} from "@shared/model";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SiteComponent implements OnInit {

  public list$: BehaviorSubject<Site[]> = new BehaviorSubject<Site[]>([]);
  constructor(public siteService: SiteService) { }

  ngOnInit(): void {
    this.siteService.list()
      .subscribe((response:ApiResponse)=>{
        this.list$.next(response.result? response.data : [])
      })
  }

}

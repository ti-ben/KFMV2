import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map, tap} from 'rxjs/operators';
import {isNil} from 'lodash';
import {PrestataireHelper} from '@prestataire/helper';
import {Prestataire, PrestataireCreatePayload, PrestataireDto, PrestataireUpdatePayload} from '@prestataire/model';
import {PrestataireSearch} from "@prestataire/model/payload/prestataire-search.payload";
import {SiteCreatePayload} from "@site/model";

@Injectable({
  providedIn: 'root'
})

export class PrestataireService extends ApiService {
  currentDetail$ = new BehaviorSubject<Prestataire>(PrestataireHelper.getEmpty());
  refresh$ = new Subject<any>();

  constructor(public http: HttpService) {
    super(http);
  }

  search(search:PrestataireSearch): Observable<Prestataire[]> {
    return this.post(ApiUriEnum.PRESTATAIRE_SEARCH, search)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PrestataireHelper.fromDtoArray(response.data as PrestataireDto[]) : [];
        })
      )
  }

  create(payload: PrestataireCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.PRESTATAIRE_CREATE, payload).pipe(tap((response: ApiResponse) => {
      if (response.result) {
        this.refresh$.next();
      }
    }));
  }

  list(): Observable<Prestataire[]> {
    return this.get(ApiUriEnum.PRESTATAIRE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PrestataireHelper.fromDtoArray(response.data as PrestataireDto[]) : [];
        })
      )
  }

  detail(id: string): void {
    const detail = this.currentDetail$.getValue();
    if (detail.prestataire_id === id) {
      this.currentDetail$.next(detail);
    } else {
      this.get(`${ApiUriEnum.PRESTATAIRE_DETAIL}${id}`)
        .pipe(tap((response: ApiResponse) => {
          this.currentDetail$.next((response.result && !isNil(response.data)) ? PrestataireHelper.fromDto(response.data as PrestataireDto) : PrestataireHelper.getEmpty());
        })).subscribe();
    }
  }

  update(payload: PrestataireUpdatePayload): Observable<Prestataire> {
    return this.put(ApiUriEnum.PRESTATAIRE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PrestataireHelper.fromDto(response.data as PrestataireDto) : PrestataireHelper.getEmpty();
        })
      );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.PRESTATAIRE_DELETE}${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FbCreateResponse, Faq } from '../interfaces';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(
    private http: HttpClient
  ) {
  }

  create(faq: Faq): Observable<Faq> {
    return this.http.post(`${environment.fbDbUrl}/faq.json`, faq)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...faq,
          id: response.name
        };
      }));
  }

  getAll(): Observable<Faq[]> {
    return this.http.get(`${environment.fbDbUrl}/faqs.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
          }));
      }));
  }

  getById(id: string): Observable<Faq> {
    return this.http.get<Faq>(`${environment.fbDbUrl}/faq/${id}.json`)
      .pipe(map((faq: Faq) => {
        return {
          ...faq, id,
        };
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/faqs/${id}.json`);
  }

  update(faq: Faq): Observable<Faq> {
    return this.http.patch<Faq>(`${environment.fbDbUrl}/faqs/${faq.id}.json`, faq);
  }
}

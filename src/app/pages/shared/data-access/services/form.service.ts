import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment'
import { IMaritalStatus } from '../../model/marital-status.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    private readonly API = environment.catalogAPI
    constructor(
        private httpClient: HttpClient,
    ) { }

    getMaritalStatuses(): Observable<IMaritalStatus> {
        return this.httpClient.get<IMaritalStatus>(`${this.API}/catalog.json`)
    }
}
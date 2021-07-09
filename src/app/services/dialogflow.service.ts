import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { map } from "rxjs/operators";

import { Observable, of, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { Message } from "../models/Message";

@Injectable()
export class DialogflowService {
  baseURL = "http://localhost:3000/message/chat";

  constructor(private http: HttpClient) {}

  public getResponse(message: string) {
    const data = {
      text: message,
    };

    return this.http.post<any>(`${this.baseURL}`, data);
  }
}

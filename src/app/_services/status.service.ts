import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StatusService {
  path = environment.apiUrl + "statu";
  constructor(private httpClient: HttpClient) {}

  getStatus() {
    return this.httpClient.get(this.path);
  }

  addToDos(body): Observable<any> {
    return this.httpClient.post(this.path, body);
  }

  deleteToDo(id) {
    this.httpClient.delete(this.path + "/" + id).toPromise();
  }

  updateToDo(id, body) {
    return this.httpClient.patch(this.path + "/" + id, body);
  }
}

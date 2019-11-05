import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  path = environment.apiUrl + "todo";
  constructor(private httpClient: HttpClient) {}

  getToDos() {
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IElixir, IFeedback, ISpell } from '../dto/dto';

@Injectable({
  providedIn: 'root'
})
export class WizardWorldApiService {
  private url: string = "https://wizard-world-api.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getAllElixirs(): Observable<IElixir[]>{
    return this.http.get<IElixir[]>(this.url + "Elixirs")
  }

  getOneElixirs(id: string): Observable<IElixir>{
    return this.http.get<IElixir>(this.url + "Elixirs/" + id)
  }

  getAllSpells(): Observable<ISpell[]>{
    return this.http.get<ISpell[]>(this.url + "Spells")
  }

  getOneSpell(id:string): Observable<ISpell>{
    return this.http.get<ISpell>(this.url + "Spells/" + id)
  }

  postFeedback(feedBack: IFeedback){
    return this.http.post(this.url + "Feedback", feedBack);
  }

}

import { Injectable } from '@angular/core';
import { Devise } from '../models/devise';
import devises from '../models/devises';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
  public devises : Array<Devise> = devises


  constructor() { }

  public find(id : Number): Devise{
    return this.devises.find(x => x.id == id)
  } 
}

import { Interface } from "readline";

export class ClientInterface {
 
  image: string;
 
}

export class Client extends ClientInterface {
  constructor(data) {
    super()
   
    this.image =data.image
    
  }
  getImage(){
  return this.image
}

}


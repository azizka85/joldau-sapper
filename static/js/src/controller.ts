export class Controller {
  #elem = document.body;

  constructor(params) { 
    const elem = typeof params?.elem == 'string' 
      ? document.getElementById(params.elem)
      : params?.elem;    

    if(elem) this.#elem = elem;
  } 

  get name() {
    return 'controller';     
  }

  async update(data) { }  
}

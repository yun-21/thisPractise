class WorkTwo{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }

  set a(value){
    if(typeof(value)==="number"){
      return this._a = value;
    }else{
      throw new Error("a는 숫자만 입력할 수 있습니다.")
    }
  }
}

let test = new WorkTwo("Dd",2);
console.log(test);
class Stack{
  list = [];
  constructor(list = []){
    this.list = list;
  }
  push(item){
    this.list.splice(0, 0, item);
  }
  pop(){
    return this.list.splice(0,1);
  }
  peek(){
    return this.list[0];
  }
}

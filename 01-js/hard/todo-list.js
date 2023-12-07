/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.list = [];
  }
  add(todo){
    this.list.push(todo);
  }
  remove(index){
    if(index < 0 || index > this.list.length-1) return;
    for(let i = index; i<this.list.length-1; i++){
      this.list[i] = this.list[i+1];
    }
    this.list.pop();
  }
  update(index, todo){
    if(index < 0 || index > this.list.length-1) return;
    this.list[index] = todo;
  }
  get(index){
    if(index < 0 || index > this.list.length-1) return null;
    return this.list[index];
  }
  getAll(){
    return this.list;
  }
  clear(){
    this.list = [];
  }
}

// let temp = new Todo;
// temp.add('task 1');
// console.log(temp.get(0));
// temp.get(90);

module.exports = Todo;

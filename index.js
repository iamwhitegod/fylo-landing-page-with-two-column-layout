const Search = function(id){
    this.id = id
}

Search.prototype.getID = function() {
    console.log(this.id);
}

const num = Math.random() * 2;
const newNum = num.toString()
const id = newNum.slice(2);
console.log(id)

const pizza = new Search(id);
pizza.getID();
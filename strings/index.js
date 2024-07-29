let string = 'var:value;var2:value2;'
let separators = [':', ';']

let reg = new RegExp(`(.+)${separators[1]}?`)

console.log(string.split(separators[1]))
import { ver } from './object.js'

// ver()

function unwrap(data) {
  return JSON.parse(JSON.stringify(data))
}

let myObj = {
  field1: 'field1',
  innerObj: {
    qqq: 'qqq'
  },
  toJSON() {
    return this.field1
  }
}

let myArr = [
  {
    id: 1,
    innerObj: {
      qqq: 'qqq'
    },
    toJSON() {
      return this.id
    }
  },
  {
    id: 2,
    innerObj: {
      ddd: 'ddd'
    },
    toJSON() {
      return this.id
    }
  }
]

console.log(unwrap(myArr))

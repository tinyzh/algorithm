let arr = [1,2,3]

let ar = []

ar.push([...arr])
ar.push([...arr])

arr.pop()

console.log(ar)
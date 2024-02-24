const lodash=require("lodash")
let array=[1,[2,[3,[4]]]];
let finalLodash=lodash.flattenDeep(array)
console.log(finalLodash);


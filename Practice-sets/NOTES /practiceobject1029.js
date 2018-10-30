/*  1
    @function addObjects
    @param a {Object}
    @param b {Object}
    @returns {Object}
    @description:
        - take two object literals and add them, return NEW object
        - if both objects have same key, use key of 
            second object
    @example addObjects({'a': 1}, {'b': 2})
             // returns {'a': 1, 'b': 2}
*/

/*
const addObjects = (a,b) => {
    return Object.assign({}, a, b)
}
const o1 = {'a': 1}
const o2 = {'b': 2}
console.log(addObjects(o1, o2))
// {'a': 1, 'b': 2}
//mutates and object but only that object
//how can the code be changed so the first object that gets mutated gets mutated..and test it

const addObjects1 = (a,b, mutate=false) => { //
    if (mutate) {
        return Object.assign(a,b)
    }
    return Object.assign({}, a, b)
}

const o1 = {'a': 1}
const o2 = {'b': 2}
console.log(addObjects1(o1, o2, true));
console.log(o1);
// {'a': 1, 'b': 2}
*/

/*
    TEST case
    given:
    const o1 = {'a': 1}
    const o2 = {'b': 2}

    addObjects(o1, o2) => {'a': 1, 'b': 1}
*/



/* ------------------------------------- 2
    @function appendEachObject
    @param a {Object}
    @param b {Number}
    @returns {Object}
    @description:
        - given an object and a number, append number
            to each item in object if that item is a number
        - assume objects are flat (ie, no child objects)
    @example appendEachObject({'a': 1, 'b': true}, 5)
             // returns {'a': 6, 'b': true}
*/
const appendEachObject = (a,b) => {
    for(let key in a){              //loops
        console.log('key', key, a[key])

    a[key] = a[key]+b  
    }
    return  a
}
console.log( appendEachObject( {'a': 1, 'b': true}, 5))
             // returns {'a': 6, 'b': true
/*  3
    @function mapObject
    @param a {Object}
    @param b {Function}
    @returns {Object}
    @description:
        - given an object and a callback, update each item
            in object with output from the callback
        - assume objects are flat (ie, no child objects)
    @example mapObject({'a': 1,}, (key, value) => {
        console.log(key) // a
        console.log(value) // 1
        
        return value+2;
    })
             // returns {'a': 3,}
*/


/*  4
    @function subtractObject
    @param a {Object}
    @param b {Object}
    @returns {Object}
    @description:
        - given two objects, remove all keys in second object
            FROM first object
        - assume objects are flat (ie, no child objects)
    @example subtractObject({'a': 1, 'b': true}, {'b': 3})
             // returns {'a': 6,}
             subtractObject({a: 1,}, {a: 3})
            // returns {}
*/

/*  5
    @function addNObjects
    @param a {Object}
    @param b {Object}
    ...
    @param n {Object}
    @returns {Object}
    @description:
        - given N objects, add them all
    @example addNObjects({a: 1}, {b: 2}, {c: 3})
             // returns {a: 1, b: 2, c: 3}
            addNObjects({a: 1})
             // returns {a: 1,}
            addNObjects({a: 1}, {b: 2}, {c: 3}, {d: 4)
             // returns {a: 1, b: 2, c: 3, d: 4}
*/
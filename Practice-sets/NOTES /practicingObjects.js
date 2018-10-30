/*
  const obj = {
      'name': 1,
      'age': 2,
      'title': 3,
  }
  const obj_cpy = {}
  const foobar = Object.keys(obj); // ['name', 'age', 'title']
  for (let i = 0; i < foobar.length; i++) {
      obj_cpy[foobar[i]] = obj[foobar[i]]
  }
  obj_cpy[foobar[0]] = obj[foobar[0]]
  obj_cpy[foobar[1]] = obj[foobar[1]]
  obj_cpy[foobar[2]] = obj[foobar[2]]
*/



/*
  const obj = {
      'name': 1,
      'age': 2,
      'title': 3,
  }
  const copiedObj = copyObj(obj);
  // test 1
  console.log('obj is: ', obj)
  console.log('copiedObj is: ', copiedObj);
  // test 2
  copiedObj.test = 'test';
  copiedObj.name.c.d = 2;
  console.log('obj is: ', obj)
  console.log('copiedObj is: ', copiedObj);
*/


const copyObj = (obj) => {
    const obj_cpy = {}
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        obj_cpy[keys[i]] = obj[keys[i]];
    }

    return obj_cpy;
}

// =============================================

/*
    @func cpyProps
    @param {object} obj
    @returns {object}
    @desc - for each key in object, create a NEW key with "_cpy" appended to it (same value)
    @example -
        const obj = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        cpyProps(obj);
        {
          'a': 1,
          'a_cpy': 1,
          'b': 2,
          'b_cpy': 2,
          'c': 3,
          'c_cpy': 3,
        }
*/
//start//
let objTest = {
    'a': 1,
    'b': 2,
    'c': 3,
  };
  
const cpyProps = (obj) =>{
    let cpyObj={}
    for(let key in obj){              //loops
        console.log('key', obj[key])  //looping through objects
    
    cpyObj [key] /*object*/ =obj[key] /*key value pairs 1,2,3*/         //creates the original
    cpyObj [`${key}_cpy`]=obj[key] //creates the copy
    }

return cpyObj;
} 
console.log(cpyProps(objTest))
/*
    @func addObjs
    @param {object} obj1
    @param {object} obj2
    @returns {object}
    @desc - add two objects
    @example -
        const obj1 = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        const obj2 = {
          'd': 1,
          'e': 1,
          'f': 1,
          'a': 0,
        }
        addObjs(obj1, obj2);
        {
          'a': 0,
          'b': 2,
          'c': 3,
          'd': 1,
          'e': 1,
          'f': 1,
        }
*/
const obj1 = {
    'a': 1,
    'b': 2,
    'c': 3,
  }
  const obj2 = {
    'd': 1,
    'e': 1,
    'f': 1,
    'a': 0,
  }
const addObjs=(obj1,obj2)=>{
    let cpyObj={}

    for(let key in obj1){              //loops
        cpyObj[key] = obj1[key]     //putting stuff into my object

    }

    for(let key in obj2){              //loops

        cpyObj[key] = obj2[key]     //putting stuff into my object
    }

// console.log(cpyObj)

return cpyObj;
} 
console.log(addObjs(obj1, obj2))

/*
    @func addNObjs
    @param {array} arrOfObjs
    @returns {object}
    @desc - add N objects
    @example -
        const obj1 = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        const obj2 = {
          'd': 1,
          'e': 1,
          'f': 1,
          'a': 0,
        }
        const obj3 = {
          'd': 0,
          'g': 1,
          'a': -1,
        }
        addNObjs([obj1, obj2, obj3]);
        {
          'a': -1,
          'b': 2,
          'c': 3,
          'd': 0,
          'e': 1,
          'f': 1,
          'g': 1,
        }
*/

  const obj3 = {
    'd': 0,
    'g': 1,
    'a': -1,
  }
  
const addNObjs=(arr)=>{
    let cpyObj={}
    for(let key in obj1){              //loops
        cpyObj[key] = obj1[key]     //putting stuff into my object

    }

    for(let key in obj2){              //loops

        cpyObj[key] = obj2[key]     //putting stuff into my object
    }
    for(let key in obj3){              //loops

        cpyObj[key] = obj3[key]     //putting stuff into my object
    }

return cpyObj;
} 
console.log(addNObjs(addObjs,obj3))
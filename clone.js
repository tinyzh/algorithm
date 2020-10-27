// const shallClone = (target) => {
//     if(typeof target === 'object' && target !== null){
//         const cloneTarget = Array.isArray(target) ? [] : {}
//         for(let prop in target){
//             if(target.hasOwnProperty(prop)){
//                 cloneTarget[prop] = target[prop]
//             }
//         }
//     }else{
//         return target
//     }
// }

// const deepClone = (target) => {
//     if(target === null) return null
//     if(typeof target !== 'object') return target

//     const cloneTarget = Array.isArray(target) ? [] : {}
//     for(let prop in target){
//         if(target.hasOwnProperty(prop)){
//             cloneTarget[prop] = deepClone(target[prop])
//         }
//     }

//     return cloneTarget
// }

const isObject = (target) => {
    return (typeof target === 'object' || typeof target === 'function') && target !== null
}

function deepClone(target, map = new Map()){
    if(map.get(target)){
        return target
    }

    let constructor = target.constructor
    if(/^(RegExp|Date)$/i.test(constructor.name)){
        return new constructor(target)
    }

    if(isObject(target)){
        map.set(target,true)
        let cloneTarget = Array.isArray(target) ? [] : {}
        for(let prop in target){
            if(target.hasOwnProperty(prop)){
                cloneTarget[prop] = deepClone(target[prop], map)
            }
        }
    }else{
        return target
    }
}
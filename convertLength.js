function convertLength(length, from, to){
    if(from === 'km' && to === 'miles'){
        return `${length / 1.6} ${to}`;
    }else if(from === 'miles' && to === 'km'){
        return `${length * 1.6} ${to}`;
    }else if(from === 'meter' && to === 'centimeter'){
        return `${length * 100} ${to}`;
    }else if(from === 'centimeter' && to === 'meter'){
        return `${length / 100} ${to}`;
    }else if(from === 'feet' && to === 'meter'){
        return `${length * 0.3} ${to}`;
    }else if(from === 'meter' && to === 'feet'){
        return `${length / 0.3} ${to}`;
    }else if(from === 'miles' && to === 'feet'){
        return `${length * 5280} ${to}`;
    }else if(from === 'feet' && to === 'miles'){
        return `${length / 5280} ${to}`;
    }else if(from === 'inches' && to === 'meter'){
        return `${length * 0.02} ${to}`;
    }else if(from === 'meter' && to === 'inches'){
        return `${length / 0.02} ${to}`;
    }else{
        return `Invalid conversion from ${from} to ${to}`;
    }
}

console.log(convertLength(10, 'km', 'miles'));      
console.log(convertLength(5, 'miles', 'km'));      
console.log(convertLength(2, 'meter', 'centimeter'));
console.log(convertLength(300, 'centimeter', 'meter'));
console.log(convertLength(6, 'feet', 'meter'));    
console.log(convertLength(3, 'meter', 'feet'));    
console.log(convertLength(1, 'miles', 'feet'));    
console.log(convertLength(5280, 'feet', 'miles')); 
console.log(convertLength(10, 'inches', 'meter')); 
console.log(convertLength(2, 'meter', 'inches'));  
console.log(convertLength(10, 'km', 'kg'));        





// function convertLength(length, from, to) {

//     if (from === 'km' && to === 'miles') {
//         return `${length / 1.609} ${to}`;
//     } 
//      else if (from === 'miles' && to === 'km') {
//         return `${length * 1.609} ${to}`;
//     } 
//      else if (from === 'meter' && to === 'centimeter') {
//         return `${length * 100} ${to}`;
//     } 
//     else if (from === 'centimeter' && to === 'meter') {
//         return `${length / 100} ${to}`;
//     } 
//     else if (from === 'feet' && to === 'meter') {
//         return `${length * 0.3048} ${to}`;
//     } 
//     else if (from === 'meter' && to === 'feet') {
//         return `${length / 0.3048} ${to}`;
//     } 
//     else if (from === 'miles' && to === 'feet') {
//         return `${length * 5280} ${to}`;
//     } 
//     else if (from === 'feet' && to === 'miles') {
//         return `${length / 5280} ${to}`;
//     } 
//     else if (from === 'inches' && to === 'meter') {
//         return `${length * 0.0254} ${to}`;
//     } 
//     else if (from === 'meter' && to === 'inches') {
//         return `${length / 0.0254} ${to}`;
//     } 
//     else {
//         return `Invalid conversion from ${from} to ${to}`;
//     }
// }
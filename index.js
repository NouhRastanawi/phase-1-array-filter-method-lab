const findMatching=(driverArr, str) => {
    return driverArr.filter((driverName) => {
         return (driverName.toLowerCase() === str.toLowerCase());
     })
 }
 
 const fuzzyMatch = (driverArr, str) => {
     return driverArr.filter((arr) => {   
         return(arr.slice(0, str.length) === str);
     })
 }
 
 const matchName = (driverArr, str) => {
     return driverArr.filter((arr) => {
         return(arr.name.toLowerCase() === str.toLowerCase())
     })
 }
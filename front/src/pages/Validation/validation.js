export function Check(feilds){
  for(var key in feilds) {
      if(feilds[key] === null || feilds[key] === "") {
         return true
      }
  }
  return false
}
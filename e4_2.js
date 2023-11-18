function isPropertyExist(propertyName, obj) {
    if (propertyName in obj) {
      return 'Свойство есть'}
    else {return 'Свойства нет'}
  }
  
  const sampleObject = {
    name: "John",
    age: 25,
    city: "New York",
    job: "Developer"
  };
  
  const propertyNameToCheck = "ge";
  const result = isPropertyExist(propertyNameToCheck, sampleObject);
  
  console.log(result);
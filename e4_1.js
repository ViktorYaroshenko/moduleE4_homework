function printOwnProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${obj[key]}`);
      }
    }
  }
  
  const sampleObject = {
    name: "John",
    age: 25,
    city: "New York",
    job: "Developer"
  };
  
  printOwnProperties(sampleObject);
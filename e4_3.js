function createObjectWithoutPrototype() {
    return Object.create(null);
  }
  
  const emptyObject = createObjectWithoutPrototype();
  
  console.log(emptyObject.toString);
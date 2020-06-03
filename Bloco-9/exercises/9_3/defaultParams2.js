function getList () {
    return [];
  }
  
  function add (value, list = getList()) {
    list.push(value);
    return list;
  }
  
  console.log(add('test'));
  console.log(add('test2'));
  
  // > ['test']
  // > ['test2']
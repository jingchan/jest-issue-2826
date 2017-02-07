var myModule = require('./build/Release/mymodule')

it('should return data', () => {
  expect(myModule.myMethod()).toMatch('data');
  
  myModule.myMethod = function() {
    return 'sup, a was here'
  }
})

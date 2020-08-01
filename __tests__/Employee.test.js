const Employee = require("../lib/Employee");

test("testing base class constructor", () => {
  const newEmployee = new Employee("alex", "123", "awalker0@gmail.com");
  expect(newEmployee.name).toBe("alex");
  expect(newEmployee.id).toBe("123");
  expect(newEmployee.email).toBe("awalker0@gmail.com");
  //changing value of name  / testing value change
  newEmployee.name = "tom"; 
  expect(newEmployee.name).toBe("tom");
});

test(" testing Prototype methods " , () => {
    const newEmployee = new Employee("jim", "1234", "jimmy@hotmail.com");
    expect(newEmployee.getName()).toBe("jim");
    expect(newEmployee.getId()).toBe("1234");
    expect(newEmployee.getEmail()).toBe("jimmy@hotmail.com");
    expect(newEmployee.getRole()).toBe("Employee");  
})


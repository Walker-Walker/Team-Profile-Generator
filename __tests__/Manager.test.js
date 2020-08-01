const Manager = require("../lib/Manager");

test("testing base class constructor", () => {
    const newManager = new Manager("alex", "123", "awalker0@gmail.com","555-555-5555");
    expect(newManager.name).toBe("alex");
    expect(newManager.id).toBe("123");
    expect(newManager.email).toBe("awalker0@gmail.com");
    expect(newManager.officeNumber).toBe("555-555-5555");
    //changing value of name  / testing value change
    newManager.name = "tom"; 
    expect(newManager.name).toBe("tom");
  });
  
  test(" testing Prototype methods " , () => {
      const newManager = new Manager("jim", "1234", "jimmy@hotmail.com", "555-555-5555");
      expect(newManager.getName()).toBe("jim");
      expect(newManager.getId()).toBe("1234");
      expect(newManager.getEmail()).toBe("jimmy@hotmail.com");
      expect(newManager.getRole()).toBe("Manager");  
      expect(newManager.getOfficeNumber()).toBe("555-555-5555");
  });

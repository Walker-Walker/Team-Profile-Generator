const Engineer = require("../lib/Engineer");

test("testing base class constructor", () => {
    const newEngineer = new Engineer("alex", "123", "awalker0@gmail.com", "Walker-Walker");
    expect(newEngineer.name).toBe("alex");
    expect(newEngineer.id).toBe("123");
    expect(newEngineer.email).toBe("awalker0@gmail.com");
    expect(newEngineer.github).toBe("Walker-Walker");
    //changing value of name  / testing value change
    newEngineer.name = "tom"; 
    expect(newEngineer.name).toBe("tom");
  });
  
  test(" testing Prototype methods " , () => {
      const newEngineer = new Engineer("jim", "1234", "jimmy@hotmail.com", "Walker-Walker");
      expect(newEngineer.getName()).toBe("jim");
      expect(newEngineer.getId()).toBe("1234");
      expect(newEngineer.getEmail()).toBe("jimmy@hotmail.com");
      expect(newEngineer.getRole()).toBe("Engineer");  
      expect(newEngineer.getGithub()).toBe("Walker-Walker");
  })
const Intern = require("../lib/Intern");


test("testing base class constructor", () => {
    const newIntern = new Intern("alex", "123", "awalker0@gmail.com", "HardKnocks");
    expect(newIntern.name).toBe("alex");
    expect(newIntern.id).toBe("123");
    expect(newIntern.email).toBe("awalker0@gmail.com");
    expect(newIntern.school).toBe("HardKnocks");
    //changing value of name  / testing value change
    newIntern.name = "tom"; 
    expect(newIntern.name).toBe("tom");
  });
  
  test(" testing Prototype methods " , () => {
      const newIntern = new Intern("jim", "1234", "jimmy@hotmail.com", "HardKnocks");
      expect(newIntern.getName()).toBe("jim");
      expect(newIntern.getId()).toBe("1234");
      expect(newIntern.getEmail()).toBe("jimmy@hotmail.com");
      expect(newIntern.getRole()).toBe("Intern");  
      expect(newIntern.getSchool()).toBe("HardKnocks");
  })
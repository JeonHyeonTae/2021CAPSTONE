const users = [
    { email: 'kim@test.com', password: '123', name: 'Kim',group:'1' },
    { email: 'lee@test.com', password: '456', name: 'Lee',group:'2' },
    { email: 'park@test.com', password: '789', name: 'Park',group:'3' }
  ]
  
  export function signIn({ email, password }) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
  }
  
  export function signUp({ email, password, c_password,name }) {
    const find = users.find(user => user.email === email);
    if(password===''||name==='')throw new Error();
    if (find === undefined){
      const user = { email: email, password: password, name: name, group:null };
      if(password===c_password){
        users.push(user);
      }
      else{
        user = null;
        throw new Error();
      }
    }
    return ;
  }
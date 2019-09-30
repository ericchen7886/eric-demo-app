import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxFullApp from './ReduxFullApp';
import { userSays, sayHello, user, User } from './module';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReduxFullApp />, document.getElementById('root'));

registerServiceWorker();

// console.log('userSays' ,userSays);
// sayHello(user.name);
// console.log('user',user);
// const john = new User('John Doe', 'johndoe@gmail.com', 1234);
// john.sayHello();

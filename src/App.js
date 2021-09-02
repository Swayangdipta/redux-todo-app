import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Todo from './components/Todo'
import TodoForm from './components/todoForm'

import {Provider} from 'react-redux'
import store from './store';
import Header from './components/Header';
// import Card from './components/card'

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Header/>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;

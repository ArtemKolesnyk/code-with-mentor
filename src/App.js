import { Component } from "react";
import Button from "./components/Button/Button";
import UsersList from './components/UsersList/UsersList';
import AddForm from "./components/AddForm/AddForm";
import { nanoid } from 'nanoid';
import { data } from './data/data';


class App extends Component {
  state = {
    isListShow: false,
    users: data,
    isAddFormShow: false,
  }

  showUsersList = () => {
    this.setState(prevState => ({
      isListShow: !prevState.isListShow,
    }));
  } 

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => id !== userId),
    }));
  }

  showForm = () => {
    this.setState({
      isAddFormShow: true,
    });
  };

  addUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
    }));
  };

  render() {
     const { isListShow, isAddFormShow, users } = this.state;
    return (
      <>
        <Button text={isListShow ? 'Hide user' : 'Show users'}
          clickHandler={this.showUsersList}
        />
        {isListShow && (
          <>
            <UsersList users={users} deleteUser={this.deleteUser}/>
            {isAddFormShow ? (
              <Button text="Add user" clickHandler={this.showForm} />
            ) : (
              <AddForm addUser={this.addUser} />
            )}
         </> 
        )} 
      </> 
    );
  }
}

export default App;

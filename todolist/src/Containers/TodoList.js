import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../Actions'

class TodoList extends Component {
  renderMovies() {
    return this.props.todolist.map((movie, index) => {
      return (
        <div key={index}>
          <li>
            {movie.title}
          </li>
        </div>
      );
   });
  };
  render() {
    return (
      <div>
        <input>
        </input>
        <button
          onClick={() => {this.props.addTodo() }}>
          Submit
        </button>
        <div>
          <ul>
            {this.renderMovies()}
          </ul>
        </div>
      </div>
    )
  };
};
const mapStateToProps = (state) => {
  return {
    todolist: state.todolist,
  };
};

const mapDispatchToProps = (dispatch) => { //methods on the returned object will be a prop
  // When we call selectMovie we should pass the action to all reducers
  return bindActionCreators({ addTodo: addTodo }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

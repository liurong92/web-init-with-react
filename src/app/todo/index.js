import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodoList } from './todoReducer';

class Todo extends React.Component {
  componentWillMount() {
    this.props.getTodoList();
  }

  render() {
    const { todoList } = this.props;
    return (
      <div>
        {todoList && todoList.map((item, index) => {
          return (
            <div key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoReducer.todoList
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTodoList,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

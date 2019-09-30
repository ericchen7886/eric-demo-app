import React, {Component} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

const SimpleTable = (props) =>{
  const { todos } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">No</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">money</TableCell>
            <TableCell align="right">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo,idx) => (
            <TableRow key={todo.id}>
              <TableCell component="th" scope="row">
                {idx+1}
              </TableCell>
              <TableCell align="right">{todo.id}</TableCell>
              <TableCell align="right">{todo.name}</TableCell>
              <TableCell align="right">{todo.money}</TableCell>
              <TableCell align="right">{todo.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

// 待辦事項清單列表
class TodoList extends Component {
  render(){
    return (
      <SimpleTable todos={this.props.todos}/>
    )
  }
}

// Connect時候需要轉譯的Store state props
const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error
  };
};

// Connect時候需要轉譯的Store action props
const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

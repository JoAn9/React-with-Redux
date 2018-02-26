import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as usersActions from '../../actions/userActions';


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {name: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const user = this.state.user;
    user.name = event.target.value;
    this.setState({user: user});
  }

  onClickSave() {
    this.props.createUser(this.state.user);
  }

  userRow(user, index) {
    return <div key={index}>{user.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(this.userRow)}
        <h2>Add User</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.user.name} />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  users: PropTypes.array.isRequired,
  createUser: PropTypes.func.isRequired

};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(usersActions.createUser(user))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

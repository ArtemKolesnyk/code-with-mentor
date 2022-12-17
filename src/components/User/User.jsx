import PropTypes from 'prop-types';


const User = ({ user: { email, name, id }, deleteUser }) => {
  return (
    <li>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })
}

export default User;
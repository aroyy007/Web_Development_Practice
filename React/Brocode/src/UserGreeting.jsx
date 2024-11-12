import PropTypes from 'prop-types';


function UserGreeting(props){
    if(props.isLoggedIn){
        return <h1 className="welcomeMessage">Welcome back, {props.userName}!</h1>;
    }
    else{
        return <h1 className="alertMessage">Please sign up.</h1>;
    }
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: 'Unknown'
}

export default UserGreeting;
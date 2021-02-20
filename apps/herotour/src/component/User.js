
function User(props) {
    console.log(props);

    const username = props.username;
    const email = props.email;
    
    return(
        <div>
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    );
}


export default User;
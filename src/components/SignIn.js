import React from 'react';

function SignIn(props){
    return (
        <form onSubmit={props.onSignIn}>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
<<<<<<< HEAD
            {/* {
                props.error ? (
                    <p>{props.error}</p>
                ) : ''
            } */}

            {
             props.error && <p>{props.error}</p>           

            }  

=======
            {
                props.error ? (
                    <p>{props.error}</p>
                ) : ''
            }
            {/* or do it this way to avaoid unnecessary else conditions */}
            {
                 props.error && <p>{props.error}</p>
            }
>>>>>>> 3f999bd63df7f74437b006e80a8ca78d6ff7088a
        </form>
    )
}

export default SignIn
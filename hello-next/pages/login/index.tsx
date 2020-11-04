import React from 'react';
export default function Login() {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [loginStatus , setLoginStatus ] = React.useState<boolean>(false)
    const submitForm = async () => {
        fetch('http://localhost:3000/api/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
            method: 'POST'
        }).then(
            res => {
                if (res.status === 200) {
                    setLoginStatus(true)
                }
                else{
                    setLoginStatus(false)
                }
            }
        )
    }
    return (
        <div>
            <form>
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <br />
                <input type="button" value="Login" onClick={submitForm} />
            </form>
            { loginStatus && <h3>Your Credentials are working</h3> }
        </div>
    );
}
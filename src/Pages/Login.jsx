import { GoogleLogin } from 'react-google-login';

export default function Login() {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div>
            <GoogleLogin
                clientId="722555313958-ctam9forb3nnsjdl18293nhrum1j57oe.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

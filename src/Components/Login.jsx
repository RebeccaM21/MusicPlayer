import { Container } from 'react-bootstrap'; 


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=d4c253e9f96a452bbab67dc95d304c34&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => { 
    // <Container className='d-flex justify-content-center align-items-center'>
    // <a className='btn btn-success btn-lg' href={AUTH_URL} >Login with Spotify</a>
    // </Container>
    <h1>Hello</h1>
}
 
export default Login; 
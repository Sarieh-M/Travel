import './Welcome.css';
import LoginBox from './LoginBox';

const Welcome: React.FC = () => {
    return(<>
     <div className="container">
          <h1 className='welcome'>Welcome</h1>
          <h2 className='to_agency'>To (agency name)</h2>
          <LoginBox/>
    </div>
    
    </>)
}

export default Welcome;
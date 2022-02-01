import { useState } from 'react/cjs/react.development';
import Modal from './componets/Modal';

function App() {
  const [IsModalVisible, setIsModalVisible] = useState(false);
  
  return (
    <div className="App">

    <button onClick={() => setIsModalVisible(true)}> Open </button>

    {IsModalVisible ? (
    <Modal onClose= {() => setIsModalVisible (false)}> 

<div className='form'>
        <div className='form_logo'>
          Lo<span>g</span>o
        </div>
        <form className='form_items'>
          <div className='form_inputs'>
            <input 
              type='text'
              required
              />
            <label>username or email</label>
          </div>
          <div className='form_inputs'>
            <input
              type='password'
              required
              />
            <label>password</label>
          </div>
          <button className='form_button'>GO</button>
        </form>
        <div className='form_other'>
          <a href='#'>forgot password?</a>
          <a href='#'>Join Now</a>
        </div>
      </div>
     
    </Modal> ) : null}
    </div> )}

export default App; 
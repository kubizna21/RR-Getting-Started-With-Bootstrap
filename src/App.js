import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'



function App() {
  return (
    <div className="App">
      <Nav
        activeKey="/home"
        onSelect={key => alert(`Selected nav element is ${key}`)}
      >
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
        <Form.Group controlId='forBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter your Email' />
          <Form.Text className='text-muted'>
            We will probably share your email address with the government
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label="Remember my login" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Form dropdown with favorite movies</Form.Label>
          <Form.Control as="select">
            <option>Akira</option>
            <option>One Flew Over the Cookoos Next</option>
            <option>Ghost Busters 2016</option>
            <option>It Follows</option>
            <option>Top Gun</option>
          </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>


      </Form>

      <h1>Bootstrap Website</h1>
      <Button variant='danger'>THIS IS DANGEROUS</Button>
    </div>
  );
}

export default App;

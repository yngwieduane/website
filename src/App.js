import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button,  Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Form>
          <Row className="mx-0">
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="email@address.com"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="****"/>
                </Form.Group>
                <Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Card className="mb-3" style={{color:"#000"}}>
          <Card.Img src="https://picsum.photos/id/1/200/100"/>
          <Card.Body>
            <Card.Title>Image Gallery</Card.Title>
            <Card.Text>Here you can view all the images</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item >Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="danger" className="mb-2">Test Only</Alert>
        <Button variant="danger">Test Button</Button>
      </Container>
      </header>
    </div>
  );
}

export default App;

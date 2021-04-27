import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button,  Alert, Breadcrumb, Card, Form, Jumbotron, Modal, Nav, Tab } from 'react-bootstrap';
import React, { Component } from "react";
import {Header, Footer} from "./MainFiles";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function App() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
    <>
        <Header />
        <Container>
            <Jumbotron className="my-5">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary" onClick={() => setModalShow(true)}>Open Modal</Button>
                </p>
            </Jumbotron>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Row className="mx-0">
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/200/100" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/200/100" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/200/100" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="my-5">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                I grant thou wert not married to my Muse, And therefore mayst without attaint o'erlook The dedicated words which writers use Of their fair subject, blessing every book. Thou art as fair in knowledge as in hue, Finding thy worth a limit past my praise; And therefore art enforced to seek anew Some fresher stamp of the time-bettering days. And do so, love; yet when they have devis'd, What strained touches rhetoric can lend,
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Those parts of thee that the world's eye doth view Want nothing that the thought of hearts can mend; All tongues--the voice of souls--give thee that due, Uttering bare truth, even so as foes commend. Thy outward thus with outward praise is crown'd; But those same tongues, that give thee so thine own, In other accents do this praise confound By seeing farther than the eye hath shown. They look into the beauty of thy mind, And that in guess they measure by thy deeds;
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
        <Footer />
    </>
    );
}

export default App;

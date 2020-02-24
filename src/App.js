import React from 'react';
import './App.scss';
//bootstrap
import { Row, Col } from 'react-bootstrap';
//layouts
import Main from './components/layout/Main';
import Menu from './components/layout/Menu';

function App() {
  return (
    <div className="app">
      <Row>
        <Col md={9}>
          <Main />
        </Col>
        <Col md={3} className="menu">
          <Menu />
        </Col>
      </Row>
    </div>
  );
}

export default App;

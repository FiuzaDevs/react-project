import React from 'react';
import { Container, Row } from 'react-bootstrap';

export function LoginComponent() {

  return (
    <Container>
      <div className="m-5 d-flex flex-column aling-items-center justify-content-center">
        <div>
          <h1 className="text-center">Login</h1>
        </div>
        <Row className="n aling-items-center justify-content-center">
          <form className="my-3 col-md-6 col-12">
            <div className='form-group'>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className='form-group'>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
          </form>
        </Row>
      </div>
    </Container>
  )
}
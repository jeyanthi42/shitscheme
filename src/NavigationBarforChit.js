import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavigationBarforChit = () => {

  const inputRef = useRef();
  const loginMobileNo = sessionStorage.getItem("loginid");
  return (
    <div>

      <Container>

        {loginMobileNo.match('8754459104') ?
          (<Navbar bg="dark" data-bs-theme='dark' >
            <Nav className="me-auto">
            <Link className='NavProb' to='/AdminViewPage' ref={inputRef}> View Chit Members </Link> |
                <Link className='NavProb' to='/AdminPage' onClick={() => inputRef.current.focus()}> Maintain Chit Members</Link>
              
            </Nav>
          </Navbar>
          ) :
          (
            <Navbar bg="dark" data-bs-theme='dark' >
              <Nav className="me-auto">
                <Link className='NavProb' to='/Home' ref={inputRef}> Home </Link> |
                <Link className='NavProb' to='/Paydetail' onClick={() => inputRef.current.focus()}> PaymentDetails</Link>
              </Nav>
            </Navbar>)

        }


      </Container>

    </div>
  )
}

export default NavigationBarforChit
// import { Component } from 'react';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import WorkContainer from '../Work/WorkContainer';
import Login from '../Login/Login';
import AddMaterial from '../Forms/AddMaterialForm/AddMaterialForm';

const Header = (props) => {
        
        return(
            <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/' >
                        <img
                            src='https://www.tangandcompany.com/wp-content/uploads/2018/05/OSCA-CBT.png'
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' >
                        <Nav>
                            <Nav.Link href='/' >Main </Nav.Link>
                            <Nav.Link href='/work' >Work</Nav.Link>
                            <Nav.Link href='/addmaterial' >Add material</Nav.Link>
                            { !props.isAuth 
                            ? <Nav.Link href='/login' >Login</Nav.Link> 
                            : <div> {props.username} <button onClick={props.logout}>LOGOUT</button></div>
                        }
                    
                        </Nav>
                        
                        {/* <Form inline>
                            <FormControl 
                            type='text'
                            placeholder='...'
                            className='mr-sm-2'/>
                        </Form>
                        <Button variant='outline-info'>Work</Button> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/work' component={WorkContainer} />
                    <Route exact path='/addmaterial' component={AddMaterial} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
            </>
        )
    }
    
export default Header;

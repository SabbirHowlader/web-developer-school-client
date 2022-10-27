import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='bg-info w-60 pb-4 pt-4'>
            <h5>1. What is Cors ?</h5>
            <p>Ans: Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos</p>
            <br />
            <h5>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>Ans: Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. For Mobile or Web Apps. Build Fast For Any Device. Customize Your App.</p>
            <p>Single-Factor/Primary Authentication. ...
                Two-Factor Authentication (2FA) ...
                Single Sign-On (SSO) ...
                Multi-Factor Authentication (MFA) ...
                Password Authentication Protocol (PAP) ...
                Challenge Handshake Authentication Protocol (CHAP) ...
                Extensible Authentication Protocol (EAP)</p>
            <br />
            <h5>3. How does the private route work?</h5>
            <p>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
            <br />
            <h5>4. What is Node? How does Node work?</h5>
            <p>Ans: Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.</p>
            <p>Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.</p>
        </Container>
    );
};

export default Blog;
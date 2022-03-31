import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Navbar, Container, NavDropdown,Nav,Spinner} from 'react-bootstrap';
import { useEffect, useState } from "react";

export default function Home() {
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ホーム｜Home Page</title>
        <meta name="description" content="Salesforce Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">ホーム</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/article">記事</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h2 style={{textAlign: 'center'}}>Home</h2>
        {isloading ? <Spinner animation="border" variant="primary" /> : ""}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

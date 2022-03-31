import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Navbar, Container, NavDropdown,Nav} from 'react-bootstrap';
import Link from "next/link";

export default function Home() {
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
                <Nav.Link>
                  <Link href="/article">記事</Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h2 style={{textAlign: 'center'}}>Home</h2>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

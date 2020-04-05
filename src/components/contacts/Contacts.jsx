import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

import style from "./contacts.module.css";
import SocialLinks from "../sociallinks/SocialLinks";
import Menu from "../menu/Menu";

const Contacts = () => {
  return (
    <Container className="vh-100  p-0 container-fluid">
      <Row className={style.nav}>
        <Col>Julia Sohach</Col>
        <Col sm={{ span: 1, offset: 8 }}>
          <Menu />
        </Col>
      </Row>
      <hr color="black"></hr>
      <Row className={style.address}>
        <Col sm="4">Address</Col>
        <Col className={style.address__data}>
          Киев,
          <br />
          ул.Ломоносова 81
        </Col>
      </Row>
      <hr color="black"></hr>
      <Row className={style.phone}>
        <Col sm="4">
          Kievstar
          <br /> Vodafone
        </Col>
        <Col className={style.phone__data}>tel</Col>
      </Row>
      <hr color="black"></hr>
      <Row className={style.mail}>
        <Col sm="4">Email</Col>
        <Col className={style.mail__data}>gmail</Col>
      </Row>
      <hr color="black"></hr>
      <Row className={style.socials}>
        <Col sm="4">Socials</Col>
        <Col className={style.social__data}>
          <SocialLinks></SocialLinks>
        </Col>
      </Row>
      <hr color="black"></hr>
      <Row sm={12} className={style.ask}>
        <Col className={style.ask_style}>Ask me</Col>
      </Row>
    </Container>
  );
};

export default Contacts;

import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Container, Row } from "react-grid-system";
import Col from "react-bootstrap/Col";
import logo from "./assets/imgs/logo-vertical.jpg";
import logoAzul from "./assets/imgs/Logo-azul.png";
import logoBlanco from "./assets/imgs/logo.png";

import botonAzul from "./assets/imgs/Boton-azul.png";
import nube from "./assets/imgs/Nube-1.png";
import banner1 from "./assets/imgs/1.png";
import banner2 from "./assets/imgs/2.png";
// import banner3 from "./assets/imgs/3.png";
import logoBanner from "./assets/imgs/Logo.png";

import pdfPortafolioMyers from "./assets/archivos/Portafolio de Carlos Myers para imprimir_compressed (1).pdf";
import pdfCurriculum from "./assets/archivos/RESUMEN CV CMA 2020.pdf";
import pdfProyectosResidenciales from "./assets/archivos/Proyectos residenciales.pdf";
import pdfProyectosComerciales from "./assets/archivos/proyectos comerciales.pdf";
import pdfCocinas from "./assets/archivos/Cocinas.pdf";
import pdfDisenoInterior from "./assets/archivos/Diseño interior.pdf";
import pdfProyectosInvestigacion from "./assets/archivos/Proyectos de investigacion.pdf";
import pdfServiciosOnline from "./assets/archivos/CMA+ OFERTAS DE SERVICOS ONLINE FINAL.pdf";
import { ResponsiveEmbed, Button } from "react-bootstrap";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  state = {
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    modalShow: false
  };

  mouseEnter = nombre => {
    this.setState({
      [nombre]: true
    });
  };

  mouseLeave = nombre => {
    this.setState({
      [nombre]: false
    });
  };

  render() {
    const { s1, s2, s3, s4, s5, s6 } = this.state;
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" className="bgdark " variant="dark">
          <Navbar.Brand href="#home">
            <img alt="" src={banner1} style={{ marginLeft: "20px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={{ color: "white !important" }}>
              <Nav.Link
                href="#home"
                style={{
                  margin: "0 2em",
                  color: "white !important",
                  fontFamily: "CenturyGothicBold"
                }}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#nosotros"
                style={{
                  margin: "0 2em",
                  color: "white !important",
                  fontFamily: "CenturyGothicBold"
                }}
              >
                ¿Quién soy?
              </Nav.Link>
              <Nav.Link
                href="#servicios"
                style={{
                  margin: "0 2em",
                  color: "white !important",
                  fontFamily: "CenturyGothicBold"
                }}
              >
                Servicios
              </Nav.Link>
              <Nav.Link
                href="#portafolio"
                style={{
                  margin: "0 2em",
                  color: "white !important",
                  fontFamily: "CenturyGothicBold"
                }}
              >
                Portafolio
              </Nav.Link>
              <Nav.Link
                href="#contacto"
                style={{
                  margin: "0 2em",
                  color: "white !important",
                  fontFamily: "CenturyGothicBold"
                }}
              >
                Contacto
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="B U S C A R"
                className="mr-sm-2 "
              />
              <img alt="" src={banner2} style={{ marginRight: "20px" }} />
              {/* <img alt="" className="img-"  src={banner3} style={{ marginRight: "10px" }} /> */}
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid style={{ paddingLeft: "0", paddingRight: "0" }}>
          <Row
            className="banner-1 super-center"
            style={{ marginRight: "0", marginLeft: "0" }}
          >
            <img alt="" src={logoBanner} style={{ width: "290px" }} />
          </Row>
          <Row
            className="banner-2 super-center"
            style={{ marginRight: "0", marginLeft: "0" }}
          >
            <div style={{ width: 800, height: "auto" }}>
              <ResponsiveEmbed aspectRatio="16by9">
                <iframe
                  src="https://www.youtube.com/embed/yyRgF1fPQYg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="video promocional"
                ></iframe>
              </ResponsiveEmbed>
            </div>
          </Row>
          <Row
            className="nosotros"
            id="nosotros"
            style={{ marginRight: "0", marginLeft: "0" }}
          >
            <Col md={5} className="nosotros-logo">
              <img alt="" src={logo} className="mx-auto my-auto" />
            </Col>
            <Col md={7} className="nosotros-texto">
              <br />
              <div className="cinta">
                <span>¿Quién soy?</span>
              </div>

              <p>
                Soy <span>Carlos Myers</span>, un arquitecto convencido de que
                su labor debe ir más allá de los planos y debe ayudar a quienes
                lo necesitan, por eso desarrollé en mi empresa diversas
                políticas de responsabilidad social que permitan a la
                arquitectura como disciplina, impactar de manera positiva a su
                entorno en lo social, lo económico y lo ambiental.
              </p>

              <p>
                Todos los proyectos y eventos que se realizan a través de mi
                organización generan un porcentaje de capital destinado a
                proyectos con esas características.
              </p>

              <p>
                En este momento, el objetivo es mejorar las condiciones de la
                Facultad de Arquitectura y Urbanismo de la Universidad Central
                de Venezuela con la intención de impactar positivamente en la
                motivación, disposición y energía de quienes hacen vida
                académica y laboral en ella, para lo cual existen una serie de
                proyectos y alianzas a desarrollarse en este 2020.{" "}
                <span>¿Te sumas?</span>
              </p>

              <div className="cinta resumen">
                <a
                  href={pdfCurriculum}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ width: "100%", height: "100%" }}
                >
                  {" "}
                  <p>
                    {" "}
                    <span>Resúmen</span> Curricular
                  </p>
                </a>
              </div>
              {/* <Row justify="end" style={{ marginRight: "0" }}>
                <Col
                  md={3}
                  className="super-center s  "
                  onMouseEnter={() => this.mouseEnter("s6")}
                  onMouseLeave={() => this.mouseLeave("s6")}
                >
                  <a
                    href={pdfCurriculum}
                    className="super-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <img
                      src={botonAzul}
                      className="boton-azul"
                      // style={{ position: "relative", width: "65%" }}
                      alt=""
                    />
                    {s6 ? (
                      <span
                        className="cv-resumen"
                        style={{ zIndex: 3, fontSize: "20px" }}
                      >
                        DESCARGAR
                      </span>
                    ) : (
                      <span className="cv-resumen" style={{ zIndex: 3 }}>
                        Resúmen
                        <br />
                        Curricular
                      </span>
                    )}
                  </a>
                </Col>
              </Row> */}
            </Col>
          </Row>
          <Row
            justify="center"
            className="servicios"
            id="servicios"
            style={{ marginRight: "0", marginLeft: "0", marginBottom: "2.5em" }}
          >
            <Col md={12}>
              <h1>Servicios</h1>
            </Col>

            <Col
              md={3}
              className="s-1 s super-center"
              onMouseEnter={() => this.mouseEnter("s1")}
              onMouseLeave={() => this.mouseLeave("s1")}
            >
              <a
                href={pdfProyectosResidenciales}
                className="super-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%", height: "100%" }}
              >
                {s1 ? (
                  <>DESCARGAR</>
                ) : (
                  <>
                    Proyectos
                    <br />
                    residenciales
                  </>
                )}
              </a>
            </Col>
            <Col
              md={3}
              className="s-2 s super-center"
              onMouseEnter={() => this.mouseEnter("s2")}
              onMouseLeave={() => this.mouseLeave("s2")}
            >
              <a
                href={pdfProyectosComerciales}
                className="super-center"
                rel="noopener noreferrer"
                target="_blank"
                style={{ width: "100%", height: "100%" }}
              >
                {s2 ? (
                  <>DESCARGAR</>
                ) : (
                  <>
                    Proyectos
                    <br />
                    comerciales
                  </>
                )}
              </a>
            </Col>
            <Col
              md={3}
              className="s-3 s super-center"
              onMouseEnter={() => this.mouseEnter("s3")}
              onMouseLeave={() => this.mouseLeave("s3")}
            >
              <a
                href={pdfCocinas}
                className="super-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%", height: "100%" }}
              >
                {s3 ? <>DESCARGAR</> : <>Cocinas</>}
              </a>
            </Col>
            <Col
              md={3}
              className="s-4 s super-center"
              onMouseEnter={() => this.mouseEnter("s4")}
              onMouseLeave={() => this.mouseLeave("s4")}
            >
              <a
                href={pdfDisenoInterior}
                className="super-center"
                rel="noopener noreferrer"
                target="_blank"
                style={{ width: "100%", height: "100%" }}
              >
                {s4 ? (
                  <>DESCARGAR</>
                ) : (
                  <>
                    Diseño
                    <br />
                    Interior
                  </>
                )}
              </a>
            </Col>
            <Col
              md={3}
              className="s-5 s super-center"
              onMouseEnter={() => this.mouseEnter("s5")}
              onMouseLeave={() => this.mouseLeave("s5")}
            >
              <a
                href={pdfProyectosInvestigacion}
                className="super-center"
                rel="noopener noreferrer"
                target="_blank"
                style={{ width: "100%", height: "100%" }}
              >
                {s5 ? (
                  <>DESCARGAR</>
                ) : (
                  <>
                    Proyectos
                    <br />
                    de Investigación
                  </>
                )}
              </a>
            </Col>
            <Col
              md={3}
              className="s-6 s super-center"
              onMouseEnter={() => this.mouseEnter("s6")}
              onMouseLeave={() => this.mouseLeave("s6")}
            >
              <a
                href="https://www.youtube.com/channel/UCTwiiJ5_WgsaPQEC1cWU4mg"
                className="super-center"
                rel="noopener noreferrer"
                target="_blank"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={nube}
                  style={{ position: "absolute", width: "65%" }}
                  alt=""
                />
                {s6 ? (
                  <span style={{ zIndex: 3, fontSize: "30px" }}>VER MÁS </span>
                ) : (
                  <span style={{ zIndex: 3 }}>
                    Impacto
                    <br />
                    Social
                  </span>
                )}
              </a>
            </Col>

            <Col md={9} className="impacto">
              <Button
                className="btn-impacto"
                size="lg"
                href="https://www.santander.com.ar/banco/online/pymes-advance/formacion-empresarial/pildoras-de-conocimiento/rse-y-sustentabilidad/triple-impacto-pilares-de-las-empresas-sustentables"
                rel="noopener noreferrer"
                target="_blank"
              >
                ¿Qué es Triple Impacto?
              </Button>
            </Col>
          </Row>
          <Row
            className="portafolio"
            id="portafolio"
            style={{ marginRight: "0", marginLeft: "0" }}
          >
            <a
              href={pdfPortafolioMyers}
              className="pdf-portafolio"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                width: "100%",
                height: "100%"
              }}
            >
              <span className="title-portafolio">PORTAFOLIO</span>
              <img
                src={logoAzul}
                alt="logo azul"
                style={{ marginLeft: ".3em" }}
              />
            </a>
          </Row>
          <Row
            className="contacto"
            id="contacto"
            style={{ marginRight: "0", marginLeft: "0" }}
          >
            <Col md={6} className="contacto-left">
              <h1>CONTACTO</h1>
              <form>
                <div>
                  <label>NOMBRE</label>
                  <br />
                  <input placeholder="" type="text" />
                </div>
                <div>
                  <label>CORREO</label>
                  <br />
                  <input placeholder="" type="text" />
                </div>
                <div>
                  <label>TELÉFONO</label>
                  <br />
                  <input placeholder="" type="text" />
                </div>
                <div>
                  <label>MENSAJE</label>
                  <br />
                  <textarea placeholder="" type="text" />
                </div>
                <button className="boton boton-dark">ENVIAR</button>
              </form>
            </Col>
            <Col
              md={6}
              className="contacto-right ml-auto mb-3"
              // style={{ marginBottom: "1em" }}
            >
              <Button
                className="mb-3 mb-md-0 btn-asesoria"
                size="lg"
                href={pdfServiciosOnline}
                rel="noopener noreferrer"
                target="_blank"
              >
                Asesoría Online
              </Button>
              <div className="redes-sociales">
                <a
                  href="https://twitter.com/carlosmyersarq?lang=es"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitterSquare} size="xs" />
                </a>

                <a
                  href="https://www.facebook.com/carlosmyersarquitectura/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="xs" />
                </a>

                <a
                  href="https://www.instagram.com/carlosmyersarquitectura/?hl=es-la"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} size="xs" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCTwiiJ5_WgsaPQEC1cWU4mg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FontAwesomeIcon icon={faYoutubeSquare} size="xs" />
                </a>
              </div>

              <img
                src={logoBlanco}
                alt="logo"
                className="mt-3 mt-md-0"
                style={{ marginLeft: "30px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

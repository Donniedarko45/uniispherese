import React from "react";
import { Col, Row } from "react-bootstrap";
import Homeicon from '../../../assets/Homeicon.svg'
import Addicon from '../../../assets/Additions.svg'
import startpicon from '../../../assets/starpicon.svg'
import calendicon from '../../../assets/calends.svg'
import Bellicon from '../../../assets/Bellicon.svg'
// import proflie from '../../../assets/profile.png'
import '../Home.css'
export function Homefooter(){
    return (
        <React.Fragment>
             <footer className="newfooter">
             <Row className="w-100 ">
                    <Col className="d-flex ">
                    <Col><button className="p-0 bg-white"><img src={Homeicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={startpicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={calendicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={Addicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={Bellicon} className="home-logo"/></button></Col>
                    {/* <Col><button className="p-0 bg-white"><img src={chaticons} className="home-logo"/></button></Col> */}
                    </Col>
                    </Row>
             </footer>
        </React.Fragment>
    )
}

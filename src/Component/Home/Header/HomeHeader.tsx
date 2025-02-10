import React, { useState } from "react"
import { Button,  Col, Form, FormControl, Row } from "react-bootstrap"
import unilogo from '../../../assets/uniisphearlogo.png'
import { BsSearch } from "react-icons/bs";
import Homeicon from '../../../assets/Homeicon.svg'
import Addicon from '../../../assets/Additions.svg'
import startpicon from '../../../assets/starpicon.svg'
import calendicon from '../../../assets/calends.svg'
import Bellicon from '../../../assets/Bellicon.svg'
import chaticons from '../../../assets/chatsicon.svg'
import proflie from '../../../assets/profile.png'
import '../Home.css'
export function HomeHeader(){
    const [query, setQuery] = useState('');

  const handleSearch = (e:any) => {
    e.preventDefault();
    console.log('Search query:', query);
  };
    return (
        <React.Fragment>
        <div className="Homeroot border border-dark mt-1" style={{boxShadow: '0px 4px 4px 0px #00000040'}}>
       <div className="container-fluid  p-0 m-0 ">
            <header className="bg-white d-flex w-100 p-2 ">
                <Row className="w-100 ">
                    <Col className="d-flex footerheader">
                    <Col><button className="p-0 bg-white"><img src={Homeicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={startpicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={calendicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={Addicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={Bellicon} className="home-logo"/></button></Col>
                    <Col><button className="p-0 bg-white"><img src={chaticons} className="home-logo"/></button></Col>
                    </Col>
                    <Col>
                    <Row>
                <Col className="col-2 p-0">
                    <img alt='user-img' src={proflie} className="home-logo border rounded-5"></img>
                </Col>
                <Col className="col-8 ">
                <Form className="d-flex border rounded-5 border-dark" onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 border-0  rounded-5 rounded-end"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="outline-light" className="border-0 rounded-5 rounded-start text-dark"><BsSearch /></Button>
    </Form>
                </Col>
                <Col className="col-2 p-0 d-flex justify-content-end">
                <img src={unilogo} alt='unilogo' className='unihomelogo home-logo'></img>
                
                <img src={chaticons} alt='chaticon' className="home-logo chaticon" />
                </Col>
                </Row>
                </Col>
                </Row>
            </header>
            {/* <CardBody></CardBody> */}
        {/* </Card> */}
       </div>
       </div>
    </React.Fragment>
    )
}
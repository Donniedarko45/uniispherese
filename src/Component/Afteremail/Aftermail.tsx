import React,{ useState } from "react";
import unilogo from '../../assets/uniisphearlogo.png'
import { Container,Card,CardBody,Form ,Button, FormGroup} from "react-bootstrap"
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
function Aftermail(){
    return (
        <React.Fragment>
        <nav className='d-flex justify-content-end  container-fluid align-items-center place-content-center' style={{placeContent:'center'}}>
        
        
        <div  >
            <img src={unilogo} alt='unilogo' className='unilogo'></img>
        </div>
        <div>
       {/* < HiBars3 className="fs-1"/> */}
        </div>
    </nav>
    <Container style={{fontFamily:'Inter'}} className="Firstflash">
    <Card className="border-0 pt-0 pb-0 ps-0 pe-0 col-md-5 m-auto d-flex flex-column align-items-center ">
      <CardBody className="ps-0 pe-0 d-flex flex-column align-items-center">
        <h1 className="headingfontsize fw-bolder   fs-sm-1">
        <span className="color-first">U</span><span className="color-Second">N</span><span className="color-third">I</span><span className="color-third">I</span ><span className="color-four">S</span><span className="color-five">P</span><span className="color-six">H</span><span className="color-five">E</span><span  className="color-Second">R</span><span className="color-first">E</span></h1>
        
        <h3 className=" fw-normal fs-5 headingthird text-dark">“Connect”  “Collaborate”  “Success”</h3>
        <Card className='border-0 rounded-5 mt-3 ' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.100000000000000000) 100%)'}}>
             <Form>
                <Form.Group className="mb-3" controlId="Username">
                  <Form.Label className="ps-2 mb-0 headingthird">Email or Phone Number</Form.Label>
                    <Form.Control required type="text"   placeholder="" />
                    <Form.Control.Feedback type="invalid" className=" mb-1" >
                        Enter user name
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="w-100 d-flex justify-content-center mt-3 mb-3">
                    <Button variant="primary" type="submit"className="headingthird">continue</Button>
                </div>
             </Form>
             
        </Card>
    </CardBody>
   </Card>
   </Container>
   <div className="firstemptycontainer container"></div>
        <div className="secondemptycontainer container"></div>
        <ToastContainer />
   </React.Fragment>
    )
}

export default Aftermail
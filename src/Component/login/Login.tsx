import React, { useState } from 'react'
import unilogo from '../../assets/uniisphearlogo.png'
import { Container,Card,CardBody,Form ,Button} from "react-bootstrap"
import { HiBars3 } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import {  Bounce, ToastContainer , toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authAxios } from '../../access/access';
function Login(){
    const [validated, setValidated] = useState(false);
    const [fromdata,setfromdata] =useState({"email":"","password":""})
    const registerUser =  async (userData: any)  => {
        const response = await authAxios.post("/auth/login", userData);
        return response.data;
      };
    const mutation = useMutation( {
        mutationFn: registerUser,
        onSuccess: (data:any) => {
          console.log("login successfully:", data);
          toast.success('login successful!', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                  });
        },
        onError: (error:any) => {
          console.error("Registration failed:", error);
          toast.warn('Please fill the correct details', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        },
      });
      const handleSubmit = (event:any) => {
        event.preventDefault();
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

          const userData={
            email:fromdata.email,
            password:fromdata.password
          }
          setValidated(true)
          mutation.mutate(userData);
        }
      
return (
    <React.Fragment>
        <nav className='d-flex justify-content-between  container-fluid align-items-center place-content-center' style={{placeContent:'center'}}>
        
        
        <div  >
            <img src={unilogo} alt='unilogo' className='unilogo'></img>
        </div>
        <div>
       < HiBars3 className="fs-1"/>
        </div>
    </nav>
    <Container style={{fontFamily:'Inter'}} className="Firstflash">
    <Card className="border-0 pt-0 pb-0 ps-0 pe-0 col-md-5 m-auto d-flex flex-column align-items-center ">
      <CardBody className="ps-0 pe-0 d-flex flex-column align-items-center">
        <h1 className="headingfontsize fw-bolder   fs-sm-1">
        <span className="color-first">U</span><span className="color-Second">N</span><span className="color-third">I</span><span className="color-third">I</span ><span className="color-four">S</span><span className="color-five">P</span><span className="color-six">H</span><span className="color-five">E</span><span  className="color-Second">R</span><span className="color-first">E</span></h1>
        
        <h3 className=" fw-normal fs-5 headingthird text-dark">“Connect”  “Collaborate”  “Success”</h3>
        <Card className='border-0 rounded-5 mt-3 ' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.100000000000000000) 100%)'}}>
            <Form className="text-start" noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)}>
            <Form.Group controlId="formBasicEmail ">
            <Form.Label className='headingthird mb-1 ps-1'>Email or Phone Number</Form.Label>
            <Form.Control type='email' value={fromdata.email} onChange={(e)=>setfromdata({...fromdata,email: e.target.value})} required></Form.Control>
            <Form.Control.Feedback className='text-danger'><small>Please enter your correct email / phone number</small></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label className='headingthird mb-1 mt-4 ps-1' >Password</Form.Label>
            <Form.Control type='password' required value={fromdata.password} onChange={(e)=>setfromdata({...fromdata,password: e.target.value})}></Form.Control>
            <Form.Control.Feedback type="invalid" className='text-danger'><small>Please enter your correct Password</small></Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-3 d-flex justify-content-end headingthird " controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" className='fw-light'/>
            </Form.Group>
            <div >
                <p className='text-center headingthird'><small className='fw-ligth text-center'>By clicking Agree & join or continue, you agree to the Uniisphere User Agreement, Privacy Policy and Cookie Policy</small></p>
            </div>
            <div className='w-100 d-flex justify-content-center' >
                <Button variant='primary' type='submit' className='rounded-5 m-auto'>Continue</Button>
            </div>
            </Form>
            <div className="line-container">
  <span className="left-line"></span>
  <span className="text headingthird p-1">or with</span>
  <span className="right-line"></span>
</div>
             <div>
                <button className="bg-white border headingthird text-dark" type="submit"><FcGoogle /> Google</button>
             </div>
             <div className='mt-5 headingthird'>
                <p>Already on Uniisphere?<Link to='/Register'>Sign Up</Link></p>
             </div>
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
export default Login
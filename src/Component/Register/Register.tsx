import React, { useState } from "react"
import unilogo from '../../assets/uniisphearlogo.png'
import { Container,Card,CardBody,Form ,Button} from "react-bootstrap"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { Bounce, ToastContainer , toast} from "react-toastify"
import { useMutation } from "@tanstack/react-query";
import { authAxios } from "../../access/access";

type MyComponentProps = {
    // handlerfun: () => void;  // Define handler as a function that returns void
    
  };
  interface RegisterData {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    profilePictureUrl: string;
    PhoneNumber: string;
    location: string;
    bio: string;
    college: string;
    degree: string;
    startYear: number;
    endYear:number;
  }
  const registerUser =  async (userData: any)  => {
    const response = await authAxios.post("/auth/register", userData);
    return response.data;
  };
const Register:React.FC<MyComponentProps>=()=>{
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [match, setMatch] = useState(true);
  const [emailverify,setemailverify]=useState(false)
  const [emailnumber, setemailnumber] = useState();
  const [process,setprocess] = useState({first:false,second:false,third:false})
  const [fromdata,setformdata] =useState<{ sixteenabove: boolean ,fristname:string,lastName:string,location:string}>({fristname:'',lastName:'',location:'',sixteenabove:false})
  const [validatedtwo, setValidatedtwo] = useState(false);
  const [fromdatatwo,setformdatatwo]= useState<{student:boolean,collage:string,degree:string,Specialization:string,StartYear:number,endYear:number,validated:boolean}>({collage:'',degree:'',Specialization:'',StartYear:0,endYear:0,validated:false,student:false})
  const [validatedthree, setValidatedthree] = useState(false);
  const [validated, setValidated] = useState(false);
  
  const mutation = useMutation( {
    mutationFn: registerUser,
    onSuccess: (data:any) => {
      console.log("User registered successfully:", data);
      alert("Registration successful!");
    },
    onError: (error:any) => {
      console.error("Registration failed:", error);
      alert(error.message)
    },
  });
  
  
  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };
const handleSubmitOne = (event:any) => {
  event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false ) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    alert(emailnumber);
    (confirmPassword.trim() !=='' && emailnumber !=='' && emailnumber !==undefined)?(setprocess({...process,first:true}) ): ''
  };

  const handleSubmittwo = (e:any) => {
    debugger;
    e.preventDefault();
      const form = e.currentTarget;
      console.log(form)
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
          try{     
            (fromdata.fristname !=='' && fromdata.lastName !=='' && fromdata.location !=='')?(setprocess({...process,second:true})) : alert('@')
            setValidatedtwo(true);
          }catch(err){
            console.log(err)
          }

    };
    const handleSubmitthird = (event:any) => {
      event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        (fromdatatwo.collage !==''&& fromdatatwo.degree !=='' && fromdatatwo.Specialization !=='' && fromdatatwo.StartYear !==0 && fromdatatwo.endYear !==0)?(setprocess({...process,third:true}),setemailverify(true)) : ''
        // (confirmPassword !=='' && emailnumber !=='')?(setprocess({...process,third:true})) : ''
        const userData={
          "email" : emailnumber,
        "username":"",
        "firstName":fromdata.fristname,
        "lastName":fromdata.lastName,
        "password": confirmPassword,
        "profilePictureUrl":"",
        "PhoneNumber":"",
        "location":fromdata.location,
        "bio":fromdatatwo.Specialization,
        "college":fromdatatwo.collage,
        "degree":fromdatatwo.degree,
        "startYear":fromdatatwo.StartYear,
        "endYear":fromdatatwo.endYear
        }
       
        mutation.mutate(userData);
        setformdatatwo({...fromdatatwo,validated:true})
      };
  const handleConfirmPasswordChange = (e:any) => {
    setConfirmPassword(e.target.value);
    setMatch(password === e.target.value);
  };
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
            {!emailverify  ?  <Card className='border-0 rounded-5 mt-3 ' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.100000000000000000) 100%)'}}>
   
    {!process.first && <div>
      <Form className="text-start" noValidate validated={validated} onSubmit={(e)=>handleSubmitOne(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="ps-2 mb-0 headingthird">Email or Phone Number</Form.Label>
        <Form.Control required type="text" value={ emailnumber} onChange={(e:any)=>setemailnumber(e.target.value)} placeholder="" />
        <Form.Control.Feedback type="invalid" className=" mb-1" >
           Please Enter Email or Phone Number
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label className="ps-2 mb-0 headingthird">Password (6+character)</Form.Label>
        <Form.Control required
         type="password"
          placeholder="Enter password"
          value={password}
          minLength={6}
          onChange={handlePasswordChange} />
        <Form.Control.Feedback type="invalid" className=" mb-1" >
           Enter Password
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label className="ps-2 mb-0 headingthird">Re-enter password</Form.Label>
        <Form.Control required 
        type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          minLength={6}
          onChange={handleConfirmPasswordChange} />
          <Form.Control.Feedback type="invalid" className=" mb-1" >
           Enter confirm Password
        </Form.Control.Feedback>
          {!match && (
        <p className="text-danger  headingthird">
          Your Password do not match
        </p>
      )}
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-end headingthird" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <div className="w-100 d-flex justify-content-center mt-3 mb-3">
      <Button variant="primary" type="submit"
      //  onClick={()=>handlesubmit('first')}
        className="headingthird" disabled={!match}>
        continue
      </Button>
      </div>
      </Form>
      </div>}
      
      {(process.first && !process.second) && <div><Form className="text-start" noValidate validated={validatedtwo} onSubmit={handleSubmittwo}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label className="ps-2 mb-0 headingthird">First Name</Form.Label>
        <Form.Control required type="text" value={fromdata.fristname} onChange={(e: React.ChangeEvent<any>)=>setformdata({...fromdata,fristname:e.target.value})} placeholder="" />
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter First Name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiclastName">
        <Form.Label className="ps-2 mb-0 headingthird">last Name</Form.Label>
        <Form.Control required type="text" placeholder="" value={fromdata.lastName} onChange={(e: React.ChangeEvent<any>)=>setformdata({...fromdata,lastName:e.target.value})}/>
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter last Name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiclocation">
        <Form.Label className="ps-2 mb-0 headingthird">Location</Form.Label>
        <Form.Control required type="text" placeholder="" value={fromdata.location} onChange={(e: React.ChangeEvent<any>)=>setformdata({...fromdata,location:e.target.value})}/>
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter Location
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex flex-row ms-2 align-items-center headingthird">
        <label>I am above 16 Years</label>
      <Form.Check 
        type="switch"
        id="custom-switch"
        className="fs-4 ms-3"
        checked={Boolean(fromdata.sixteenabove)} // Ensures it's always boolean
  onChange={() => setformdata((prev) => ({ ...prev, sixteenabove: !prev.sixteenabove }))}
      />
      </div>
      <div className="w-100 d-flex justify-content-center mt-3 mb-3 ">
      <Button variant="primary" type="submit" 
      // onClick={()=>handlesubmit('second')} \
      className="headingthird" disabled={!match}>
        continue
      </Button>
      </div></Form>
        </div>}
        {(process.first && process.second && !process.third) && <div><Form className="text-start" noValidate validated={fromdatatwo.validated} onSubmit={(e)=>handleSubmitthird(e)}>
          <Form.Group className="mb-3" controlId="formBasicCollege">
        <Form.Label className="ps-2 mb-0 headingthird">School or College/University</Form.Label>
        <Form.Control required type="text" value={fromdatatwo.collage} onChange={(e)=>setformdatatwo({...fromdatatwo,collage:e.target.value})} placeholder="" />
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter College/University name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDegree">
        <Form.Label className="ps-2 mb-0 headingthird">Degree</Form.Label>
        <Form.Control type="text" placeholder=""value={fromdatatwo.degree} onChange={(e)=>setformdatatwo({...fromdatatwo,degree:e.target.value})} />
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter College/University name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSpecialization">
        <Form.Label className="ps-2 mb-0 headingthird">Specialization</Form.Label>
        <Form.Control required type="text" placeholder="" value={fromdatatwo.Specialization} onChange={(e)=>setformdatatwo({...fromdatatwo,Specialization:e.target.value})}/>
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter Specialization
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex flex-row">
      <Form.Group className="mb-3 pe-3" controlId="formBasicSpecialization">
        <Form.Label className="ps-2 mb-0 headingthird">Start Year</Form.Label>
        <Form.Control required type="number" placeholder=""  value={fromdatatwo.StartYear} onChange={(e)=>setformdatatwo({...fromdatatwo,StartYear:Number(e.target.value)})}/>
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter Start Year
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 ps-3" controlId="formBasicSpecialization">
        <Form.Label className="ps-2 mb-0 headingthird">end Year</Form.Label>
        <Form.Control required type="number" placeholder="" value={fromdatatwo.endYear} onChange={(e)=>setformdatatwo({...fromdatatwo,endYear:Number(e.target.value)})}/>
        <Form.Control.Feedback type="invalid" className=" mb-1 " >
          Enter end Year
        </Form.Control.Feedback>
      </Form.Group>
      </div>
      <div className="d-flex flex-row ms-2 align-items-center headingthird ">
      <label>I’m a Student</label>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        className="fs-3 ms-3"
        
        checked={fromdatatwo.student} onChange={(e)=>setformdatatwo({...fromdatatwo,student:!fromdatatwo.student})}
      />
      </div>
      <div className="w-100 d-flex justify-content-center mt-3 mb-3">
      <Button variant="primary" type="submit"
      //  onClick={()=>handlesubmit('third')}
        className="headingthird" disabled={!match}>
        continue
      </Button>
      </div></Form>
          </div>} 
  
  <div className="line-container">
  <span className="left-line"></span>
  <span className="text headingthird">or with</span>
  <span className="right-line"></span>
</div>
  <p className="headingthird fw-light">By clicking Agree & join or continue, you agree to the Uniisphere User Agreement, Privacy Policy and Cookie Policy</p>
  <div className="w-100 d-flex justify-content-center">
  <button className="bg-white border headingthird" type="submit"><FcGoogle /> Google</button>
  </div>

  <div className="mt-4 headingthird"><p>Already on Uniisphere   <span className="text-primary">Sign in</span></p></div>
               </Card> : 
               <Card className='border-0 rounded-5 mt-3 text-start' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.100000000000000000) 100%)'
}}> <div><h3>Confirm your email</h3></div>
    <div><p className="fw-light">We have send a 6 digit verification code to 
    hr*********4322@gmail.com</p></div>
    <div className="d-flex row justify-content-around mt-4 mb-2">
      <input type="text" className="opt p-0 text-center  rounded-3 border-2 border-dark ms-1 me-1" style={{width:'35px',height:'35px'}} /><input type="text" className="  rounded-3 border-2 border-dark ms-1 me-1 opt p-0 text-center" style={{width:'35px',height:'35px'}} /><input type="text" className="  rounded-3 border-2 border-dark ms-1 me-1 opt p-0 text-center" style={{width:'35px',height:'35px'}} /><input type="text" className="  rounded-3 border-2 border-dark ms-1 me-1 opt p-0 text-center" style={{width:'35px',height:'35px'}} /><input type="text" className="  rounded-3 border-2 border-dark ms-1 me-1 opt p-0 text-center" style={{width:'35px',height:'35px'}}/><input type="text" className="  rounded-3 border-2 border-dark ms-1 me-1 opt p-0 text-center" style={{width:'35px',height:'35px'}}/>
    </div>
     <div className="row text-primary mb-4 headingthird">
      <div className="col text-start">Change email</div>
      <div className="col text-end">Resend Code</div>
    </div>
    <div className='row'>
      <h5>Your Privacy is important</h5>
      <div><p className="fw-light">
      We may send you
      member updates, recruiter message, job suggestions, invitations, reminder and promotional messages from us and our partners. You can change your preference anytime.</p></div>
    </div> 
 </Card>}
                </CardBody></Card>
        </Container>
        <div className="firstemptycontainer container"></div>
        <div className="secondemptycontainer container"></div>
        <ToastContainer />
    </React.Fragment>
 )
}
export default Register
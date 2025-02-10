import React, { useState } from "react";
import unilogo from '../../assets/uniisphearlogo.png'
// import { Button, Form, Alert } from "react-bootstrap";
import { interestlist, skilllist } from "./Formfield";
import { Container,Card,CardBody,Form ,Button,  Col, Row} from "react-bootstrap"
interface Errors {
  username?: string;
  Headline?: string;
  gender?: string;
  about?: string;
  skill?:string;
  interests?:string;
  work?: string;
}

const Aftermail: React.FC = () => {
  const [step, setStep] = useState<number>(1); 
  const [username, setusername] = useState<string>("");
  const [Headline, setHeadline] = useState<string>(""); 
  const [gender, setgender] = useState<string>("");
  const [about, setabout] = useState<string>("");
  const [skill,setskill] = useState<any[]>([])
  const [interests,setinterests] = useState<any[]>([])
  const [work, setwork] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({})

  // Function to validate the inputs
  const validate = (): boolean => {
    const errors: Errors = {};

    // Validation logic based on the current step
    if (step === 1 && !username) errors.username = "username is required!";
    if (step === 2 && !Headline) errors.Headline = "Headline is required!";
    if (step === 3 && !gender) errors.gender = "Gender is required!";
    if (step === 4 && !about) errors.about = "About is required!";
    if (step === 5 && !skill) errors.skill = "Skill is required";
    if (step === 6 && !interests) errors.interests = "Interests required";
    if (step === 7 && work) errors.work = "work/project is required!";
    setErrors(errors);

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1); // Proceed to next step
    }
  };

const handleCheckboxChange = (id: number, p0: string)=>{
// console.log()
if(p0 === "skill"){setskill((prevskill : number[] | any)=>{if(prevskill.includes(id)){return prevskill.filter((value:any) => value !== id)}else{if(prevskill.length< 3){return [...prevskill,id]}else{alert("You can only select up to 3 options.");return prevskill;}}})
}
else{setinterests((prevskill : number[] | any)=>{if(prevskill.includes(id)){return prevskill.filter((value:any) => value !== id)}else{if(prevskill.length< 5){return [...prevskill,id]}else{alert("You can only select up to 5 options.");return prevskill;}}})
}
}
  return (
    <React.Fragment>
      <div className="newroot">
        <nav className='d-flex justify-content-between  container-fluid align-items-center place-content-center' style={{placeContent:'center'}}>
        
        
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
    {/* <div className="container mt-5"> */}
    <Card className='border-0 headingthird w-100 rounded-5 mt-3 text-start' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.100000000000000000) 100%)'}}>
      
      <Form>
        {step === 1 && (
          <Col>
            <Form.Group controlId="formusername" className=" mb-5">
              <Form.Label className="mb-0 ms-2 ">Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                className="rounded-4"
                onChange={(e) => setusername(e.target.value)}
                placeholder=""
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="mt-5 mb-5" onClick={handleNext}>
              Continue
            </Button>
          </Col>
        )} 

        {/* Step 2 */}
        {step === 2 && (
          <Col>
            <Form.Group controlId="formHeadline " className="mb-5">
              <Form.Label className="mb-0 ms-2">Headline</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                value={Headline}
                className="border-1 rounded-4"
                onChange={(e) => setHeadline(e.target.value)}
                placeholder=""
                isInvalid={!!errors.Headline}
              />
              <Form.Control.Feedback type="invalid">
                {errors.Headline}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="mt-5 mb-5 rounded-5" onClick={handleNext}>
              continue
            </Button>
          </Col>
        )}
            
        {step === 3 && (
          <Col>
          
            <Form.Group controlId="formgender" className="mb-5">
              <Form.Label className="mb-0 ms-2">Gender</Form.Label>
              <Form.Control
                type="text"
                as="select"
                value={gender}
                className="rounded-4"
                onChange={(e) => setgender(e.target.value)}
                placeholder=""
                isInvalid={!!errors.gender}
              >
              <option value=''>select</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option></Form.Control>
              <Form.Control.Feedback type="invalid" >
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="mb-5 mt-5 roundec-5"  onClick={handleNext}>
              Continue
            </Button>
          </Col>
        )}
        {step === 4 && (
          <Col>
            <Form.Group controlId="formabout" className="mb-5">
              <Form.Label className="mb-0 ms-2">About</Form.Label>
              <Form.Control
                type="text"
                className="rounded-4"
                value={about}
                onChange={(e) => setabout(e.target.value)}
                placeholder=""
                
                isInvalid={!!errors.about}
              />
              <Form.Control.Feedback type="invalid">
                {errors.about}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="mb-5 mt-5 roundec-5" onClick={handleNext}>
              Continue
            </Button>
          </Col>
        )}
        {step === 5 && (
          <div>
            <Form.Group controlId="formabout" className="mb-5">
              <Form.Label className="mb-2 ms-2">skill*</Form.Label>
             <Row className="text-start">              {skilllist.map((skillist) =>{
              const {id,label,backcolor}=skillist;
              return (
                <Col key={skillist.id} sm={4}  md={4} className="col-4"> 
               <button key={skillist.id} type="button" className="rounded-5 border-0 fw-light w-100 ms-1 me-1 ps-0 pe-0 " style={{ display: "block", marginBottom: "5px" ,background:`${backcolor}`}}>
          <span className="badge badge-light ps-0 skills">
          
          <Form.Check 
        type="checkbox"
        className="text-dark"
        id="custom-checkbox"
        label={label}
        checked={skill.includes(id)}
        onChange={() => handleCheckboxChange(id,"skill")}
      />
          </span>
        </button>
        </Col>
              )
              })}
              <p>Select at least 3 Skills so we can build your connection in better ways</p>
              </Row>
              <Form.Control.Feedback type="invalid">
                {errors.skill}
              </Form.Control.Feedback>

            </Form.Group>
            
            <Button variant="primary" className="mb-5 roundec-5" onClick={handleNext}>
              Continue
            </Button>
          </div>
        )}
        {step === 6 && (
          <div>
            <Form.Group controlId="forminterests" className="mb-5">
              <Form.Label className="mb-2 ms-2">interests*</Form.Label>
              
              <Row className="text-start">              {interestlist.map((skillist) =>{
              const {id,label,backcolor}=skillist;
              return (
                <Col key={skillist.id} sm={4}  md={4} className="col-4"> 
               <button key={skillist.id} type="button" className="rounded-5 border-0 fw-light w-100 ms-1 me-1 ps-0 pe-0 " style={{ display: "block", marginBottom: "5px" ,background:`${backcolor}`}}>
          <span className="badge badge-light ps-0 skills">
          
          <Form.Check 
        type="checkbox"
        className="text-dark"
        id="custom-checkbox"
        label={label}
        checked={interests.includes(id)}
        onChange={() => handleCheckboxChange(id,"interests")}
      />
          </span>
        </button>
        </Col>
              )
              })}
              <p>Pick up to 5 things which you are interested. So that we can make your connection better</p>
              </Row>
              <Form.Control.Feedback type="invalid">
                {errors.interests}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="rounded-5 mt-5 mb-5" onClick={handleNext}>
              Continue
            </Button>
          </div>
        )}
        {step === 7 && (
          <div>
            <Form.Group controlId="formabout" className="mb-5">
              <Form.Label className="mb-0 ms-2">Work / Project</Form.Label>
              <Form.Control
                type="text"
                value={work}
                className="rounded-4"
                onChange={(e) => setwork(e.target.value)}
                placeholder=""
                isInvalid={!!errors.work}
              />
              <Form.Control.Feedback type="invalid">
                {errors.work}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className="rounded-5 mb-5 mt-5" onClick={handleNext}>
              Submit
            </Button>
          </div>
        )}
      </Form>
    </Card></CardBody></Card></Container></div></React.Fragment>
  );
};

export default Aftermail;

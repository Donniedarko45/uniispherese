import React, { useState } from "react"
import { HomeHeader } from "./Header/HomeHeader"
import { Button, Col,  Image, Row } from "react-bootstrap"
import Addicon from '../../assets/Photoroom.svg'
import { feedhome, leftsidefirst, leftsidesecond ,rightsidesecond} from "./Homedata"
import './Home.css'
import hhh from '../../assets/hh.png'
import proflicon from '../../assets/profile.png'
import heart from '../../assets/heart.svg'
import cloud from '../../assets/cloud.svg'
import arrowsign from '../../assets/arrowsign.svg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Homefooter } from "./Footer/Homefooter"
// import { SlArrowUp } from "react-icons/sl";
import { ReadMoreLess } from "../Common/ReadMoreLess"
// import {fsrightbg} from "../../assets/firstrightbg.svg"
function Home(){
    const [expandedStates, setExpandedStates] = useState<Record<number, boolean>>(
        {}
      );
      const toggleReadMore = (id: number) => {
        setExpandedStates((prevStates:any) => ({
          ...prevStates,
          [id]: !prevStates[id],
        }));
      };
return (
    <React.Fragment>
        <HomeHeader />
        <div className="homefirst"></div>
        <div className="homesecond"></div>
        <div className="homeThird"></div>
        <div className="homefour"></div>
        <div className="container h-100 p-0 m-auto  d-flex justify-content-center position-relative" style={{fontFamily:'Inter'}}>
            <Row className="w-100">
             <Col className="col-xl-3 mt-2 firstcol">
             <div className=" m-1 mt-0   w-100 border border-dark rounded-3 text-start p-2" style={{background:'linear-gradient(180deg, rgba(207, 232, 239, 0.2) 0%, rgba(201, 228, 202, 0.5) 100%)'}}>
              <div>
                <h5>Upcoming Events</h5>
              </div>
              {leftsidefirst.map((data,i)=>{
                return (
                    <div className="d-flex" key={i}>
              <div className="col-auto  col-md-3 col-sm-3 col-4 h-100 m-auto col">
                   <img src={Addicon} alt="..." className="h-100 w-100 m-auto rounded" />
              </div>
              <div className="col-md-9 m-auto col-sm-9 col-8  col">
                <div className="text-start p-0  bg-transparent card border-0">
                    <div className="pt-1 pb-1 card-body pe-0 ps-1">
                        <Row>
                            <p className="d-flex justify-content-between mt-0 flex-wrap mb-0 ">
                                <span className=" text-dark fw-bolder  "><small>{data.head}</small></span>

                                <span className="text-secondary fw-w300 "><small className="main-text">{data.count}</small></span>
                            </p>
                        </Row>
                        <Row>
                            <p className="font-w300 text-dark mb-0"><small>{data.description}</small></p>
                        </Row>
                    </div>
                </div>
                </div>
                </div>
                )
              })}
              <hr className="mt-1 m-0" />
              <button className="bg-transparent p-0 w-100  ">See All</button>
              </div>
             <div className=" w-100 border border-dark rounded-3 text-start p-2 m-1" style={{background:'linear-gradient(180deg, rgba(229, 190, 158, 0.2) 0%, rgba(244, 214, 204, 0.2) 100%)'}}>
             <div>
                <h5>Top News </h5>
              </div>
              {leftsidesecond.map((data)=>{
                return (
                    <div className="d-flex" key={data?.id}>
              <div className="col-auto  col-md-3 col-sm-3 col-4 h-100 mt-2 col">
                   <img src={Addicon} alt="..." className="h-100 w-100 m-auto rounded" />
              </div>
              <div className="col-md-9 m-auto col-sm-9 col-8  col">
                <div className="text-start p-0  bg-transparent card border-0">
                    <div className="pt-1 pb-1 card-body pe-0 ps-1">
                        <Row>
                            <p className="d-flex justify-content-between mt-0 flex-wrap mb-0 ">
                                <span className=" text-dark fw-bolder text-truncate"><small>{data?.head}</small></span>
                                <span className="text-secondary fw-light "><small>{data?.count}</small></span>
                            </p>
                        </Row>
                        <Row>
                            
                        <ReadMoreLess key={data?.id} id={Number(data?.id) || 0} text={data?.description || ''} maxLength={34} onToggle={toggleReadMore} expandedStates={expandedStates}/>
                            {/* <p className="font-w300 text-dark mb-0"><small className="main-text">{data?.description}</small></p> */}
                        </Row>
                    </div>
                </div>
                </div>
                </div>
                )
              })}
             </div>
             </Col>
             <Col className="col-xl-6  secondcol  overflow-auto">
             {feedhome.map((data,i )=>{
                return (
                    <div className=" w-100  border border-dark rounded-3 text-start p-2 mt-2 m-auto" style={{background:'linear-gradient(180deg, rgba(255, 109, 109, 0.05) 0%, rgba(85, 75, 231, 0.05) 100%)'}}>
                    <div className="h-100" key={i}>
                        <div className="d-flex">
              <div className="col-auto col" >
                   <img src={Addicon} alt="..." className="h-100 w-100 m-auto rounded" />
              </div>
              <div className=" m-auto col">
                <div className="text-start p-0  bg-transparent card border-0">
                    <div className="pt-1 pb-1 card-body pe-0 ps-1">
                        <Row>
                            <p className="d-flex justify-content-between mt-0 flex-wrap mb-0 ">
                                <span className=" text-dark fw-bolder text-truncate"><small>{data?.head}</small></span>
                                <span className="text-secondary fw-light "><small>{data?.count}</small></span>
                            </p>
                        </Row>
                        <Row>
                            <p className="font-w300 text-dark mb-0"><small className="main-text">{data?.description}</small></p>
                        </Row>
                    </div>
                     </div>
                     
                </div>
                <div  className="col-auto">
                    <Button variant="outline-light" className="border-dark border text-uppercase text-dark rounded-pill"><small><span className="text-primary">+</span> <span className="text-primary">C</span><span className="text-danger">o</span><span  className="text-warning">n</span><span className="text-secondary">n</span><span className="text-danger">e</span><span className="text-secondary">c</span><span className="text-danger">t</span></small></Button>
                    </div>
                </div>
                <Row className=" w-100 m-auto" >
                    <img  src={hhh} className="feedphoto m-auto p-0" ></img>
                </Row>
                <Row className="mt-2">
                    <Col className="d-flex"><BsThreeDotsVertical className="fs-3 h-auto " /> <Button variant="outline-light" className="border-dark border text-uppercase text-dark rounded-pill fw-bold p-2"><small><span className="text-primary">+</span> <span className="text-primary">C</span><span className="text-warning">o</span><span  className="text-danger">L</span><span style={{color:'purple'}}>L</span><span className="text-secondary">A</span><span className="text-success">B</span></small></Button></Col>
                    <Col className="text-end d-flex justify-content-end p-0 me-2">
                         <span className="btn btn-outline-light border-0 "><Image src={arrowsign}  style={{width:'55px',height:'30px'}}/></span>
                         <span className="btn btn-outline-light border-0"><Image src={cloud}  style={{width:'25px',height:'30px'}}/></span>
                         <span className="btn btn-outline-light border-0"><Image src={heart} style={{width:'25px',height:'30px'}}/></span>
                    </Col>
                </Row>
                <Row>
                
                    <p className="mb-0"><b>Vijay Prashad</b><ReadMoreLess key={data?.id} id={Number(data?.id) || 0} text={data?.content || ''} maxLength={50} onToggle={toggleReadMore} expandedStates={expandedStates}/></p>
                </Row>
                </div>
                </div>  
                )
              })}
                
                
             </Col>
             <Col className="col-xl-3 mt-1 thirdcol">
             <div className=" w-100 border border-dark rounded-3 text-start p-2 m-1" style={{background:'linear-gradient(180deg, rgba(229, 190, 158, 0.2) 0%, rgba(244, 214, 204, 0.2) 100%)'}}>
                 <Row className="mt-0">
                     <Col className="col-5 d-flex">
                        <img src={proflicon} alt="..." className=" m-auto rounded"style={{height:"80px",width:"80px"}} />
                     </Col>
                     <Col className="col-7">
                        <Row className="w-100 mt-3 text-center">
                            <Col>254</Col>
                             <Col>579</Col>
                        </Row>
                        <Row className="w-100 headingthird p-1 bg-dark rounded-pill">
                            <Col className="col-6 p-0 text-center">
                            <p className="bg-light p-0 m-0 pt-2 pb-2 rounded-pill rounded-end me-0 fw-bold" style={{fontSize:'10px'}}><small>Connect</small></p>
                            </Col>
                            <Col className="col-6 p-0 text-center">
                            <p className="bg-secondary p-0 m-0 pt-2 pb-2 text-white rounded-pill rounded-start ms-1 fw-bold" style={{fontSize:'10px'}}><small>Collaborate</small></p>
                            </Col>
                        </Row>
                     </Col>
                 </Row>
                 <Row>
                            <h5 className="mb-0">Rahul Verma</h5>
                            <h6 className="mb-0">Uniisphere</h6>
                            <p>New Delhi, Delhi</p>
                            <p className="fw-light">The actual idea of Uniisphere was of The Founder Himanshu who worked for months to this a all time</p>
                </Row>
                <Row>
                <h6 className="mb-0">Suggested</h6>

                </Row>
                {rightsidesecond.map((data )=>{
                return (
                    <div className="d-flex" key={data?.id}>
              <div className="col-auto  col-md-3 col-sm-3 col-4 h-100 mt-2 col">
                   <img src={Addicon} alt="..." className="h-100 w-100 m-auto rounded" />
              </div>
              <div className="col-md-9 d-flex m-auto col-sm-9 col-8  col">
                <div className="text-start p-0 col-6  d-flex bg-transparent card border-0">
                    <div className="pt-1 pb-1  pe-0 ps-1">
                        <Row>
                            <p className="d-flex justify-content-between mt-0 flex-wrap mb-0 ">
                                <span className=" text-dark fw-bolder text-truncate"><small>{data?.head}</small></span>
                                <span className="text-secondary fw-light "><small>{data?.count}</small></span>
                            </p>
                        </Row>
                        <Row>
                        <ReadMoreLess key={data?.id} id={Number(data?.id) || 0} text={data?.description || ''} maxLength={14} onToggle={toggleReadMore} expandedStates={expandedStates}/>
                            {/* <p className="font-w300 text-dark mb-0"><small className="main-text">{data?.description}</small></p> */}
                        </Row>
                    </div>
                    
                </div>
                
                        <Row className="col-6  headingthird p-1 bg-dark mt-4 rounded-pill" style={{height:'35px'}}>
                            <Col className="col-6 p-0 text-center">
                            <p className="bg-light p-0 m-0 pt-2 pb-2 rounded-pill rounded-end me-0 fw-bold" style={{fontSize:'6px'}}><small>Connect</small></p>
                            </Col>
                            <Col className="col-6 p-0 text-center">
                            <p className="bg-secondary p-0 m-0 pt-2 pb-2 text-white rounded-pill rounded-start ms-1 fw-bold" style={{fontSize:'6px'}}><small>Collaborate</small></p>
                            </Col>
                        </Row>
                </div>
                </div>
                )
              })}
             </div>
             </Col>
            </Row>
            <Row className="w-100 position-absolute">
               {/* {tabss.map(data=>{
                return <button key={data?.id}><span>{data.img &&<img alt='user-img' src={proflicon} className="home-logo border rounded-5"></img>}</span><span>{data.text}</span><span><SlArrowUp /></span></button>
               })}  */}
                
                
            </Row>
        </div>
        <Homefooter />
    </React.Fragment>
)
}
export default Home
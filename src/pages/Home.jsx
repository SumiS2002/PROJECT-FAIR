import { Link, useNavigate } from "react-router-dom"
import LandingImg from '../assets/admin.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from "../services/allAPI"


function Home() {
  const [homeProjects,setHomeProjects] = useState([])
  const navigate = useNavigate()
  const [loginStatus,setLoginStatus] = useState(false)
  console.log(homeProjects);

  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }

  },[])

  const handleProjects =()=>{
    if(loginStatus){
      navigate('/project')

    }else{
      toast.warning("Please Login to get full access to projects")
      

    }

  }

  const getHomeProjects = async()=>{
    try{
      const result = await getHomeProjectsAPI()
      console.log(result);
      if(result.status==200){
        setHomeProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    {/* landing part */}
    <div style={{minHeight:'100vh'}} className="w-100 d-flex justufy-content-center align-items-center rounded border border-light shadow">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-slack"></i>Project Fair</h1>
          <p style={{textAlign:"justify"}}>One Stop Destination foe all Software Development
           Projects. When User can add
           Manage their projects.As well as access all projects available in our 
           website...What yu waiting for!!!
          </p>
{  loginStatus ?
        <Link to={'/dashboard'} className="btn btn-warning">Manage Projects<i className="fa-solid fa-arrow-right"></i></Link>:

        <Link to={'/login'} className="btn btn-warning">Starts To Explore <i className="fa-solid fa-arrow-right"></i></Link>
}     
   </div>
        <div className="col-lg-6">
          <img className="img-fluid" src={LandingImg} alt="" />
        </div>
      </div>
    </div>
    </div>

    {/* projects part */}

    <div className="mt-5 text-center">
      <h1 className=" mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex">
       { homeProjects?.length>0 &&
       homeProjects?.map(project=>(
        <div key={project} className="me-5">
        <ProjectCard displayData={project} />
      </div>

       ))
        }   
      </div>
      </marquee>
      <button onClick={handleProjects} className="btn btn-link mt-3">Click Here To View More Project </button>
    </div>
    <hr/>

    {/* testimony */}

    <div className="d-flex  align-items-center mt-5 mb-5 flex-column">
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center align-items-center flex-column">
      <img width={'60px'} height={'60px'} className="rounded-circle img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0wjTBRZnnxXpV0Qai0QpeyTGofaRZI8wCNQ4mkwIkg&s" alt="" />    
      <span> Max Miller</span>  
 
      </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia exercitationem quo quis quod laboriosam corporis vel voluptas, saepe dolores adipisci nulla dolore perspiciatis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center align-items-center flex-column">
      <img width={'60px'} height={'60px'} className="rounded-circle img-fluid" src="https://cdn-icons-png.freepik.com/512/219/219988.png" alt="" />    
      <span>Renjith</span>  
 
      </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia exercitationem quo quis quod laboriosam corporis vel voluptas, saepe dolores adipisci nulla dolore perspiciatis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-center align-items-center flex-column">
      <img width={'60px'} height={'60px'} className="rounded-circle img-fluid" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />    
      <span>Anu Sree</span>  
 
      </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia exercitationem quo quis quod laboriosam corporis vel voluptas, saepe dolores adipisci nulla dolore perspiciatis.</p>
        </Card.Text>
      </Card.Body>
    </Card>

      </div>
    </div>
    <ToastContainer position="top-center" theme="colored" autoClose={3000} />

    </>
  )
}

export default Home
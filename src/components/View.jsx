import Edit from './Edit'
import Add from './Add'
import { useContext, useEffect, useState } from 'react'
import { getUserProjectsAPI, removeProjectAPI } from '../services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'

function View() {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [userProjects,setUserProjects] = useState([])
  console.log(userProjects);

  useEffect(()=>{
    getUserProjects()
  },[addResponse,editResponse])

  const getUserProjects = async()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    try{
      const result = await getUserProjectsAPI(reqHeader)
      console.log(result);
      if(result.status==200){
        setUserProjects(result.data)
      }

    }catch(err){
      console.log(err);
    }


  }
  const handleDeleteProject = async (projectId)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${token}`

      }
      //api call
      const result = await removeProjectAPI(projectId,reqHeader)
      if(result.status==200){
        getUserProjects()
      }else{
        console.log(result);
      }
    }
  }

  return (
    <>  
      <div className="d-flex justify-content-between w-100">
        <h2 className="text-warning">All Projects</h2>
        <button className="btn"><Add/></button>
      </div>
{ 
 userProjects?.length>0?
 userProjects?.map(project=>(
  <div key={project} className="mt-4">
  <div  className="d-flex justify-content-between border p-2 rounded mb-2">
    <h4>{project?.title}</h4>
    <div className="icons d-flex">
      <div > <Edit project={project}/> </div>
    <a className='btn' href={project?.github} target='_blank'><i className='fa-brands fa-github'></i></a>
    <button onClick={()=>handleDeleteProject(project?._id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
    </div>
  </div>
</div>

 ))
      :
      <div className='fw-bolder text-warning '> No Project uploaded Yet </div>
}  

 </>
  )
}

export default View
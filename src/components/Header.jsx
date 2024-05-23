import { useContext } from "react"
import { Navbar,Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { tokenAuthContext } from "../contexts/TokenAuth"


function Header({insideDasboard}) {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  
  const logout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')

  }
  return (
    <>
     <Navbar style={{zIndex:'1'}} className="card shadow top-0 position-fixed w-100">
        <Container>
          <Navbar.Brand href="#home">
            <Link style={{textDecoration:'none'}} className="fw-bolder" to={'/'}><i className="fa-brands fa-slack"></i>Project Fair
            </Link>
          </Navbar.Brand>
          {
            insideDasboard &&
            <div className="ms-auto">
              <button onClick={logout} className="btn btn-link">Logout <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header
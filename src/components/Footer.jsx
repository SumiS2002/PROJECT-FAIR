import { Link } from "react-router-dom"


function Footer() {
  return (
    <div style={{height:'300px'}} className="container mt-5 p-3 w-100 ">
        <div className="footer-content d-flex justify-content-evenly p-3 w-100">
            <div style={{width:'400px'}} className="media" >
                <h5 className="d-flex"><i className="fa-brands fa-slack"></i>Project Fair</h5>
                <p className="me-3" style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                <span className="me-5">Code licensed MIT,docs CC BY 3.0.</span>
                <span className="me-3">Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column" >
                <h5 className="d-flex" >Links</h5>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch</Link>

            </div>
            <div className="guides d-flex flex-column" >
            <h5 className="d-flex" >Guides</h5>
                <a href="https://react.dev/"  target="_blank" style={{textDecoration:'none',color:'white'}}>Recat JS</a>
                <a href="https://www.w3schools.com/react/react_router.asp"  target="_blank" style={{textDecoration:'none',color:'white'}}>React Routing</a>
                <a href="https://react-bootstrap.netlify.app/" target="_blank" style={{textDecoration:'none',color:'white'}}>Recat Bootstrap</a>

            </div>
            <div className="contact" >
                <h5>Contact Us</h5>
                <div className="d-flex">
                    <input type="text" className="form-control me-1" placeholder="Email Id Please" />
                    <button className="btn btn-info"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="icons d-flex justify-content-between mt-3">
                    <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github"></i></a>
                    <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-phone"></i></a>


                </div>

            </div>

        </div>
        <div>
            <p className="text-center mt-5">Copyright &copy; 2024 Media Player. Built with React.</p>
        </div>

    </div>
  )
}

export default Footer
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";

const Login = () => {
  const { login } = useContext(LoginContext);
  const history = useHistory()
  const [name, setName] = useState("")

  const handleOnSubmit = (e:any)=>{
      e.preventDefault()
      login(name)
      history.push('/list')
  }

  return (
   <>
      <h1 className="text-center mt-5">Inicio de sesión</h1>
      <form onSubmit={e=>handleOnSubmit(e)}>
        <div className="row d-flex align-content-center justify-content-center pt-5 pb-4">
          <div className="mb-3 col-4">
            <label htmlFor="name" className="form-label">
              Email address
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              value= {name}
              onChange = {e=>setName(e.target.value)}
            />
            <div className="d-grid gap-2 mx-auto">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
   </>
  );
};

export default Login;
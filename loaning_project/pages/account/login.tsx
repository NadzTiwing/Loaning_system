import { useEffect, useState } from "react";
const Login =() =>{
    const [user,setUser] =useState("");
    const [password, setPassword] = useState("");

    const onLogin = () =>{
        
    }
    
    return(
        <section className="login">
            <div className="container d-flex justify-content-center align-items-center ">
                <div className="row" style={{"marginTop":"8em"}}>
                    <div className="col-12 mt-3">
                        <h2 className="text-crimson">SIMPLE LOANING SYSTEM</h2>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="card login-card">
                            <div className="card-header bg-crimson"><strong><h4 className="text-white">SIGN IN</h4> </strong></div>
                            <div className="card-body row">
                                <div className="col-2">
                                    <label htmlFor="#userId">User ID:</label>
                                </div>
                                <div className="col-10">
                                    <input id="userId" type="text" className="form-control" value={user} onChange={(evt)=>setUser(evt.target.value)}/>
                                </div>
                                <div className="col-2 mt-3">
                                    <label htmlFor="#password">Password:</label>
                                </div>
                                <div className="col-10 mt-3">
                                    <input type="password" id="password" className="form-control" value={password} onChange={(evt)=>setPassword(evt.target.value)}/>
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-red float-end "
                                    onClick={()=>onLogin()}>LOGIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;
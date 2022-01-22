import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Login =() =>{
    const [user_id,setUser] =useState("");
    const [password, setPassword] = useState("");

    const onLogin = async()=>{
        const check = await fetch("api/account",{
            method:"POST",
            body:JSON.stringify({
                user: user_id,
                password: password,
                action: "authenticate"
            }),
            headers:{
                "Content-Type": "application/json"
            }
        });

        const result = await check.json();
        if(result.status === "success"){
            toast.info(result.isMatched);
            if(result.isMatched){
                if(result.accountId == 1){ //if admin redirect to admin page
                    window.location.href = "/admin";
                } else{ // redirect to the client page
                    
                }
            }
            else toast.error("Incorrect Password / Username");
        }
        //toast.info(result.msg);
    }
    // useEffect(()=>{
    //     Test();
    // })
    
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
                                    <input id="userId" type="text" className="form-control" value={user_id} onChange={(evt)=>setUser(evt.target.value)}/>
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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const AccountSettings = () => {
    const [userId, setUser] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [seeOldPass, setSeeOldPass] = useState(false);
    const [seeNewPass, setSeeNewPass] = useState(false);

    const onSave = async()=>{
        if(userId === "" || oldPassword === "" ||  newPassword === ""){
            toast.error("Please fill up all the fields");
        }else{ //save the account data
            const data = {
                user:userId,
                password: newPassword,
                action: "create"
            }
            const res = await fetch("/api/account",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });
            const resData = await res.json();
            if(resData.status === "success"){
                toast.success("Saved Successfully");
            }else{
                toast.error("Failed to save");
            }
        }
    }

    return(
        <section className="container my-5 mx-5">
            <h4>Set your Account Information: </h4>
            <div className="row mt-3">
                <div className="col-4">
                    <label htmlFor="user-id">User id:</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={userId} onChange={(evt)=>setUser(evt.target.value)} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <label htmlFor="password1">Old password:</label>
                </div>
                <div className="col">
                    <input type={(seeOldPass)?"text":"password"}  className="form-control" value={oldPassword} onChange={(evt)=>setOldPassword(evt.target.value)} />
                </div>
                <div className="col-1">
                    <button className="btn btn-sm btn-link" onClick={()=>setSeeOldPass(!seeOldPass)}><i className={(seeOldPass)?"fa fa-eye-slash text-crimson":"fa fa-eye text-crimson"}></i></button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4">
                    <label htmlFor="password2">New password:</label>
                </div>
                <div className="col">
                    <input type={(seeNewPass)?"text":"password"} className="form-control" value={newPassword} onChange={(evt)=>setNewPassword(evt.target.value)} />
                </div>
                <div className="col-1">
                    <button className="btn btn-sm btn-link" onClick={()=>setSeeNewPass(!seeNewPass)}><i className={(seeNewPass)?"fa fa-eye-slash text-crimson":"fa fa-eye text-crimson"}></i></button>
                </div>
            </div>
            <div className="row mt-5 float-end">
                <button className="btn btn-red " onClick={()=>onSave()}>Save Changes</button>
            </div>
        </section>
    );
}
export default AccountSettings;
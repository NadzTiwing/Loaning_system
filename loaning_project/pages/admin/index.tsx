import Image from "next/image";
import AccountSettings from "./AccountSettings";
import { useSession, signOut  } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
    // const [session, loading]:any = useSession();
    const { data: session, status } = useSession()
    //const { accessToken }:any = data;
    
    console.log(status);
    useEffect(()=>{
        if(status === "unauthenticated") window.location.href="/";
    },[status])

    const onLogout=()=>{
        if(confirm("Are you sure you want to leave this page?")){
            signOut({ callbackUrl: '/' });
        }
    }
    return(
    <section className="admin-section">
        
        <div className="d-flex align-items-start bg-peach">
            <aside className="nav flex-column nav-pills me-3 admin-sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="logo-section d-flex justify-content-center">
                    <Image src="/images/icon.png" width={100} height={80} blurDataURL="/images/icon.png"/>
                </div>
                <button className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</button>
                <button className="nav-link" id="v-pills-requests-tab" data-bs-toggle="pill" data-bs-target="#v-pills-requests" type="button" role="tab" aria-controls="v-pills-requests" aria-selected="false">Loan Requests</button>
                <button className="nav-link" id="v-pills-membership-tab" data-bs-toggle="pill" data-bs-target="#v-pills-membership" type="button" role="tab" aria-controls="v-pills-membership" aria-selected="false">Membership</button>
                <button className="nav-link" id="v-pills-payments-tab" data-bs-toggle="pill" data-bs-target="#v-pills-payments" type="button" role="tab" aria-controls="v-pills-payments" aria-selected="false">Payments</button>
                <button className="nav-link" id="v-pills-policy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-policy" type="button" role="tab" aria-controls="v-pills-policy" aria-selected="false">Lending Policy</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Account Settings</button>
                <hr className="divider bg-peach" />
                <button className="nav-link"  onClick={()=>onLogout()}>Log out</button>
            </aside>
        <div className="tab-content " id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">dashboard</div>
            <div className="tab-pane fade" id="v-pills-requests" role="tabpanel" aria-labelledby="v-pills-requests-tab">requests</div>
                <div className="tab-pane fade" id="v-pills-membership" role="tabpanel" aria-labelledby="v-pills-membership-tab">membership</div>
                <div className="tab-pane fade" id="v-pills-payments" role="tabpanel" aria-labelledby="v-pills-payments-tab">bayaran</div>
                <div className="tab-pane fade" id="v-pills-policy" role="tabpanel" aria-labelledby="v-pills-policy-tab">policy</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <AccountSettings/>
                </div>
            </div>
        </div>
    </section>);
}
export default Index;
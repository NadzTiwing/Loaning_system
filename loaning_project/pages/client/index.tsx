import Image from "next/image";
const Index = () => {
    const onLogout=()=>{
        if(confirm("Are you sure you want to leave this page?")){
            window.location.href="/"; //return to login page
        }
    }
    return(
    <section className="client-section">
        
        <div className="d-flex align-items-start ">
            <aside className="nav flex-column nav-pills me-3 user-sidebar bg-dark" id="v-pills-tab-2" role="tablist" aria-orientation="vertical">
                <div className="logo-section d-flex justify-content-center">
                    <Image src="/images/icon.png" width={100} height={80} blurDataURL="/images/icon.png"/>
                </div>
                <button className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</button>
                <button className="nav-link" id="v-pills-apply-tab" data-bs-toggle="pill" data-bs-target="#v-pills-apply" type="button" role="tab" aria-controls="v-pills-apply" aria-selected="false">Loan Application</button>
                <button className="nav-link" id="v-pills-schedule-tab" data-bs-toggle="pill" data-bs-target="#v-pills-schedule" type="button" role="tab" aria-controls="v-pills-schedule" aria-selected="false">Amortization Schedule</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Account Settings</button>
                <hr className="divider bg-peach" />
                <button className="nav-link"  onClick={()=>onLogout()}>Log out</button>
            </aside>
        <div className="tab-content " id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">dashboard</div>
            <div className="tab-pane fade" id="v-pills-apply" role="tabpanel" aria-labelledby="v-pills-apply-tab">Loan application</div>
                <div className="tab-pane fade" id="v-pills-schedule" role="tabpanel" aria-labelledby="v-pills-schedule-tab">Loan schedule</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    account settings
                </div>
            </div>
        </div>
    </section>);
}
export default Index;
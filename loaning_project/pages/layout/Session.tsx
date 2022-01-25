interface IProps{
    session:any
}
const Session = (props:IProps)=>{
    const session = props.session;
    if(!session){
        return(
            <div className="d-flex justify-content-center m-5 mx-auto my-auto">
                <button className="btn btn-link btn-large text-center m-5" onClick={()=>{window.location.href="/"}}>Go to login</button>
            </div>
        )
    }
}
export default Session;
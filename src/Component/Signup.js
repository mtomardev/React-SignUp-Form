import React, {useState} from "react";

const Signup = () =>{
    let[fname, setFname] = useState("")
    let[email, setEmail] = useState("")
    let[password, setPassword] = useState("")
    let[cpassword, setCPassword] = useState("")
    let [err, setErr] = useState("")
    let[sucmsg, setSucmsg] = useState("")

    function validation(e){
        e.preventDefault();

        // if(!fname || !email || !password || !cpassword ){
        //     setErr("All fields are mendatary")
        //     setSucmsg("")
        // }
        // if(fname == ""){
        //     setErr("Please Enter Full Name ")
        //     setSucmsg("")
        // }

        // if(email =="" || !email.includes("@")){
        //     setErr("Error: Please Enter valid Email Address")
        //     setSucmsg("")
        // }

        // if(password ==""){
        //     setErr("Error: Please Enter Password ")
        //     setSucmsg("")
        // }

        // if(cpassword =="" ){
        //     setErr("Error: Please Enter Confirm Password ")
        //     setSucmsg("")
        // }
        // if(password != cpassword){
        //     setErr("Error: Confirm Password not match ")
        //     setSucmsg("")
        // }


        if (!fname && !email && !password && !cpassword) {
            setErr("Please Enter valid details in all fields before signup");
            setSucmsg("");
            return;
          }
      
          if (fname === "" || !fname.includes(" ")) {
            setErr("Full Name is Required");
            setSucmsg("");
            return;
          }
      
          if (email === "" || !email.includes("@")) {
            setErr("Valid Email is Required");
            setSucmsg("");
            return;
          }
      
          if (password === "" || password.length !== 6) {
            setErr("Password should have at least 6 characters");
            setSucmsg("");
            return;
          }
      
          if (cpassword !== password) {
            setErr(
              `Password Mismatch. Please Enter same password in 'Confirm Password' field.`
            );
            setSucmsg("");
            return;
          }
          
        else{
            setErr("")
            setSucmsg("Successfull Signed UP!")
            setFname("")
            setEmail("")
            setPassword("")
            setCPassword("")

        }

    }

    return(
        <div>
            
            <form typeof="get">
                <h1>Signup</h1>
                <input placeholder="Full Name" type="text" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
                <input placeholder="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input placeholder="Password" type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <input placeholder="Confirm Password" value={cpassword} type="text" onChange={(e)=>setCPassword(e.target.value)}></input>
                <p className="error">{err}</p>
                <p className="success">{sucmsg}</p>
                <button onClick={validation}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup

import { useState } from "react";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import axios from "axios";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  return (
    <>
      <div>
        <div>
          <div>
            <Inputbox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              label={"FirstName"}
              placeholder={"Jon"}
            />
            <Inputbox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"LastName"}
              placeholder={"Doe"}
            />

            <Inputbox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder={"12345678"}
            />

            <Inputbox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label={"Email"}
              placeholder={"Jon@gmail.com"}
            />

            <Inputbox
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              label={"Mobile No."}
              placeholder={"9876543210"}
            />

            <Inputbox
              onChange={(e) => {
                setDob(e.target.value);
              }}
              label={"Date of Birth"}
              placeholder={"09-02-24"}
            />
            <div>
            <Button onClick={async()=>{
                try{
                    await axios.post("http://localhost:3000/api/v1/user/signup", {
                    firstName,
                    lastName,
                    password,
                    email,
                    mobile,
                    dob
                    
                    
                  });
                }catch(error){
                    console.log(error);
                }
                
            }} label={"Sign Up"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

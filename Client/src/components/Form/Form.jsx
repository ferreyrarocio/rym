import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css";

const Form = ({login}) => {
  
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validation({...userData,[event.target.name]: event.target.value }))
    setUserData({ ...userData,[event.target.name]: event.target.value,})
};


const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData)
};  



return (
  <form onSubmit={handleSubmit} className={style.mainContainer}>
    <div>

    <img className={style.logo}src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"></img>
     <hr/>
      <label htmlFor="email">Email:</label>
      <input
        onChange={handleChange}
        value={userData.email}
        type="text"
        name="email"
      />
      <p>{errors.email}</p>
    
      <label htmlFor="password">Password:</label>
      <input
        onChange={handleChange}
        value={userData.password}
        type="password"
        name="password"
      />
      <p>{errors.p}</p>
    
      <button onClick={handleSubmit} 
       type="submit">LOGIN</button>
       
    </div>
  </form>
);


};

export default Form;

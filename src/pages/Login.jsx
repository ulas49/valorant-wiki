import {useState,useContext} from 'react'
import Google from '../Assets/img/google.png'
import Facebook from '../Assets/img/facebook.png'
import Github from '../Assets/img/github.png'
import {useNavigate,Link} from 'react-router-dom'
import { AppLevelContext } from '../context/AppLevelContext'
import { useAuth } from '../context/AuthContext'

export default function Login() {

 
    const {user,setUser} = useAuth()
    const history = useNavigate()

    


    const [values, setValues] = useState({ 
        email: "",
        password: ""
    
      });
    
      const [data,setData]=useState([]);

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      
      };


    const addData=(e)=>{
        e.preventDefault();
        
        const getUserArr=localStorage.getItem("user")
        console.log(getUserArr);
        const {email,password} = values


             if(!email){
            alert('email field  required!')
        }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            alert('email is invalid')
        }else if (!password){
            alert('password field is required')
        }else if(!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i.test(password)){
            alert('password is invalid')
        }else{
            
            if(getUserArr && getUserArr.length){
                const userData = JSON.parse(getUserArr)
                const userLogin = userData.filter((el,k)=>{
                    return el.email === email && el.password === password
                });

               if(userLogin.length===0){
                alert("invalid login")
               }else{
                console.log("user login succesfully");

            
                
               localStorage.setItem("user_login",JSON.stringify(userLogin))
                setUser(true)
              
              
               history("/details")
               
               }

            }
           
           
        }

      }







  return (
    <div className="login">
    <h1 className="loginTitle">Choose a Login Method</h1>
    <div className="wrapper">
      <div className="left">
        <div className="loginButton google" >
        <img src={Google} alt="" className="icon" />
          Google
        </div>
        <div className="loginButton facebook" >
        <img src={Facebook} alt="" className="icon" />
          Facebook
        </div>
        <div className="loginButton github" >
        <img src={Github} alt="" className="icon" />
          Github
        </div>
      </div>
      <div className="center">
        <div className="line" />
        <div className="or">OR</div>
      </div>
      <div className="right">
        <input className='loginInput' type="email"  placeholder="Email" name= "email" onChange={onChange} />
        <input className='loginInput' type="password" placeholder="Password" name= "password" onChange={onChange} />
        <button className="submit"  onClick={addData}>Login</button>
        <p className='regP'>If you dont have an Account <Link to='/' className='register' >Register</Link> </p>


      </div>
    </div>
  </div>
  )
}

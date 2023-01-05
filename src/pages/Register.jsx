import {useState} from 'react'
import FormInput from '../components/Form/FormInput';
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'




export default function Register() {
   
  const history123 = useNavigate()

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
    
      const [data,setData]=useState([]);


      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];

      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      
      };
    
      const addData=(e)=>{
        e.preventDefault();
        
        const {username,email,password,confirmPassword} = values

        if(!username.trim()){
            alert('username field is required!')
        }else if(!/^[A-Za-z0-9]{3,16}$/i.test(username)){
            alert('username is invalid')
        }else if(!email){
            alert('email field  required!')
        }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            alert('email is invalid')
        }else if (!password){
            alert('password field is required')
        }else if(!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i.test(password)){
            alert('password is invalid')
        }else if(!confirmPassword){
            alert('Confirm Password is required')
        }else if(password!==confirmPassword){
            alert('passwords do not match!')
        }else{
            console.log('data added succesfully!')

            let logins;
                
          
             if(localStorage.getItem("user")===null){
              logins=[]
             }else{
              logins=JSON.parse(localStorage.getItem("user"))
             }
             logins.push(values)
             localStorage.setItem("user",JSON.stringify(logins))


           /* localStorage.setItem("user",JSON.stringify([...data,values])); */
          // alert("succesfully submitted")
            toast.success('succesfully submitted',{
              autoClose: 3000,

            })
           history123("/login")

        }

       

      }


    return (
        <>
        
<div className="registerDiv">
      <form  className='registerForm' onSubmit={handleSubmit}>
        <h1 className='registerH1'>Register</h1>
        {inputs.map((input) => (
          <FormInput
            
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='registerButton' onClick={addData} >Submit</button>
        <p>Already Have an Account <Link to='/login' className='sign' >Sign in</Link> </p>
      </form>
      
    </div>

        </>
    )
}
import { useState } from "react";


const StatefullForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
      
        if(password.length < 6){
            setError('password must be six characters')
        }
        else{
            setError('');
            console.log(name, email, password);
        }
     
        
    }

    const handleName = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleName}
                type="text" name="name" />
                <br />
                <input 
                    onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <input
                    onChange={handlePassword}
                type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;
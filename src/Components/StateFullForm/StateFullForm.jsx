import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleFullFromSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 characters longer");
        } else {
            setError("");
            console.log(name, email, password)

        }
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleFullFromSubmit}>

                <input onChange={handleNameChange} type="text" name="name" id="" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input
                    onChange={handlePasswordChange} type="password" name="password" id="" required />
                <br />
                <button>Submit</button>
                {
                    error && <p>{error}</p>
                }

            </form>
        </div>
    );
};

export default StateFullForm;
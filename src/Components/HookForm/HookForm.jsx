import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState("enan")
    const emailState = useInputState("enan@gmail.com")
    const handleSubmit = e => {
        console.log("form data", emailState.value)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <button>Submit</button>

            </form>
        </div>
    );
};

export default HookForm;
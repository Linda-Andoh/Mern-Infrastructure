import { useState } from "react"

export default function SignUpForm (props) {

 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
 });

const [disable, setDisable] = useState(formData.password !== formData.confirm)

const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
}

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
    // setDisable(formData.password !== formData.confirm);
}

    return (
        <>
         <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                />
                <label htmlFor="email">Email:</label>
                <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                />

                <label htmlFor="password">Password:</label>
                <input
                 type="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 required
                />

                <label htmlFor="confirm">Confirm:</label>
                <input
                 type="password"
                 name="confirm"
                 value={formData.confirm}
                 onChange={handleChange}
                 required
                />
                <button type="submit" disable={disable}>SIGN UP</button>
          </form>
        </div>        

        </>
    )
}
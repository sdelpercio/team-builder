import React, {useState} from 'react';

function Form({addTeamMember}) {
    // Setting up state for inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    })

    // A function to move inputs into the form state on change
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log('form data', formData);
    }

    // A function to submit form data and add to team
    function submitForm(e) {
        e.preventDefault();
        console.log(formData);
        addTeamMember(formData);
        setFormData({
            name: '',
            email: '',
            role: ''
        });
    }
    
    return (
        <form onSubmit={submitForm}>
            <label>Name :{' '}
                <input 
                    type='text' 
                    name='name'
                    value={formData.name} 
                    onChange={handleChange}
                />
            </label>
            <label>Email :{' '} 
                <input 
                    type='email' 
                    name='email'
                    value={formData.email} 
                    onChange={handleChange}
                />
            </label>
            <label>Role :{' '} 
                <select name='role' value={formData.role} onChange={handleChange}>
                    <option />
                    <option>Front-end Developer</option>
                    <option>Back-end Developer</option>
                    <option>UX Developer</option>
                    <option>Mobile Developer</option>
                </select>
            </label>
            <button type='submit'>Add Member</button>
        </form>
    )
  }
  
  export default Form;
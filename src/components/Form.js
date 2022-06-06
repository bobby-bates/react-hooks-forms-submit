import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  const handleFirstNameChange = event => setFirstName(event.target.value)
  const handleLastNameChange = event => setLastName(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName }
      const dataArray = [...submittedData, formData]
      setSubmittedData(dataArray)
      setFirstName('')
      setLastName('')
      setErrors([])
    } else setErrors(['First name is required!'])
  }

  const listOfSubmissions = submittedData.map((data, i) => {
    return (
      <div key={i}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, i) => (
          <p key={i} style={{ color: 'red' }}>{error}</p>
        ))
        : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </>
  );
}

export default Form;

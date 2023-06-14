import { useState } from "react";

function FormTicket() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> FormTicket </h1>
        <label>
          Último nome: <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Primeiro nome: <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>
          Certo <b>{fullName}</b>
        </p>
      </div>
    </>
  );
}

export default FormTicket;
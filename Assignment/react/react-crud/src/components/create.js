import React, { Fragment, useState } from "react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [dateOfRegistration, setDateOfRegistration] = useState("");
  const [matriculationNumber, setMatriculationNumber] = useState("");
  const [clinicDate, setClinicDate] = useState("");
  const [natureOfAilment, setNatureOfAilment] = useState("");
  const [medicinePrescribed, setMedicinePrescribed] = useState("");
  const [procedureUndertaken, setProcedureUndertaken] = useState("");
  const [dateOfNextAppointment, setDateOfNextAppointment] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // Create a new patient
      const patientBody = {
        firstName,
        surName,
        middleName,
        dateOfBirth,
        homeAddress,
        dateOfRegistration,
        matriculationNumber,
      };
      const patientResponse = await fetch("http://localhost:3001/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientBody),
      });
      const patientData = await patientResponse.json();
      const patientId = patientData.id;

      // Create a new clinic record
      const clinicRecordBody = {
        clinicDate,
        natureOfAilment,
        medicinePrescribed,
        procedureUndertaken,
        dateOfNextAppointment,
        patientId,
      };
      await fetch("http://localhost:3001/clinic-records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clinicRecordBody),
      });

      // Refresh the table to reflect the updated data
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
       <h1 className="text-center mt-5">PATIENT DATA</h1>
      <form className="container" onSubmit={onSubmitForm}>
        {/* Patient Information */}
        <div className="form-group">
          <h2>Patient Information</h2>
          <p>
            <input
              type="text"
              className="form-control"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={surName}
              placeholder="Surname"
              onChange={(e) => setSurName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={middleName}
              placeholder="Middle Name"
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </p>
          <p>
            <input
              type="date"
              className="form-control"
              value={dateOfBirth}
              placeholder="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={homeAddress}
              placeholder="Address"
              onChange={(e) => setHomeAddress(e.target.value)}
            />
          </p>
          <p>
            <input
              type="date"
              className="form-control"
              value={dateOfRegistration}
              placeholder="Date of Registration"
              onChange={(e) => setDateOfRegistration(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={matriculationNumber}
              placeholder="Matriculation Number"
              onChange={(e) => setMatriculationNumber(e.target.value)}
            />
          </p>
        </div>

        {/* Clinic Record Information */}
        <div className="form-group">
          <h2>Clinic Record Information</h2>
          <p>
            <input
              type="date"
              className="form-control"
              value={clinicDate}
              placeholder="Clinic Date"
              onChange={(e) => setClinicDate(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={natureOfAilment}
              placeholder="Nature of Ailment"
              onChange={(e) => setNatureOfAilment(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={medicinePrescribed}
              placeholder="Medicine Prescribed"
              onChange={(e) => setMedicinePrescribed(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              className="form-control"
              value={procedureUndertaken}
              placeholder="Procedure Undertaken"
              onChange={(e) => setProcedureUndertaken(e.target.value)}
            />
          </p>
          <p>
            <input
              type="date"
              className="form-control"
              value={dateOfNextAppointment}
              placeholder="Date of Next Appointment"
              onChange={(e) => setDateOfNextAppointment(e.target.value)}
            />
          </p>
        </div>

        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default Create;

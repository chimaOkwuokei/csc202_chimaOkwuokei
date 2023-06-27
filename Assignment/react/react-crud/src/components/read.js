import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import UpdatePatient from "./updatePatient";
import UpdateClinicRecord from "./updateClinicRecord.js";

const Read = () => {
  const [patients, setPatients] = useState([]);
  const [clinicRecords, setClinicRecords] = useState([]);

  const getPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3001/patients");
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClinicRecords = async () => {
    try {
      const response = await axios.get("http://localhost:3001/clinic-records");
      setClinicRecords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/patients/${id}`);
      setPatients(patients.filter((patient) => patient.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClinicRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/clinic-records/${id}`);
      setClinicRecords(clinicRecords.filter((record) => record.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updatePatient = async (updatedPatient) => {
    try {
      await axios.put(
        `http://localhost:3001/patients/${updatedPatient.id}`,
        updatedPatient
      );
      setPatients((prevPatients) =>
        prevPatients.map((patient) =>
          patient.id === updatedPatient.id ? updatedPatient : patient
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateClinicRecord = async (updatedRecord) => {
    try {
      await axios.put(
        `http://localhost:3001/clinic-records/${updatedRecord.id}`,
        updatedRecord
      );
      setClinicRecords((prevRecords) =>
        prevRecords.map((record) =>
          record.id === updatedRecord.id ? updatedRecord : record
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPatients();
    getClinicRecords();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center mt-5">PATIENT DATA</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Middle Name</th>
            <th>Date of Birth</th>
            <th>Date of Registration</th>
            <th>Home Address</th>
            <th>Matriculation Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.firstName}</td>
              <td>{patient.surName}</td>
              <td>{patient.middleName}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.dateOfRegistration}</td>
              <td>{patient.homeAddress}</td>
              <td>{patient.matriculationNumber}</td>
              <td>
                <UpdatePatient patient={patient} onUpdate={updatePatient} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePatient(patient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-center mt-5">CLINIC RECORDS</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Clinic Date</th>
            <th>Nature of Ailment</th>
            <th>Medicine Prescribed</th>
            <th>Procedure Undertaken</th>
            <th>Date of Next Appointment</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clinicRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.clinicDate}</td>
              <td>{record.natureOfAilment}</td>
              <td>{record.medicinePrescribed}</td>
              <td>{record.procedureUndertaken}</td>
              <td>{record.dateOfNextAppointment}</td>
              <td>
                <UpdateClinicRecord
                  record={record}
                  onUpdate={updateClinicRecord}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClinicRecord(record.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Read;

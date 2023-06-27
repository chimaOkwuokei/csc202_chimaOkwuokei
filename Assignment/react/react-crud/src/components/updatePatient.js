import React, { Fragment, useState } from "react";

const UpdatePatient = ({ patient, onUpdate }) => {
  const [updatedPatient, setUpdatedPatient] = useState(patient);

  const updatePatient = () => {
    onUpdate(updatedPatient);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${patient.id}`}
      >
        Update
      </button>

      <div className="modal" id={`id${patient.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Update Patient</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setUpdatedPatient(patient)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={updatedPatient.firstName}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    firstName: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedPatient.surName}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    surName: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedPatient.middleName}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    middleName: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="form-control"
                value={updatedPatient.dateOfBirth}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    dateOfBirth: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedPatient.homeAddress}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    homeAddress: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="form-control"
                value={updatedPatient.dateOfRegistration}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    dateOfRegistration: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedPatient.matriculationNumber}
                onChange={(e) =>
                  setUpdatedPatient({
                    ...updatedPatient,
                    matriculationNumber: e.target.value,
                  })
                }
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updatePatient}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setUpdatedPatient(patient)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePatient;

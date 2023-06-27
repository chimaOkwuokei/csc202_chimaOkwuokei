import React, { Fragment, useState } from "react";

const UpdateClinicRecord = ({ record, onUpdate }) => {
  const [updatedRecord, setUpdatedRecord] = useState(record);

  const updateRecord = () => {
    onUpdate(updatedRecord);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${record.id}`}
      >
        Update
      </button>

      <div className="modal" id={`id${record.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Update Clinic Record</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setUpdatedRecord(record)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={updatedRecord.patientId}
                onChange={(e) =>
                  setUpdatedRecord({
                    ...updatedRecord,
                    patientId: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="form-control"
                value={updatedRecord.clinicDate}
                onChange={(e) =>
                  setUpdatedRecord({
                    ...updatedRecord,
                    clinicDate: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedRecord.natureOfAilment}
                onChange={(e) =>
                  setUpdatedRecord({
                    ...updatedRecord,
                    natureOfAilment: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedRecord.medicinePrescribed}
                onChange={(e) =>
                  setUpdatedRecord({
                    ...updatedRecord,
                    medicinePrescribed: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedRecord.procedureUndertaken}
                onChange={(e) =>
                  setUpdatedRecord({
                    ...updatedRecord,
                    procedureUndertaken: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="form-control"
                value={updatedRecord.dateOfNextAppointment}
                onChange={(e) =>
                  setUpdatedRecord({
                    ...updatedRecord,
                    dateOfNextAppointment: e.target.value,
                  })
                }
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateRecord}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setUpdatedRecord(record)}
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

export default UpdateClinicRecord;

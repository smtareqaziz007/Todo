import React, { useState, useEffect } from "react";
import { uid } from "uid";
import { Input } from "./Input";
import { Select } from "./Select";
import { Modal } from "./Modal";
import { BsPencil } from 'react-icons/bs';

export const TodoForm = ({ submitNote, defaultNote, label }) => {
  const [note, setNote] = useState({});
  const [resetCounter, setResetCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => reset(), []);

  const reset = () => {
    // console.log(`default note : ${defaultNote}`)
    setNote(
      defaultNote
        ? defaultNote
        : {
            id: uid(),
            title: "",
            desc: "",
            priority: "High",
            status: "Pending"
          }
    );
    setResetCounter(resetCounter + 1);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // if (!note.title || !note.desc) {
    //   alert("Please fill in all fields");
    //   return;
    // }
    submitNote(note);
    reset();
    setShowModal(false);
  };

  const btnAdd = "btn btn-dark d-flex justify-content-center align-items-center";
  const btnUpdate = "btn btn-primary";
  let btnStyle = "";

  label === "+ Add Note" ? btnStyle = btnAdd : btnStyle = btnUpdate;

  return (
    <>
      <button className={btnStyle} onClick={() => {setShowModal(true);reset()}}>
        {label === "+ Add Note" ? label : <BsPencil/>}
      </button>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <form>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Title</label>
            <div className="col-sm-9">
              <Input
                fieldName="title"
                onChangeHandler={onChangeHandler}
                defaultValue={note.title}
                resetCounter={resetCounter}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Details</label>
            <div className="col-sm-9">
              <Input
                fieldName="desc"
                onChangeHandler={onChangeHandler}
                defaultValue={note.desc}
                resetCounter={resetCounter}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Priority</label>
            <div className="col-sm-9">
              <Select
                fieldName="priority"
                defaultValue={note.priority}
                onChange={onChangeHandler}
                options={["High" , "Medium" , "Low"]}
                resetCounter={resetCounter}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Status</label>
            <div className="col-sm-9">
              <Select
                fieldName="status"
                defaultValue={note.status}
                onChange={onChangeHandler}
                options={["Pending", "InProgress", "Done", "Failed"]}
                resetCounter={resetCounter}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-9 offset-sm-3">
              <button className="btn btn-primary me-2" onClick={submit}>Submit</button>
              <button className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                reset();
              }}>
                Clear
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import FormPopup from './FormPop';

const StudentForm = ({ handleSubmit, initialValues, popUp }) => {
    const [formData, setFormData] = useState(initialValues || {});
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setFormData(initialValues || {});
        setShowPopup(popUp);
    }, [initialValues]);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        if (Object.keys(formData).length === 0) {
            alert('Form data is empty. Please fill out the form.');
        } else {
            handleSubmit(formData);
            setShowPopup(false);
        }
    };
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div >
            <div className="d-flex align-items-center justify-content-center">
                <h5 className="text-center">Students score and other details</h5>
                <button className="btn btn-primary ms-auto" onClick={togglePopup} style={{margin:"1%"}}>
                    Add Score
                </button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <FormPopup show={showPopup} handleClose={togglePopup}>
                    <form onSubmit={submitForm} >
                        <label className="form-label">

                            <input className="form-control " id="exampleFormControlInput1" placeholder="Name" type="text" name="name" value={formData.name || ''} onChange={handleChange} required />
                        </label>
                        <br />
                        <label className="form-label">

                            <input className="form-control" id="exampleFormControlInput1" placeholder="Address" type="text" name="address" value={formData.address || ''} onChange={handleChange} required />
                        </label>
                        <br />
                        <label className="form-label">

                            <input className="form-control" id="exampleFormControlInput1" placeholder="City" type="text" name="city" value={formData.city || ''} onChange={handleChange} required />
                        </label>
                        <br />
                        <label className="form-label">

                            <input className="form-control" id="exampleFormControlInput1" placeholder="country" type="text" name="country" value={formData.country || ''} onChange={handleChange} required />
                        </label>
                        <br />
                        <label className="form-label">

                            <input className="form-control" id="exampleFormControlInput1" placeholder="pincode" type="number" name="pincode" value={formData.pincode || ''} onChange={handleChange} required />
                        </label>
                        <br />
                        <label className="form-label">

                            <input className="form-control" id="exampleFormControlInput1" placeholder="Score" type="number" max={1600} name="score" value={formData.score || ''} onChange={handleChange} required />
                        </label>
                        <br />
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </FormPopup>
            </div>
        </div>
    );
};

export default StudentForm;

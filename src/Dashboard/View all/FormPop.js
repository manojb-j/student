import React from 'react';
import "./style.css"
const FormPopup = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'popup display-block' : 'popup display-none';

    return (
        <div className={showHideClassName}>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <section className="popup-main container-fluid p-4"
                style={{ 
                    background: 'rgba(255, 255, 255, 0.6)', // Translucent white background
                    backdropFilter: 'blur(5px)', // Adjust the blur amount as needed
                    borderRadius: '10px', // Rounded corners for the glassmorphism effect
                    padding: '20px', // Optional padding
                    width:"40%",
                    height:"80%"
                  }}
                >
                    <button onClick={handleClose} className='btn-close' style={{ marginLeft: '90%' }}></button>
                    <div className="d-flex align-items-center justify-content-center">
                        <h4>Add new students details</h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        {children}
                    </div>
                </section>
            </div>
        </div>

    );
};

export default FormPopup;

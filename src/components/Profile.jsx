// src/components/Profile.js
import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = ({ user, setUser }) => {
    const [email, setEmail] = useState(user.email || '');

    // Handle profile update
    const handleUpdate = (e) => {
        e.preventDefault();
        setUser({ email });
        alert('Profile updated!');
    };

    return (
        <div className="container mt-5">
            <h2>Profile</h2>
            <div className="card">
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;

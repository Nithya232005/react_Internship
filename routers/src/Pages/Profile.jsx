import "./profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          
        </div>

        <h3 className="profile-name">Nithya</h3>
        <p className="profile-email">nithyathangaraju23@gmail.com</p>

        <div className="profile-info">
          <p><strong>Role:</strong>Software Developer</p>
          <p><strong>Status:</strong>Intern</p>
        </div>

        <button className="profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;

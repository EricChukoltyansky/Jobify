import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

function Profile() {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !lastName || !name || !location) {
      displayAlert();
      return;
    }
    updateUser({
      name,
      email,
      lastName,
      location,
    });
  };
  return (
    <Wrapper>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            name="Name"
            type="text"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            name="Email"
            type="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            name="Last Name"
            type="text"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            name="Location"
            type="text"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;

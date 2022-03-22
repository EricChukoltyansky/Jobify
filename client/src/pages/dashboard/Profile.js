import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

function Profile() {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [location, setLocation] = useState(user?.location);
  return (
    <Wrapper>
      <div className="form-container">
        <div className="form-header">
          <h1>Profile</h1>
        </div>
        <div className="form-body">
          <FormRow
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      </Wrapper>
      );
}

export default Profile;

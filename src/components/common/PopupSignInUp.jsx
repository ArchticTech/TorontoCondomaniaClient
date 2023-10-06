import { registerUser } from "../../utils/api";
import LoginSignup from "./user-credentials/LoginSignup";

const PopupSignInUp = () => {
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    password_confirmation: 'password123',
};
  registerUser(userData).then((data) => {
      console.log('Registration successful:', data);
  })
  .catch((error) => {
      console.error('Registration error:', error);
  });
  return (
    <div
      className="sign_up_modal modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <LoginSignup />
      </div>
    </div>
  );
};

export default PopupSignInUp;

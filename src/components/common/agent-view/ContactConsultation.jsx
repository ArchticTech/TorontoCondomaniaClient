import { sendConsultationRequest } from "../../../utils/api";

const ContactConsultation = ({ property }) => {

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    // Extract form data from the form fields
    const formData = {
      full_name: document.getElementById("full_name").value,
      phone_no: document.getElementById("phone_no").value,
      email_address: document.getElementById("email_address").value,
      call_response: document.querySelector(
        'input[name="call_response"]:checked'
      ).value,
      isBroker: document.querySelector(
        'input[name="isBroker"]:checked'
      ).value,
      looking_for_purchase: document.getElementById("looking_for_purchase")
        .value,
      message_consultation: document.getElementById("floatingTextarea").value,
    };

    try {
      const response = await sendConsultationRequest(formData);

      if (response.ok) {
        document.getElementById("free_consultant_form_side").reset();
        console.log("Data sent successfully!");
      } else {
        console.log("Error in sending data to api");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (

    <form
      id="free_consultant_form_side"
      className="tour-form"
      onSubmit={(e) => handleSubmitClick(e)}
    >
      <div className="row">
        <div className="col-md-12 mt-3">
          <input
            type="text"
            required
            name="full_name"
            id="full_name"
            className="form-control filter-input"
            placeholder="Full name *"
          />
        </div>
        <div className="col-md-12 mt-3">
          <input
            type="text"
            required
            name="phone_no"
            id="phone_no"
            className="form-control filter-input"
            placeholder="Phone No *"
          />
        </div>
        <div className="col-md-12 mt-3">
          <input
            type="email"
            required
            name="email_address"
            id="email_address"
            className="form-control filter-input"
            placeholder="Email *"
          />
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="form-group m-0">
              <label style={{ color: "black" }}>Response</label>
              <br />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="call_response"
                  id="call_now"
                  value="Call Now"
                  checked
                />
                <label className="form-check-label" htmlFor="call_now">
                  Call Now
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  value="Text Me"
                  type="radio"
                  name="call_response"
                  id="text_me"
                />
                <label className="form-check-label" htmlFor="text_me">
                  Text Me
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group m-0">
              <label style={{ color: "black" }}>Broker</label>
              <br />
              <div className="form-check">
                <input
                  className="form-check-input"
                  value="No"
                  type="radio"
                  name="isBroker"
                  id="text_me"
                  checked
                />
                <label className="form-check-label" htmlFor="text_me">
                  No
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isBroker"
                  id="call_now"
                  value="Yes"
                  
                />
                <label className="form-check-label" htmlFor="call_now">
                  Yes
                </label>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <label
            htmlFor="looking_for_purchase"
            style={{ color: "black" }}
            className="my-2"
          >
            When Are you looking for Purchase?
          </label>
          <select
            class="form-select"
            name="looking_for_purchase"
            required
            id="looking_for_purchase"
            aria-label="Default select example"
          >
            <option value="">Select Looking For Puchase</option>
            <option value="1 Month">1 Month</option>
            <option value="6 Month">6 Month</option>
            <option value="1 Year">1 Year</option>
          </select>
        </div>
        <div className="col-md-12 my-3 ">
          <div className="form-floating">
            <textarea
              name="message_consultation"
              className="form-control"
              id="floatingTextarea"
              readOnly
            >{`Hello, I am interested in ${property}`}</textarea>
          </div>
        </div>
        <div className="col-md-3">
          <input
            className="btn btn-thm"
            type="submit"
            name="submit_contact_consultation_side"
            id="submit_contact_consultation_side"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
};


export default ContactConsultation;

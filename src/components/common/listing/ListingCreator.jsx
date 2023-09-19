import global from "../../../config/env";

const Creaator = ({agent}) => {
  return (
    <div className="media d-flex">
      <img
        width={90}
        className="me-3"
        src={global.apiURL + 'profile-pictures/' + agent.image}
        alt={agent?.name}
      />
      <div className="media-body">
        <h5 className="mt-0 mb0">{agent?.name}</h5>
        <p className="mb0">{agent?.contact}</p>
        <p className="mb0">{agent?.email}</p>
        <a className="text-thm" href="">
          View My Listing
        </a>
      </div>
    </div>
  );
};

export default Creaator;

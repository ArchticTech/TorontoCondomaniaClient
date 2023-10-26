import AdditionalAssignmentDetails from "../common/listing-details/AdditionalAssignmentDetails";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";

const DetailsContent = ({ assignmentVal, property, assignment }) => {
  return (
    <>
      {property.description ? (
        <div className="listing_single_description">
          <div className="lsd_list">
            <PropertyItem property={property} />
          </div>
          {/* End .lsd_list */}

          <h4 className="mb30">Description</h4>
          <PropertyDescriptions property={property} />
        </div>
      ) : undefined}
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Details</h4>
          </div>
          <PropertyDetails property={property} />
        </div>
      </div>
      {/* End .additional_details */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails property={property} />
        </div>
      </div>
      {/* End .additional_details */}
      {assignment ? (
        <div className="additional_details">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb15">Assignment details</h4>
            </div>
            <AdditionalAssignmentDetails property={assignmentVal} />
          </div>
        </div>
      ) : undefined}
      {/* End .additional_details */}

      <div className="property_attachment_area">
        <h4 className="mb30">Property Attachments</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div>
      {Object.keys(property.features).length > 0 ? (
        <div className="application_statics mt30">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb10">Features</h4>
            </div>
            {/* End .col */}
            <PropertyFeatures features={property.features} />
          </div>
        </div>
      ) : null}

      <div className="application_statics mt30">
        <h4 className="mb30">
          Location <small className="float-end">{property.address}</small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation
            latitude={property.latitude}
            longitude={property.longitude}
          />
        </div>
      </div>
      {property.floorPlan && property.floorPlan.length > 0 ? (
        <div className="application_statics mt30">
          <h4 className="mb30">Floor plans</h4>
          <div className="faq_according style2">
            <FloorPlans floorPlan={property.floorPlan} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailsContent;

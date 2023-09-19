import { useState } from "react";

const PropertyDescriptions = ({property}) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const initialDescription = property?.description.split('</p>', 2).join('</p>') + '</p>';
  const moreDescription = property?.description.slice(initialDescription.length)
  return (
    <>
      
      <div dangerouslySetInnerHTML={{ __html: initialDescription }} />
      <div className="collapse" id="collapseExample">
        <div dangerouslySetInnerHTML={{ __html: moreDescription }} />
      </div>
      {(moreDescription.length > 0) ? 
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          {(click) ? 
            <>Show More <span className="flaticon-download-1 fz12"></span></> : 
            <>Show Less <span className="flaticon-upload fz12"></span></>}
        </a>
      </p>: undefined }
    </>
  );
};

export default PropertyDescriptions;

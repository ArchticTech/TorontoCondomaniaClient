import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section className="header_inner_page_section">
      <div className="container">
        {/* <div className="row">
          <div className="col-xl-6"> */}
            <div className="mortgage_process_header_content">
              <h1 className="mortgage_process_header">
              <span>Mortgage</span> Process Explained Your Step-by-Step <span>Guide</span> </h1>
              <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
              <button className="btn_mortgage btn btn-thm mt-2">Try Calculator</button>
            </div>
          </div>
          {/* End .col */}
        {/* </div>
      </div> */}
    </section>
  );
};

export default BreadCrumbBanner;

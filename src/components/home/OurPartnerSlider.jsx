import Slider from "react-slick";

const partnerItems = [
  {
    id: 1,
    imageSrc: "../../assets/images/partners/1.png",
  },
  {
    id: 2,
    imageSrc: "../../assets/images/partners/2.png",
  },
  {
    id: 3,
    imageSrc: "../../assets/images/partners/3.png",
  },
  {
    id: 4,
    imageSrc: "../../assets/images/partners/4.png",
  },
  {
    id: 4,
    imageSrc: "../../assets/images/partners/5.png",
  },
];

const OurPartnerSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content = partnerItems?.slice(0, 12)?.map((partner) => {
    return (
      <div className="item" key={partner.id}>
        <div className="feat_property">
          <div className="">
            <img
              width={343}
              height={220}
              className="img-whp cover p-3"
              src={partner.imageSrc}
              alt="blog img"
            />
          </div>

          {/* <div className="details">
            <div className="tc_content">
              <h4>
                <a href={`/blog/${blog.id}`}>{blog.name}</a>
              </h4>
              <p className="">{blog.content}</p>
            </div>

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <a href={`/blog/${blog.id}`} className="fp_price">
                    <button className="btn btn-thm">Read More</button>
                  </a>
                </li>
              </ul>
              <div className="fp_pdate float-end"></div>
            </div>
          </div> */}
        </div>
      </div>
    );
  });

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default OurPartnerSlider;

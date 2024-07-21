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
    id: 5,
    imageSrc: "../../assets/images/partners/5.jpg",
  },
  {
    id: 6,
    imageSrc: "../../assets/images/partners/6.webp",
  },
  {
    id: 7,
    imageSrc: "../../assets/images/partners/7.png",
  },
  {
    id: 8,
    imageSrc: "../../assets/images/partners/8.png",
  },
  {
    id: 9,
    imageSrc: "../../assets/images/partners/9.png",
  },
  {
    id: 10,
    imageSrc: "../../assets/images/partners/10.png",
  },
  {
    id: 11,
    imageSrc: "../../assets/images/partners/11.jpg",
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
      <div className="item partner" key={partner.id}>
        <div className="feat_property">
          <div className="">
            <img
              width={343}
              height={220}
              className="img-whp contain p-3"
              src={partner.imageSrc}
              alt="blog img"
              style={{
                maxWidth: '300px',
                margin: '0 auto'
              }}
            />
          </div>
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

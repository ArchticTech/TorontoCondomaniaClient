import Link from "next/link";
import Slider from "react-slick";

const blogItems = [
    {
      id: 1,
      name: 'Blog 1',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageSrc: '../../assets/images/home/expert-double-1.jpg',
    },
    {
      id: 2,
      name: 'Blog 2',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageSrc: '../../assets/images/home/expert-double-2.jpg',
    },
    {
      id: 3,
      name: 'Blog 3',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageSrc: '../../assets/images/home/expert-single.png',
    },
  ];

const BlogSlider = () => {
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

  let content = blogItems?.slice(0, 12)?.map((blog) => {
    

    return ( 
        <div className="item" key={blog.id}>
        <div className="feat_property">
          <div className="thumb m-3">
            <img
              width={343}
              height={220}
              className="img-whp cover"
              src={blog.imageSrc}
              alt="blog img"
            />
          </div>

          <div className="details">
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
          </div>
        </div>
      </div>
  )});

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default BlogSlider;

import React from "react";
import Image from "next/image";

const OurExperts = () => {
  return (
    <>
      <div className="row experts_main_div">
        <div className="col-lg-6 experts_div_left">
          <div className="heading_main">
            <h5>Our expert will help you make the right Decision</h5>
          </div>
          <div className="cards pt30">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="68"
                viewBox="0 0 52 68"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.48334 32.4431C8.48334 31.7785 9.01935 31.2397 9.68056 31.2397H41.6065C42.2678 31.2397 42.8038 31.7785 42.8038 32.4431C42.8038 33.1078 42.2678 33.6465 41.6065 33.6465H9.68056C9.01935 33.6465 8.48334 33.1078 8.48334 32.4431Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.8752 2.83006C26.137 2.26272 25.1281 2.26962 24.4149 2.82719L13.2454 11.5682C12.7576 11.958 12.4738 12.5446 12.4738 13.141L12.4738 13.146L12.3939 32.4484L9.99951 32.4384L10.0793 13.141C10.0793 13.1401 10.0793 13.1392 10.0793 13.1383C10.0802 11.7796 10.7207 10.5075 11.7626 9.67844L11.7702 9.67242L22.9448 0.927391C24.5295 -0.311439 26.7432 -0.305186 28.3353 0.922483L28.3412 0.927094L39.5145 9.65495C40.5935 10.496 41.2072 11.7798 41.2072 13.141V32.4434H38.8128V13.141C38.8128 12.5126 38.5326 11.9352 38.0472 11.5568L26.8779 2.8321C26.877 2.83142 26.8761 2.83074 26.8752 2.83006Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.4554 26.8275C20.4554 24.8311 22.0609 23.2173 24.0471 23.2173H27.2397C29.2258 23.2173 30.8314 24.8311 30.8314 26.8275V32.4433C30.8314 33.1079 30.2953 33.6467 29.6341 33.6467H21.6526C20.9914 33.6467 20.4554 33.1079 20.4554 32.4433V26.8275ZM24.0471 25.6241C23.3834 25.6241 22.8499 26.1603 22.8499 26.8275V31.2399H28.4369V26.8275C28.4369 26.1603 27.9034 25.6241 27.2397 25.6241H24.0471Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4601 14.794C18.2434 14.794 18.061 14.9772 18.061 15.1951V17.6019C18.061 17.8198 18.2434 18.003 18.4601 18.003H21.6527C21.8695 18.003 22.0518 17.8198 22.0518 17.6019V15.1951C22.0518 14.9772 21.8695 14.794 21.6527 14.794H18.4601ZM15.6666 15.1951C15.6666 13.648 16.9209 12.3872 18.4601 12.3872H21.6527C23.1919 12.3872 24.4462 13.648 24.4462 15.1951V17.6019C24.4462 19.149 23.1919 20.4098 21.6527 20.4098H18.4601C16.9209 20.4098 15.6666 19.149 15.6666 17.6019V15.1951Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.6343 14.794C29.4175 14.794 29.2352 14.9772 29.2352 15.1951V17.6019C29.2352 17.8198 29.4175 18.003 29.6343 18.003H32.8268C33.0436 18.003 33.2259 17.8198 33.2259 17.6019V15.1951C33.2259 14.9772 33.0436 14.794 32.8268 14.794H29.6343ZM26.8407 15.1951C26.8407 13.648 28.0951 12.3872 29.6343 12.3872H32.8268C34.366 12.3872 35.6204 13.648 35.6204 15.1951V17.6019C35.6204 19.149 34.366 20.4098 32.8268 20.4098H29.6343C28.0951 20.4098 26.8407 19.149 26.8407 17.6019V15.1951Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5486 3.56228C28.5486 2.89766 29.0846 2.35889 29.7458 2.35889H36.7696C37.4261 2.35889 37.9602 2.89036 37.9667 3.55025L38.0146 8.36381C38.0212 9.02839 37.4906 9.57253 36.8294 9.57918C36.1682 9.58582 35.6269 9.05246 35.6203 8.38788L35.5842 4.76567H29.7458C29.0846 4.76567 28.5486 4.22689 28.5486 3.56228Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4162 54.9738H39.0188C48.5403 54.9738 51.435 52.0642 51.4111 42.4696V27.2482C51.4111 17.6777 48.5164 14.7681 38.9949 14.7681V18.375C46.5068 18.375 47.8226 19.6976 47.8226 27.2482V42.4696C47.8226 50.0202 46.5068 51.3428 38.9949 51.3428H12.4162C4.90427 51.3428 3.58849 50.0202 3.58849 42.4696V27.2482C3.58849 19.6976 4.90427 18.375 12.4162 18.375V14.7681C2.89472 14.7681 0 17.6777 0 27.2482V42.4937C0 52.0642 2.89472 54.9738 12.4162 54.9738Z"
                  fill="#292D32"
                />
                <path
                  d="M26.2826 67.8883C25.3017 67.8883 24.4883 67.0707 24.4883 66.0848V54.5906C24.4883 53.6047 25.3017 52.7871 26.2826 52.7871C27.2634 52.7871 28.0768 53.6047 28.0768 54.5906V66.0848C28.0768 67.0707 27.2634 67.8883 26.2826 67.8883Z"
                  fill="#292D32"
                />
                <path
                  d="M50.2059 46.2461H2.35934C1.37849 46.2461 0.565094 45.4286 0.565094 44.4426C0.565094 43.4567 1.37849 42.6392 2.35934 42.6392H50.2059C51.1867 42.6392 52.0001 43.4567 52.0001 44.4426C52.0001 45.4286 51.1867 46.2461 50.2059 46.2461Z"
                  fill="#292D32"
                />
                <path
                  d="M37.0478 67.8877H15.5169C14.536 67.8877 13.7227 67.0702 13.7227 66.0842C13.7227 65.0983 14.536 64.2808 15.5169 64.2808H37.0478C38.0287 64.2808 38.8421 65.0983 38.8421 66.0842C38.8421 67.0702 38.0287 67.8877 37.0478 67.8877Z"
                  fill="#292D32"
                />
              </svg>
            </span>
            <div className="card_text">
              <h6>Requirements Assessment</h6>
              <p>
                Our journey begins with a deep dive into your unique needs and desires. By understanding every facet of your real estate aspirations, we tailor our approach to align perfectly with your goals. Your satisfaction is our compass, and we&apos;re committed to ensuring that your purchase is not just a transaction but a step towards your dream home.
              </p>
            </div>
          </div>
          <div className="cards">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M45.6701 47.3205H1.65076C0.74836 47.3205 3.05176e-05 46.5722 3.05176e-05 45.6698C3.05176e-05 44.7674 0.74836 44.019 1.65076 44.019H45.6701C46.5725 44.019 47.3208 44.7674 47.3208 45.6698C47.3208 46.5722 46.5725 47.3205 45.6701 47.3205Z"
                  fill="#292D32"
                />
                <path
                  d="M28.6126 47.3208H18.7082C17.8058 47.3208 17.0575 46.5725 17.0575 45.6701V6.05266C17.0575 2.267 19.1484 0 22.67 0H24.6508C28.1724 0 30.2633 2.267 30.2633 6.05266V45.6701C30.2633 46.5725 29.515 47.3208 28.6126 47.3208ZM20.3589 44.0194H26.9618V6.05266C26.9618 3.52155 25.7733 3.30145 24.6508 3.30145H22.67C21.5475 3.30145 20.3589 3.52155 20.3589 6.05266V44.0194Z"
                  fill="#292D32"
                />
                <path
                  d="M12.6556 47.3206H3.85174C2.94935 47.3206 2.20102 46.5722 2.20102 45.6698V19.2582C2.20102 15.4726 4.13787 13.2056 7.37329 13.2056H9.13407C12.3695 13.2056 14.3063 15.4726 14.3063 19.2582V45.6698C14.3063 46.5722 13.558 47.3206 12.6556 47.3206ZM5.50247 44.0191H11.0049V19.2582C11.0049 16.507 9.79436 16.507 9.13407 16.507H7.37329C6.713 16.507 5.50247 16.507 5.50247 19.2582V44.0191Z"
                  fill="#292D32"
                />
                <path
                  d="M43.4692 47.3206H34.6654C33.763 47.3206 33.0146 46.5723 33.0146 45.6699V30.2631C33.0146 26.4774 34.9515 24.2104 38.1869 24.2104H39.9477C43.1831 24.2104 45.12 26.4774 45.12 30.2631V45.6699C45.12 46.5723 44.3716 47.3206 43.4692 47.3206ZM36.3161 44.0192H41.8185V30.2631C41.8185 27.5119 40.608 27.5119 39.9477 27.5119H38.1869C37.5266 27.5119 36.3161 27.5119 36.3161 30.2631V44.0192Z"
                  fill="#292D32"
                />
              </svg>
            </span>
            <div className="card_text">
              <h6>Market Analysis</h6>
              <p>
                In the ever-evolving GTA real estate market, having the right insights is crucial. Our experts possess an in-depth understanding of local trends, market dynamics, and investment opportunities. We provide you with a roadmap, backed by data-driven analysis, to help you navigate the market with confidence and make decisions that align with your long-term vision.
              </p>
            </div>
          </div>
          <div className="cards">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="47"
                viewBox="0 0 54 47"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.8772 15.7922C22.8825 15.7922 19.6573 19.0173 19.6573 23.012C19.6573 24.5163 20.1032 25.8996 20.8793 27.034C21.476 27.9061 21.2527 29.0968 20.3806 29.6936C19.5085 30.2903 18.3177 30.067 17.721 29.1949C16.5071 27.4208 15.8305 25.2835 15.8305 23.012C15.8305 16.9038 20.769 11.9653 26.8772 11.9653C32.9853 11.9653 37.924 16.9038 37.924 23.012C37.924 29.1201 32.9853 34.0588 26.8772 34.0588C25.8204 34.0588 24.9638 33.2021 24.9638 32.1453C24.9638 31.0886 25.8204 30.2319 26.8772 30.2319C30.8718 30.2319 34.0971 27.0067 34.0971 23.012C34.0971 19.0174 30.8719 15.7922 26.8772 15.7922Z"
                  fill="#292D32"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.02182 15.3761C8.12156 5.78769 17.06 0 26.877 0C32.3381 0 37.567 1.80497 42.1695 5.07304C43.0311 5.68485 43.2336 6.87931 42.6218 7.74094C42.01 8.60257 40.8156 8.80509 39.9539 8.19328C35.9334 5.33844 31.4676 3.82682 26.877 3.82682C18.6829 3.82682 10.8347 8.65168 5.24994 17.4313L5.24835 17.4338C4.34372 18.8511 3.82682 20.8798 3.82682 23.0248C3.82682 25.1697 4.34372 27.1984 5.24834 28.6157L5.24994 28.6182C10.8347 37.3978 18.6829 42.2227 26.877 42.2227C35.0711 42.2227 42.9193 37.3978 48.5041 28.6182L48.5057 28.6157C49.4103 27.1984 49.9272 25.1697 49.9272 23.0248C49.9272 20.8798 49.4103 18.8511 48.5057 17.4338C47.9371 16.543 48.1983 15.36 49.0891 14.7915C49.9798 14.2229 51.1628 14.4841 51.7314 15.3748C53.1229 17.5548 53.754 20.3479 53.754 23.0248C53.754 25.7016 53.1229 28.4947 51.7314 30.6747C45.6317 40.2623 36.6936 46.0495 26.877 46.0495C17.0602 46.0495 8.12186 40.262 2.02212 30.6739C0.631002 28.494 0 25.7013 0 23.0248C0 20.3484 0.630913 17.5559 2.02182 15.3761Z"
                  fill="#292D32"
                />
              </svg>
            </span>
            <div className="card_text">
              <h6>Property Tours</h6>
              <p>
                Witness your future unfold with our expert-guided property tours. These tours are not mere walk-throughs; they are windows into the opportunities that await you. Our experienced team showcases handpicked properties that fit your criteria, allowing you to envision the possibilities and choose the right property that resonates with your vision.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 experts_div_right">
          <div className="row" style={{ height:'600px' }}>
            <div className="single_image col-lg-6" style={{ height:'600px' }}>
             
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/home/expert-1.jpg"
                  alt=""
                />
              
            </div>
            <div className="double_image col-lg-6">
                <Image
                  width={301}
                  height={236}
                  src="/assets/images/home/expert-2.jpg"
                  alt=""
                />
                <Image
                  width={301}
                  height={236}
                  src="/assets/images/home/expert-3.jpg"
                  alt=""
                />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExperts;

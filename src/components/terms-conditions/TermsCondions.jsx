import Link from "next/link";

const TermsCondions = () => {
  const termsContent = [
    {
      id: 1,
      title: "",
      text1: `Welcome to TorontoCondomania, the leading two-way online marketplace for real estate in Ontario, Canada. Our platform empowers buyers and realtors to connect, explore preconstruction projects, rentals, and assignments through MLS listings. Before using our services, please carefully read and understand the following terms and conditions. By accessing or using our platform, you agree to be bound by these terms.
      .`,
    },
    {
      id: 2,
      title: "Acceptance of Terms",
      text1: `By accessing or using our platform, you agree to these terms and conditions. If you do not agree to these terms, please refrain from using our services.`,
    },
    {
      id: 3,
      title: "User Eligibility",
      text1: `You must be at least 18 years old and have the legal capacity to enter into contracts in Ontario to use our platform. By using our services, you affirm that you meet these requirements.`,
    },
    {
      id: 4,
      title: "Account Registration",
      text1: `Realtors: Realtors can create an account on our platform by providing accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.`,
      text2: `Buyers: Buyers can access most features of our platform without registration. However, certain advanced features may require you to create an account.`,
    },
    {
      id: 5,
      title: "Use of the Platform",
      text1: `Realtors: You may upload listings for preconstruction projects, rentals, and assignments in Ontario. All listings must be accurate and comply with relevant laws and regulations.`,
      text2: `Buyers: You may search for properties using advanced filters and interact with realtors. Any interactions must be respectful and in compliance with our community guidelines.`,
    },
    {
      id: 6,
      title: "Intellectual Property",
      text1: `All content and intellectual property on our platform, including but not limited to logos, trademarks, and copyrighted materials, are the property of TorontoCondomania. Users may not use, reproduce, or distribute our content without written permission.`,
    },
    {
      id: 7,
      title: "Privacy",
      text1: `Our Privacy Policy outlines how we collect, use, and disclose your personal information. By using our platform, you consent to the practices described in the Privacy Policy.`,
    },
    {
      id: 8,
      title: "Content Moderation",
      text1: `We reserve the right to moderate and remove any content that violates our terms and conditions, community guidelines, or applicable laws.`,
    },
    {
      id: 9,
      title: "Liability",
      text1: `We do not endorse or guarantee the accuracy of any listings or content on our platform. Buyers and realtors are encouraged to conduct their due diligence.`,
      text2: `We are not liable for any direct or indirect damages, losses, or disputes arising from the use of our platform.`,
    },
    {
      id: 10,
      title: "Termination",
      text1: `We reserve the right to terminate or suspend user accounts at our discretion, without notice, if we believe there is a violation of our terms and conditions.`,
    },
    {
      id: 11,
      title: "Amendments",
      text1: `We may update these terms and conditions from time to time. It is your responsibility to review them periodically. Continued use of our platform after changes implies acceptance of the updated terms.`,
    },
    {
      id: 12,
      title: "Contact Us",
      text1: `If you have any questions or concerns about our terms and conditions, please contact us at info@torontocondomania.ca.`,
    },
    {
      id: 13,
      title: "",
      text1: `Thank you for choosing TorontoCondomania for your real estate needs in Ontario, Canada. We look forward to serving you on our platform.`,
    },
  ];

  // const navigationList = [
  //   { id: 1, routeLink: "#", name: "Welcome Text" },
  //   { id: 2, routeLink: "#", name: "Our Terms" },
  //   { id: 3, routeLink: "#", name: "Conditions" },
  //   { id: 4, routeLink: "#", name: "Your Privacy" },
  //   { id: 5, routeLink: "#", name: "Informations We Collect" },
  // ];

  return (
    <div className="row">
      <div className="col-lg-10 col-xl-10">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <div className="grids mb30" key={item.id}>
              <h4>{item.title}</h4>
              <p className="mb20">{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">Navigation</h4>
          <div className="widget_list">
            <ul className="list_details">
              {navigationList.map((list) => (
                <li key={list.id}>
                  <Link href={list.routeLink}>
                    <i className="fa fa-caret-right mr10"></i>
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TermsCondions;

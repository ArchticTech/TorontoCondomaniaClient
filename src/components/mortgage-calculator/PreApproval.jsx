import React from "react";
import LowerPaymentCard from "./LowerPaymentCard";
import TipCard from "./TipCard";

const PreApproval = () => {
  return (
    <>
      <section className="preapproval_section">
        <div className="container main px-5">
          <h3 className="heading_main">
            How To Calculate Mortgage?
          </h3>
          <ul>
            <li>
              In the &apos;Home Price&apos; field, input the total cost of the home you wish to purchase. This should include the purchase price and any additional costs associated with the property, such as closing costs.
            </li>
            <li>
              Input the amount you intend to pay as a down payment. Typically, down payments range from 3% to 20% or more of the home&apos;s purchase price. The calculator will subtract this amount from the home price to determine the loan amount.
            </li>
            <li>
              Specify the number of years you plan to take out the mortgage for. Common loan terms are 15, 20, or 30 years.
            </li>
            <li>
              Enter the annual interest rate you expect to receive from a lender. This rate can vary based on your credit score, the type of mortgage, and current market conditions.
            </li>
            <li>
              We use your zip code to estimate property taxes and insurance costs, which can be part of your monthly payment. Enter your zip code accurately for more precise calculations.
            </li>
            <li>
              Now click on the “Calculate Mortgage” button. The calculator will process the information you provided and generate the results.
            </li>
            <li>
              The calculator will display various details, including your estimated monthly mortgage payment, the total amount of interest you will pay over the life of the loan, and the total cost of the loan. Additionally, it may show an estimate of property taxes and insurance costs based on your zip code.
            </li>
            <li>
              If the initial results do not meet your financial goals, you can adjust the parameters. Try different down payment amounts, loan terms, or interest rates to see how they affect your monthly payments. Mortgage calculators allow you to compare different scenarios side by side. This can help you make informed decisions about your home purchase. Keep in mind that the calculated monthly payment is just one part of your homeownership expenses. You should also consider property taxes, homeowner&apos;s insurance, and other costs associated with owning a home. While mortgage calculators are helpful tools, it&apos;s a good idea to consult with a mortgage professional or a financial advisor to get personalized advice and to explore various mortgage options that best suit your financial situation and goals.
            </li>
          </ul>
          <TipCard icon="fa fa-lightbulb-o" span="Tip" para=" Within each type of mortgage, borrowers have the option to
                buy discount points to buy their interest rate down, points
                are essentially a fee that borrowers pay up front to have a
                lower interest rate over the lifde of their loan. when comparing
                mortgage rates, make sure you are comparing rates with the same
                number of discount points for a true apples-to-apples comparison." />
        </div>
      </section>

      <section className="lower_monthly_payment">

        <div className="top">
          <h2>Want to know more about mortgage Schedule?</h2>
          <p>If you want to know more about mortgage schedules click the link below and explore beyond imagination</p>
          <img src="../../assets/images/down-arrow.png" alt="" />
          <a href="https://www.speedyfunds.ca/mortgage-payment-calculator"><button className="btn btn-thm">Click Now</button></a>
        </div>
        <h3 className="py-4">How to Lower the Monthly payement</h3>
        <div className="bottom">
          <div className="left">
            <LowerPaymentCard />
            <LowerPaymentCard />
            <LowerPaymentCard />
            <LowerPaymentCard />
          </div>
          <div className="right">
            <LowerPaymentCard />
            <LowerPaymentCard />
            <LowerPaymentCard />
            <LowerPaymentCard />
          </div>
        </div>
        <TipCard icon="fa fa-bolt" span="Important" para=" Within each type of mortgage, borrowers have the option to buy discount points to buy their interest rate down, points are essentially a fee that borrowers pay up front to have a lower interest rate over the lifde of their loan. when comparing mortgage rates, make sure you are comparing rates with the same number of discount points for a true apples-to-apples comparison." />
      </section>
    </>
  );
};

export default PreApproval;

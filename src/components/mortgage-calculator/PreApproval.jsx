import React from "react";

const PreApproval = () => {
  return (
    <>
      <section className="preapproval_section">
        <div className="container">
          <div className="common_div pre-approval">
            <h3 className="heading_main">How to use the mortgage calculator?</h3>
            <p>
            Using a mortgage calculator is a straightforward process that can help you estimate your monthly mortgage payments and other financial details. Here are the steps on how to use a mortgage calculator with fields for home price, down payment, loan term, interest rate, and zip code:
            </p>
          </div>
          <div className="common_div find-property">
            <h3 className="heading_main">Step 1: Enter Home Price </h3>
            <p>
            In the &APOS;Home Price&APOS; field, input the total cost of the home you wish to purchase. This should include the purchase price and any additional costs associated with the property, such as closing costs.
            </p>
          </div>
          <div className="common_div apply-mortgage">
            <h3 className="heading_main">Step 2: Enter Down Payment </h3>
            <p>
            Input the amount you intend to pay as a down payment. Typically, down payments range from 3% to 20% or more of the home&APOS;s purchase price. The calculator will subtract this amount from the home price to determine the loan amount.
            </p>
          </div>
          <div className="common_div complete-loan-processing">
            <h3 className="heading_main">Step 3: Specify Loan Term</h3>
            <p>
            Specify the number of years you plan to take out the mortgage for. Common loan terms are 15, 20, or 30 years.
            </p>
          </div>
          <div className="common_div complete-loan-processing">
            <h3 className="heading_main">Step 4: Enter Interest Rate </h3>
            <p>
            Enter the annual interest rate you expect to receive from a lender. This rate can vary based on your credit score, the type of mortgage, and current market conditions.
            </p>
          </div>
          <div className="common_div complete-loan-processing">
            <h3 className="heading_main">Step 5: ZIP Code </h3>
            <p>
            We use your zip code to estimate property taxes and insurance costs, which can be part of your monthly payment. Enter your zip code accurately for more precise calculations.</p>
          </div>
          <div className="common_div complete-loan-processing">
            <h3 className="heading_main">Step 6: Click Calculate Mortgage</h3>
            <p>
            Now click on the “Calculate Mortgage” button. The calculator will process the information you provided and generate the results.
            </p>
          </div>
          <div className="common_div complete-loan-processing">
            <h3 className="heading_main">Step 7: Review the Results </h3>
            <p>
            The calculator will display various details, including your estimated monthly mortgage payment, the total amount of interest you will pay over the life of the loan, and the total cost of the loan. Additionally, it may show an estimate of property taxes and insurance costs based on your zip code.
            </p>
          </div>
          <p className="my-5">
          If the initial results do not meet your financial goals, you can adjust the parameters. Try different down payment amounts, loan terms, or interest rates to see how they affect your monthly payments. Mortgage calculators allow you to compare different scenarios side by side. This can help you make informed decisions about your home purchase. Keep in mind that the calculated monthly payment is just one part of your homeownership expenses. You should also consider property taxes, homeowner&APOS;s insurance, and other costs associated with owning a home. While mortgage calculators are helpful tools, it&APOS;s a good idea to consult with a mortgage professional or a financial advisor to get personalized advice and to explore various mortgage options that best suit your financial situation and goals.
          </p>
        </div>
      </section>
    </>
  );
};

export default PreApproval;

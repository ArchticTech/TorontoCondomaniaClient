import React from "react";
import TipCard from "../mortgage-calculator/TipCard";

const PreApproval = () => {
  return (
    <>
      <section className="preapproval_section">
        <div className="container">
          <div className="common_div pre-approval">
            <h3 className="heading_main">get Your Pre-Approval</h3>
            <p>
              To initiate the mortgage process, start by determining the most
              suitable mortgage type, calculating your affordable monthly
              payment, and securing pre-approval for the loan. It&apos;s
              crucial to acquaint yourself with the various mortgage options
              available and select the one that aligns with your needs. When
              evaluating mortgage choices, consider several factors, with the
              foremost being a precise understanding of your monthly expenses.
              This encompasses
            </p>
            <p>
              not only the repayment of the principal loan but also the interest
              charges. Additionally, if you&apos;re unable to make a 20% down
              payment on the property, you&apos;ll be responsible for private
              mortgage insurance (PMI).
            </p>
            <p>
              {" "}
              A handy tool for assessing the impact of different interest rates
              on your monthly payments is a mortgage calculator.
            </p>
            <div className="tip my-4 mb-5">
              <TipCard
                icon="fa fa-lightbulb-o"
                span="Tip"
                para=" Within each type of mortgage, borrowers have the option to
                buy discount points to buy their interest rate down, points
                are essentially a fee that borrowers pay up front to have a
                lower interest rate over the lifde of their loan. when comparing
                mortgage rates, make sure you are comparing rates with the same
                number of discount points for a true apples-to-apples comparison."
              />
            </div>
          </div>
          <div className="common_div find-property">
            <h3 className="heading_main">Find A property</h3>
            <p>
              Many individuals embark on their property search well in advance
              of obtaining mortgage pre-approval, sometimes even before
              considering home purchase. However, if you&apos;ve diligently
              followed the steps mentioned earlier and secured pre-approval,
              you&apos;re now primed to begin your search in earnest. There are
              multiple avenues for house hunting, such as utilizing online real
              estate platforms like Zillow or Trulia, exploring properties at
              auctions, or even seeking off-market homes. It&apos;s essential
              to steer clear of common house-hunting pitfalls.
            </p>
            <p>
              Typically, this stage involves placing earnest money, a deposit
              that signifies your serious interest in the property, with usual
              deposits ranging from 1% to 2% of the sale price.Many individuals
              embark on their property search well in advance of obtaining
              mortgage pre-approval, sometimes even before considering home
              purchase. However, if you&apos;ve diligently followed the steps
              mentioned earlier and secured pre-approval, you&apos;re now
              primed to begin your search in earnest.
            </p>
            <p>
              Normally, your offer will also contain contingencies that allow
              you to pull out of the deal. These are designed to protect you and
              your money if the house you’ve chosen is not quite what it seems.
              Common contingencies include:
            </p>
            <ul className="find_property_ul">
              <li>
                Appraisals must come in close to the loan amount, not lower
              </li>
              <li>
                Home inspections do not find major issues with the property
              </li>
              <li>You are able to secure final mortgage approval</li>
            </ul>
            <TipCard icon="fa fa-bolt" span="Important" para=" Within each type of mortgage, borrowers have the option to buy discount points to buy their interest rate down, points are essentially a fee that borrowers pay up front to have a lower interest rate over the lifde of their loan. when comparing mortgage rates, make sure you are comparing rates with the same number of discount points for a true apples-to-apples comparison." />

          </div>
          <div className="common_div apply-mortgage">
            <h3 className="heading_main">Apply For Mortgage</h3>
            <p>
              Now, you&apos;re prepared to initiate the application for your
              ultimate mortgage. To proceed, you should reach out to a mortgage
              lender, typically the one that granted you pre-approval.
              Nevertheless, it&apos;s advisable to explore different options to
              secure the most favorable deal.
            </p>
            <p>
              Every mortgage lender will require specific information to extend
              an offer, which may include details they already possess, but they
              may need additional data. You&apos;ll also be tasked with
              providing your lender with a set of essential documents.{" "}
            </p>
            <p>
              Your lender will offer guidance on what to provide and the
              appropriate timing, but you can anticipate them to request the
              following:
            </p>
            <div className="my-3">
              <h4 className="ul_heading">Employment</h4>
              <ul className="apply_mortgage_ul">
                <li>Name of current employer, phone, and street address</li>
                <li>Length of time at current employer</li>
                <li>Position/title</li>
                <li>Salary, including overtime, bonuses, or commissions</li>
              </ul>
            </div>
            <div className="my-3">
              <h4 className="ul_heading">Income</h4>
              <ul className="apply_mortgage_ul">
                <li>Two years of W-2s</li>
                <li>Profit and loss statement (if self-employed)</li>
                <li>Pensions, Social Security</li>
                <li>Public assistance</li>
                <li>Child support</li>
                <li>Alimony</li>
              </ul>
            </div>
            <div className="my-3">
              <h4 className="ul_heading">Assets</h4>
              <ul className="apply_mortgage_ul">
                <li>Bank accounts (savings, checking, brokerage accounts)</li>
                <li>Real property</li>
                <li>Investments (stocks, bonds, retirement accounts)</li>
                <li>Proceeds from the sale of your current home</li>
                <li>
                  Gifted funds from relatives (e.g. a down payment gift for an
                  FHA loan)
                </li>
              </ul>
            </div>
            <div className="my-3">
              <h4 className="ul_heading">Debts</h4>
              <ul className="apply_mortgage_ul">
                <li>Current mortgage</li>
                <li>Liens</li>
                <li>Alimony</li>
                <li>Child support</li>
                <li>Car loans</li>
                <li>Credit cards</li>
                <li>Real property</li>
              </ul>
            </div>
            <div className="my-3">
              <h4 className="ul_heading">Property Information</h4>
              <ul className="apply_mortgage_ul">
                <li>Street address</li>
                <li>Expected sales price</li>
                <li>Type of home (single-family residence, condo, etc.)</li>
                <li>Size of property</li>
                <li>Real estate taxes (annual)</li>
                <li>Homeowner&apos;s association dues (HOA)</li>
                <li>Estimated closing date</li>
              </ul>
            </div>
            <div className="my-3">
              <h4 className="ul_heading">Credit History</h4>
              <ul className="apply_mortgage_ul">
                <li>Bankruptcies</li>
                <li>Collections</li>
                <li>Foreclosures</li>
                <li>Delinquencies</li>
              </ul>
            </div>
            
            <TipCard
                icon="fa fa-exclamation"
                span="Warning"
                para=" Within each type of mortgage, borrowers have the option to
                buy discount points to buy their interest rate down, points
                are essentially a fee that borrowers pay up front to have a
                lower interest rate over the lifde of their loan. when comparing
                mortgage rates, make sure you are comparing rates with the same
                number of discount points for a true apples-to-apples comparison."
              />

          </div>
          <div className="common_div complete-loan-processing">
            <h3 className="heading_main">Complete Loan Processing</h3>
            <p>
              Once you receive a loan estimate, it remains valid for 10 business
              days. If you intend to accept the loan offer, it`&APOS;s advisable
              to do so within this timeframe. Delaying your decision might
              prompt the lender to modify the terms and issue a revised loan
              estimate. Upon accepting the loan estimate, your mortgage
              application enters the processing phase. During this stage,
            </p>
            <p>
              your mortgage lender will meticulously review and authenticate the
              information you`&APOS;ve supplied to them, which involves:
            </p>
            <ul className="find_property_ul">
              <li>
                Procuring a credit report (if not already completed during
                pre-approval)
              </li>
              <li>
                Confirming employment status (VOE) and verifying bank deposits
                (VOD)
              </li>
              <li>Initiating a property inspection and appraisal</li>
              <li>Initiating a title search</li>
            </ul>
          </div>
          <div className="common_div pre-approval">
            <h3 className="heading_main">Go Through Underwriting Process</h3>
            <p>
              While you may not interact with them directly, mortgage
              underwriters play a pivotal role in the mortgage approval process,
              serving as the ultimate decision-makers for your mortgage
              approval.
            </p>
            <p>
              Underwriters meticulously scrutinize every facet of your mortgage
              application and perform various essential tasks. For instance,
              when borrowers apply for a mortgage on a property, the underwriter
              is responsible for commissioning an appraisal.
            </p>
            <p>
              This appraisal is utilized to ascertain whether the proceeds from
              the property&apos;s sale are sufficient to cover the loan amount
              you&apos;re seeking in your mortgage.
            </p>

            <TipCard icon="fa fa-bolt" span="Important" para=" Within each type of mortgage, borrowers have the option to buy discount points to buy their interest rate down, points are essentially a fee that borrowers pay up front to have a lower interest rate over the lifde of their loan. when comparing mortgage rates, make sure you are comparing rates with the same number of discount points for a true apples-to-apples comparison." />

          </div>
          <div className="common_div pre-approval">
            <h3 className="heading_main">Close on the Property</h3>
            <p>
              Once your mortgage application secures approval, it&apos;s time
              to move on to the closing phase. Here, an extensive set of
              documents will be printed, and you&apos;ll be invited to the
              title company or attorney&apos;s office for a closing meeting
            </p>
            <p>
              Among the crucial documents presented during this meeting is your
              closing disclosure form. This form displays an itemized comparison
              of the originally estimated closing costs and the final closing
              costs, highlighting any cost discrepancies.
            </p>
            <p>
              Typically, closing costs range from 2% to 5% of the home&apos;s
              purchase price. For instance, if you&apos;re purchasing a
              $200,000 house, expect closing costs in the range of $4,000 to
              $10,000. Keep in mind that closing fees can vary depending on
              factors such as your state, loan type, and mortgage lender, so
              it&apos;s essential to closely review these charges.
            </p>
            <p>
              In the event you observe new fees that were not included in the
              initial loan estimate or notice a substantial increase in your
              closing costs, don&apos;t hesitate to seek clarification from
              your lender or real estate agent.
            </p>
            <p>
              If everything appears satisfactory, you&apos;ll proceed to sign
              to accept the mortgage, and you&apos;ll exit the office with the
              keys to your new home.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreApproval;

import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(240);
  const [processingFee, setProcessingFee] = useState(1.2);
  const [downPayment, setDownPayment] = useState(3000);
  const [loanEMIValue, setLoanEMIValue] = useState(0);
  const [totalInterestValue, setTotalInterestValue] = useState(0);
  const [totalAmountValue, setTotalAmountValue] = useState(0);
  const [totalDownPaymentValue, setTotalDownPaymentValue] = useState(0);
  const [myChart, setMyChart] = useState(null);

  const chartRef = useRef(null);


  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (myChart) {
      myChart.destroy(); // Destroy the existing Chart instance
    }
    setMyChart(
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "Total Interest",
            "Principal Loan Amount",
            "Processing Fees",
          ],
          datasets: [
            {
              data: [0, loanAmount, 0],
              backgroundColor: ["#e63946", "#050A30", "#ff7415"],
              borderWidth: 0,
            },
          ],
        },
      })
    );
  }, []);

  const handleCalculate = () => {
    const updatedLoanAmount = loanAmount - downPayment;
    const interest = interestRate / 12 / 100;
    const emi =
      (updatedLoanAmount * interest * Math.pow(1 + interest, loanTenure)) /
      (Math.pow(1 + interest, loanTenure) - 1);

    setLoanEMIValue(Math.ceil(emi));

    const processingFees = Math.ceil(updatedLoanAmount * (processingFee / 100));
    setTotalDownPaymentValue(downPayment + processingFees);

    const totalInterestPayable = Math.ceil(
      emi * loanTenure - updatedLoanAmount
    );
    setTotalInterestValue(totalInterestPayable);

    const totalAmountPayable =
      updatedLoanAmount + totalInterestPayable + processingFees;
    setTotalAmountValue(totalAmountPayable);
    // const totalAmountPayable = updatedLoanAmount + processingFees;
    // setTotalAmountValue(totalAmountPayable);

    if (myChart) {
      updateChart(totalInterestPayable, processingFees, updatedLoanAmount);
    }
  };

  const updateChart = (
    totalInterestPayable,
    processingFees,
    updatedLoanAmount
  ) => {
    myChart.data.datasets[0].data[0] = totalInterestPayable;
    myChart.data.datasets[0].data[1] = updatedLoanAmount;
    myChart.data.datasets[0].data[2] = processingFees;
    myChart.update();
  };
  const handleLoanAmountChange = (e) => {
    setLoanAmount(parseFloat(e.target.value));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleLoanTenureChange = (e) => {
    setLoanTenure(parseFloat(e.target.value));
  };

  const handleProcessingFeeChange = (e) => {
    setProcessingFee(parseFloat(e.target.value));
  };

  const handleDownPaymentChange = (e) => {
    setDownPayment(parseFloat(e.target.value));
  };
  return (
    // <div className="mortgage_calculator_section">
      <div className="container">
        <div className="main_calc_div row">
          <div className="calc_heading col-lg-12 text-center py-5 ">
            <h5>
              Use our mortgage calculator to get an idea of your monthly payment
              by adjusting the interest rate, down payment, home price and more.
              To find out how you can pay off your mortgage faster, try our
              mortgage payoff calculator.
            </h5>
          </div>
          <div className="col-lg-12">
            {/* <div className="row loan-calculator main_calc_div">
                <div className="col-lg-6 calc_input_div"></div>
                <div className="col-lg-6 calc_chart_div"></div>
              </div> */}
            <div class="loan-calculator row">
              <div class="col-lg-6 top">
                {/* <h2>Loan EMI Calculator</h2> */}

                <form action="#">
                  <div class="group">
                    <div>
                      <div class="title">Amount (A)</div>
                      <input
                        class="loan-amount"
                        type="number"
                        value={loanAmount}
                        onChange={handleLoanAmountChange}
                      />
                    </div>

                    <div>
                      <div class="title">Interest Rate (R) (in %)</div>
                      <input
                        class="interest-rate"
                        type="number"
                        value={interestRate}
                        onChange={handleInterestRateChange}
                      />
                    </div>

                    <div>
                      <div class="title">Tenure (T) (in months)</div>
                      <input
                        class="loan-tenure"
                        type="number"
                        value={loanTenure}
                        onChange={handleLoanTenureChange}
                      />
                    </div>
                    <div>
                      <div class="title">Processing Fees (P) (in %)</div>
                      <input
                        class="processing-fee"
                        type="number"
                        value={processingFee}
                        onChange={handleProcessingFeeChange}
                      />
                    </div>

                    <div>
                      <div class="title">Down Payment (D)</div>
                      <input
                        class="down-payment"
                        type="number"
                        value={downPayment}
                        onChange={handleDownPaymentChange}
                      />
                    </div>
                  </div>
                </form>
                <div class="group1">
                  <button
                    onClick={handleCalculate}
                    class="btn btn-thm calculate-btn"
                  >
                    Calculate
                  </button>
                </div>
              </div>

              <div className="col-lg-6">
                <div class="result">
                  <div class="left">
                    <div class="total-down-payment">
                      <h3>
                        Total Down Payment (TDP)
                        {/* <br />
                        (TDP = D + P) */}
                      </h3>
                      <div className="value">{totalDownPaymentValue}</div>
                    </div>

                    <div class="loan-emi">
                      <h3>
                        Loan EMI (LE)
                        <br />
                        (PLA= A - D)
                        {/* <br />
                        (PLA = Principal Loan Amount) */}
                        {/* <br />
                        (LE = [PLA x R x (1+R)^T]/[(1+R)^T-1] ) */}
                      </h3>
                      <div className="value">{loanEMIValue}</div>
                    </div>

                    <div class="total-interest">
                      <h3>
                        Total Interest Payable (TIP)
                        {/* <br /> (TIP = LE * T) */}
                      </h3>
                      <div className="value">{totalInterestValue}</div>
                    </div>

                    <div class="total-amount">
                      <h3>
                        Total Payment (TP)
                        {/* <br />
                        (TP = LA + TIP + P) */}
                      </h3>
                      <div className="value">{totalAmountValue}</div>
                    </div>
                  </div>

                  <div class="right">
                    <canvas
                      ref={chartRef}
                      height="300"
                      id="myChart"
                      width="300"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Calculator;

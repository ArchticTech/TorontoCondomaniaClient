import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    downPaymentPercentage: 20,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  const [chart, setChart] = useState(null);

  useEffect( () => showChart(), [data]);
  const showChart = () => {

    const totalInterest = calculateTotalInterest();
    
    if(chart)
    {
      chart.data.datasets[0].data = [data.loanAmount, data.downPayment, totalInterest];
      chart.update();
    }
    else {
      const chartData = {
        labels: [
          'Loan Amount',
          'Down Payment',
          'Total Interest'
        ],
        datasets: [{
          label: 'Mortgage Home Loan',
          data: [data.loanAmount, data.downPayment, totalInterest],
          backgroundColor: [
            '#ccc',
            '#333',
            '#FD3636'
          ],
          hoverOffset: 4,
          weight: 10
        }]
      };
      
      setChart( new Chart(document.getElementById('loanChart'),
      {
        type: 'doughnut',
        data: chartData
      }));
    }
  };

  const calculateTotalInterest = () => {
    const totalLoanMonths = data.loanTerm * 12;
    const interestPerMonth = data.interestRate / 100 / 12;
    const monthlyPayment =
      (data.loanAmount *
        interestPerMonth *
        (1 + interestPerMonth) ** totalLoanMonths) /
      ((1 + interestPerMonth) ** totalLoanMonths - 1);

    const totalInterestGenerated = monthlyPayment * totalLoanMonths - data.loanAmount;

    return totalInterestGenerated;
  }

  return (
    <div className="App">
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} alignItems="center" className="main_calculator">
          <Grid item xs={12} md={6} lg={6} className="p-4 p-sm-2">
            <div className="form-group my-3">
              <label for="homeValue">Home Value</label>
              <span className="currency">$</span>
              <input
                  className="form-control hasPrefix"
                  id="homeValue"
                  type="number" 
                  min="0"
                  value={data.homeValue} 
                  onChange={(e) =>
                  {
                    const homeValue = parseInt(e.target.value);
                    const downPercentage = data.downPaymentPercentage / 100;
                    const loanPercentage = 1 - data.downPaymentPercentage
                    setData({
                      ...data,
                      homeValue: homeValue.toFixed(0),
                      downPayment: (downPercentage * homeValue).toFixed(0),
                      loanAmount: (loanPercentage * homeValue).toFixed(0),
                    });
                  }} 
              />
            </div>
            <div className="form-group my-3">
              <label for="downPayment">Down Payment</label>
              <span className="currency">$</span>
              <div className="d-flex inline-inputs">
                <input
                    className="form-control hasPrefix"
                    id="downPayment"
                    type="number" 
                    min="0"
                    value={data.downPayment}
                    onChange={(e) =>
                    {
                      const downPayment = parseInt(e.target.value);
                      const downPercentage = (downPayment * 100) / data.homeValue;
                      if (data.homeValue - downPayment >= 0)
                      {
                        setData({
                          ...data,
                          downPayment: downPayment.toFixed(0),
                          downPaymentPercentage: downPercentage.toFixed(0),
                          loanAmount: (data.homeValue - downPayment).toFixed(0),
                        });
                      }
                    }}
                  />
                  <input 
                    className="form-control" 
                    min="0"
                    max="100"
                    value={data.downPaymentPercentage}
                    onChange={(e) =>
                    {
                      const downPercentage = parseInt(e.target.value);
                      const downPayment = (downPercentage / 100) * data.homeValue;
                      if (data.homeValue - downPayment >= 0)
                      {
                        setData({
                          ...data,
                          downPayment: downPayment.toFixed(0),
                          downPaymentPercentage: downPercentage.toFixed(0),
                          loanAmount: (data.homeValue - downPayment).toFixed(0),
                        });
                      }
                    }}
                  />
                  <span className="suffix">%</span>
              </div>
            </div>
            <div className="form-group my-3">
              <label for="loanAmount">Loan Amount</label>
              <span className="currency">$</span>
              <input
                  className="form-control hasPrefix"
                  id="loanAmount"
                  type="number" 
                  min="0"
                  value={data.loanAmount}
                  onChange={(e) =>
                  {
                    const loanAmount = parseInt(e.target.value);
                    const downPercentage = 1 - ((loanAmount * 100) / data.homeValue);
                    if (data.homeValue - loanAmount >= 0)
                    {
                      setData({
                        ...data,
                        loanAmount: loanAmount.toFixed(0),
                        downPaymentPercentage: downPercentage.toFixed(0),
                        downPayment: (data.homeValue - loanAmount).toFixed(0),
                      });
                    }
                  }}
                />
            </div>
            <div className="row">
              <div className="col-6 form-group my-3">
                <label for="interestRate">Interest Rate</label>
                <input
                    className="form-control"
                    id="interestRate"
                    type="number"
                    min={0}
                    max={100}
                    value={data.interestRate}
                    onChange={(e) =>
                    {
                      const interestRate = parseFloat(e.target.value);
                      setData({
                        ...data,
                        interestRate: interestRate.toFixed(0),
                      });
                    }}
                  />
                  <span className="suffix">%</span>
              </div>
              <div className="col-6 form-group my-3">
                <label for="loanTerm">Loan Term</label>
                <input
                    className="form-control"
                    id="loanTerm"
                    type="number"
                    min={0}
                    max={30}
                    value={data.loanTerm} 
                    onChange={(e) =>
                    {
                      const loanTerm = parseFloat(e.target.value);
                      setData({
                        ...data,
                        loanTerm: loanTerm.toFixed(0),
                      });
                    }}
                  />
                  <span className="suffix">years</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="chart-section">
            <canvas id="loanChart"></canvas>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
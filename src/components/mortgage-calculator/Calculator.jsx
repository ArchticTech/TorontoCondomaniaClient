import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
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
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
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
        <Grid container spacing={5} alignItems="center" className="main_calculator_div">
          <Grid item xs={12} md={6} className="left_calculator_div">
            <input type="number" 
                min="0"
                value={data.homeValue} 
                onChange={(e) =>
                {
                  const homeValue = parseInt(e.target.value);
                  setData({
                    ...data,
                    homeValue: homeValue.toFixed(0),
                    downPayment: (0.2 * homeValue).toFixed(0),
                    loanAmount: (0.8 * homeValue).toFixed(0),
                  });
                }} 
            />
            <input type="number"
              min="0"
              value={data.downPayment}
              onChange={(e) =>
              {
                const downPayment = parseInt(e.target.value);
                if (data.homeValue - downPayment >= 0)
                {
                  setData({
                    ...data,
                    downPayment: downPayment.toFixed(0),
                    loanAmount: (data.homeValue - downPayment).toFixed(0),
                  });
                }
              }}
            />
            <input type="number" 
              min="0"
              value={data.loanAmount}
              onChange={(e) =>
              {
                const loanAmount = parseInt(e.target.value);
                if (data.homeValue - loanAmount >= 0)
                {
                  setData({
                    ...data,
                    loanAmount: loanAmount.toFixed(0),
                    downPayment: (data.homeValue - loanAmount).toFixed(0),
                  });
                }
              }}
            />
            <input type="number" 
              min="0"
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
            <input type="number" 
              min="0"
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
          </Grid>
          <Grid item xs={12} md={6}>
            <canvas id="loanChart"></canvas>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
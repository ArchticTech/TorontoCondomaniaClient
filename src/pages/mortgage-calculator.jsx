import React from 'react'
import Seo from "../components/common/seo";
import MortgageCalculator from "../components/mortgage-calculator/index";

const mortgageCalculator = () => {
  return (
    <>
    <Seo pageTitle="Mortgage Calculator | TorontoCondomania" />
    <MortgageCalculator/>
    </>
  )
}

export default mortgageCalculator

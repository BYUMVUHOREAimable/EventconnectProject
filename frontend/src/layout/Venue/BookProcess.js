import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookPage from './Book';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

export default function BookProcess() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setPaymentStatus(true);
    }, 1000);
  };

  return (
    <Router>
      <div className="relative">
        <div className="flex items-center bg-black bg-opacity-70 justify-center w-full h-screen fixed z-10">
          <Switch>
            <Route path="/step1">
              <Step1 />
            </Route>
            <Route path="/step2">
              <Step2 />
            </Route>
            <Route path="/step3">
              <Step3 />
            </Route>
            <Route path="/step4">
              <Step4 handlePayment={handlePayment} />
            </Route>
            <Route path="/step5">
              <Step5 paymentStatus={paymentStatus} />
            </Route>
            <Route path="/">
              <Step1 />
            </Route>
          </Switch>
        </div>
        <BookPage />
      </div>
    </Router>
  );
}

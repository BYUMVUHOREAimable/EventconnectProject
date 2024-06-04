import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

// Load your Stripe publishable key
const stripePromise = loadStripe(
  `${process.env.PUBLISHABLE_KEY}`
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: event.target.NameOnCard.value,
      },
    });

    if (error) {
      console.error("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      // Send payment data to the backend for payment processing
      const paymentData = {
        paymentMethodId: paymentMethod.id,
        seatArea: 1200,
        user: `${process.env.USER}`, // Replace with the actual user ID
        eventOrBooking: `${process.env.EVENTORBOOKING}`, // Replace with actual event/booking ID
        eventType: "Event", // Replace with actual event type
        amount: 5000, // Amount in cents ($50.00)
        ticketType: "VIP", // Replace with actual ticket type
      };

const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const paymentResult = await response.json();
      console.log(paymentResult);

      if (paymentResult.error) {
        console.log("Error while paying", paymentResult.error);
      } else {
        console.log("Payment successful", paymentResult);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-2/3 sm:w-4/5 mx-auto">
      <div className="grid gap-2 grid-rows-2 md:w-4/5 w-5/6 mx-auto">
        <input
          type="text"
          className="text-center py-3 border-b-2"
          name="NameOnCard"
          placeholder="Name on Card"
          required
        />
      </div>
      <div className="flex justify-around w-full gap-1 py-4 px-3">
        <div className="grid grid-flow-row gap-2">
          <label htmlFor="DateEX" className="text-center">
            Expiry Date
          </label>
          <input
            type="date"
            className="text-center text-sm py-3 border-b-2"
            id="DateEX"
            name="DateEX"
            required
          />
        </div>
        <input
          type="text"
          className="text-center border-b-2 py-3"
          name="CVV"
          placeholder="CVV"
          required
        />
      </div>
      <div className="my-4">
        <CardElement
          options={{
            style: {
              base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "#32325d",
                },
              },
              invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
              },
            },
          }}
        />
      </div>
      <div className="w-full absolute bottom-0 flex-shrink-0 flex justify-center">
        <button
          type="submit"
          className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3"
        >
          Make Payment
        </button>
      </div>
    </form>
  );
};

const BookingStepIV = () => {
  return (
    <div className="md:w-2/3 sm:w-4/5 text-center w-full h-full max-h-[90vh] bg-white text-violet-950 rounded-2xl relative overflow-x-scroll">
      <h1 className="py-4">Add a Card</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default BookingStepIV;

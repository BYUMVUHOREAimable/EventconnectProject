import React from 'react';
import './index.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import DesktopLanding from './layout/Landing';
import LandingPage from './layout/Landing';

import Sharing from './components/Sharing';

import AuthenticationService from './layout/Authenticating'
import SignInOption from './layout/SignInOption';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import Home from './layout/Venue/Home'
import BookPage from './layout/Venue/Book';
import BuyingTicketProcess from './layout/Venue/BuyTicketProcess';
import BookEvent from "./components/SubComponents/EventCard";
import BookEventTicket from "./components/Step4";
import Testing from './components/SubComponents/BookingSteptest'
import About from "./components/About";
import Missing from './components/Missing';
import Location from './components/Location';
import Notification from './components/Notification';
import EventCreation from './components/EventCreation';
import Services from './components/Services';
import ServicePlanners from './components/ServicePlanners';

import HomeDashboard from './components/HomeDashboard';
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import { Toaster } from 'react-hot-toast';
import Support from './components/Support';
import ContactUs from './components/SubComponents/ContactUs';
import ThankYou from './scenes/Thankyou/Thankyou';
import UserProfile from './components/UserProfile';
import TermsAndConditions from './components/TermsandConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step4';
import Step4 from './components/Step3';
import Step5 from './components/Step5';


function App() {
  return (
<div>
<Toaster />
    <Routes>
      <Route path='/' exact element={<DesktopLanding/>}/>
      <Route path='/' exact element={<LandingPage/>}/>
      <Route path='/options' exact element={<SignInOption/>}/>
      <Route path='/location' exact element={<Location/>}/>
      <Route path='/authentication' exact element={<AuthenticationService/>}>
          <Route index element={<Login/>} />
          <Route path='/authentication/signup' element={<SignUp/>} />
          <Route path='/authentication/reset_password/:id/:token' element={<ResetPassword/>} />
          <Route path='/authentication/forgot' element={ <ForgotPassword/>} />
      </Route>
      <Route path ='/home' exact element={<Home/>}/>
      <Route path ='/create' exact element={<EventCreation/>}/>
      <Route path='/bookVenue/:id' exact element={<BookPage />} />
        <Route path='/bookVenueTicket/:id' exact element={<BuyingTicketProcess />} />
        
        <Route path='/bookEvent/:id' exact element={<BookEvent />} /> 
       <Route path='/bookEventTicket/:id' exact element={<BookEventTicket/>}/> 
        
      <Route path='/Notification' exact element={<Notification />} />
        <Route path='/testing' exact element={<Testing />} />
        <Route path='/sharing' exact element={<Sharing />} />

        <Route path='/homeDashboard' exact element={<HomeDashboard />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/dashboard/profile" element={<UserProfile />} />
              <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Services />} />
        <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path ='/about' exact element={<About/>}/>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path ='/services' exact element={<Services />}/>
        <Route path='/planners' exact element={<ServicePlanners />} />
        <Route path='/support' exact element={<Support />} />
        <Route path='/contact' exact element={<ContactUs />} />
        <Route path='/termsandconditions' exact element={<TermsAndConditions />} />
        <Route path='/privacyandpolicy' exact element={<PrivacyPolicy />} />

        <Route path='/step1' exact element={<Step1 />} />
        <Route path='/step2' exact element={<Step2 />} />
        <Route path='/step3' exact element={<Step3 />} />
        <Route path='/step4' exact element={<Step4 />} />
        <Route path='/step5' exact element={<Step5 />} />
        <Route path='*' exact element={<Missing />} />
      </Routes>

      </div>
    
  );
}

export default App;


import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from '../components/layouts/public/main/Main';
import {
    Home,
    Mortgages,
    Loans,
    CreditCards,
    Blogs,
    Investments,
    Banking,
    Insurance,
    Contact,
    MoneyTransfers,
    CreditScore,
    Cards,
    Eligibility,
    Result,
    Result2,
    AgentsDirectory
  } from '../pages/public/'
import AgentsDirectoryDetails from '../pages/public/agents-directory-detail/AgentsDirectoryDetails';
import { AuthRoute,GuestRoute } from '../routes';  
// import "./AppVariables.scss";
import "./App.scss";

const App = () => {

  return (
            <Routes>
              <Route name="Main" path="/" element={<Main/>}>
                  <Route 
                    name="home-page"
                    index
                    element={<Home/>} 
                  />
                  <Route 
                    name="mortgages-page" 
                    path="mortgages" 
                    element={<Mortgages/>} 
                  />
                  <Route 
                    name="loans-page" 
                    path="loans" 
                    element={<Loans/>} 
                  />
                  <Route 
                    name="credit-cards-page" 
                    path="credit-cards" 
                    element={<CreditCards/>} 
                  />
                  <Route 
                    name="blogs-page" 
                    path="blogs" 
                    element={<Blogs/>} 
                  />
                  <Route 
                    name="investments-page" 
                    path="investments" 
                    element={<Investments/>} 
                  />
                  <Route 
                    name="banking-page" 
                    path="banking" 
                    element={<Banking/>} 
                  />
                  <Route 
                    name="insurance-page" 
                    path="insurance" 
                    element={<Insurance/>} 
                  />
                  <Route 
                    name="contact-page" 
                    path="contact" 
                    element={<Contact/>} 
                  />
                  <Route 
                    name="money-transfers-page" 
                    path="money-transfers" 
                    element={<MoneyTransfers/>} 
                  />

                  <Route 
                      name="credit-score-page" 
                      path="credit-score" 
                      element={<CreditScore/>} 
                  />

                  
                  <Route 
                      name="agent-directory-page" 
                      path="agent-directory" 
                      element={<AgentsDirectory/>} 
                  />

                  
                  <Route 
                      name="agent-directory-detail-page" 
                      path="agent-directory-detail" 
                      element={<AgentsDirectoryDetails/>} 
                  />

                  <Route 
                      name="cards" 
                      path="cards" 
                      element={<Cards/>} 
                  />
                  
                  <Route 
                      name="eligibiity" 
                      path="eligibiity" 
                      element={<Eligibility/>} 
                  />

                  <Route 
                      name="result" 
                      path="result" 
                      element={<Result/>} 
                  />
                  
                  <Route 
                      name="result2" 
                      path="result2" 
                      element={<Result2/>} 
                  />
                  
                  
                  {/* Auth-Routes */}
                  <Route name="profile" path="profile" element={<AuthRoute></AuthRoute>}/>

                  {/* Guest-Routes */}

                  <Route name="login" path="login" element={<GuestRoute></GuestRoute>}/>

              </Route>
            </Routes>
         );
}

export default App;

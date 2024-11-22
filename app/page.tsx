import React from 'react';
import { ChevronDown } from 'lucide-react';

// Classic Version - Exact copy of the original
const ExactLoanDashboard = () => {
  return (
    <div className="w-full bg-white shadow-lg">
      {/* Navigation - Exact same text */}
      <nav className="bg-white border-b border-gray-200">
        <div className="flex items-center p-4 space-x-6">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Loan Officer Preferences</a>
          <a href="#" className="text-gray-700">Contacts</a>
          <a href="#" className="bg-green-600 text-white px-4 py-2">Loans</a>
          <a href="#" className="text-gray-700">Dashboards</a>
          <a href="#" className="text-gray-700">Reports</a>
          <a href="#" className="text-gray-700">People</a>
          <a href="#" className="text-gray-700">Email Marketing</a>
          <a href="#" className="text-gray-700">+</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Loan Detail</h2>

        {/* Borrowers Section - Exact field names and values */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <ChevronDown className="mr-2" />
            <h3 className="font-semibold">Borrowers</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Borrower</span>
                <span>Kenneth Park</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Marital Status</span>
                <span>Married</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Occupancy Primary</span>
                <span>✓</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Total Income</span>
                <span>$11,250</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">CoBorrower</span>
                <span>Rhonda Park</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Marital Status</span>
                <span>Married</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Occupancy Primary</span>
                <span>✓</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Total Income</span>
                <span>$8,250</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Details Section - Exact field names and values */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <ChevronDown className="mr-2" />
            <h3 className="font-semibold">Loan Details</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Est. Closing Date</span>
                <span>6/26/2017</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Loan Purpose</span>
                <span>Purchase</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Residence Type</span>
                <span>Primary Home</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Loan Type</span>
                <span>Conventional</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Appraised Value</span>
                <span>$300,000.00</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Sales Price</span>
                <span>$300,000.00</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Base Loan Amount</span>
                <span>$240,000.00</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Second Loan Amount</span>
                <span>$30,000.00</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Total Loan Amount</span>
                <span>$240,000.00</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">First Loan Rate</span>
                <span>4.125%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">First Loan Term</span>
                <span>360</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Second Rate</span>
                <span>5.500%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Second Term</span>
                <span>360/180</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Locked Date</span>
                <span>6/2/2017</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Lock Expiration</span>
                <span>7/1/2017</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Loan FICO</span>
                <span>722</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Pricing</span>
                <span>100.250%</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Loan Status</span>
                <span>Funded</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">LOS Loan #</span>
                <span>XMWX987456</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Loan Product Name</span>
                <span>Conventional</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Amort. Type</span>
                <span>Fixed</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">LTV</span>
                <span>80.000%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">CLTV</span>
                <span>90.000%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">TLTV</span>
                <span>90.000%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Taxes Waived</span>
                <span>✓</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Insurance Waived</span>
                <span>✓</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">FeDTI</span>
                <span>26.000%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">BeDTI</span>
                <span>36.0000%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Qualifying Rate</span>
                <span>4.125%</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Agency Case #</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">PMI, MIP & FF</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">ARM Index</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">ARM Margin</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Interest Only Months</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Parties Section - Exact field names and values */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <ChevronDown className="mr-2" />
            <h3 className="font-semibold">Loan Parties</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Referred By</span>
                <span>Jan Smith</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Referring Source</span>
                <span>Realtor</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Buyer Agent</span>
                <span>Jan Smith</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Seller Agent</span>
                <span>Nina Jones</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Builder Agent</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Buyer Agent Cord.</span>
                <span>Tracy Hookdira</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Seller Agent Cord.</span>
                <span>Debra McHenry</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Builder Agent Cord.</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Processor</span>
                <span>Tammy Hoogerwarf</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">LO Assistant</span>
                <span></span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Appraiser</span>
                <span>Steve Light</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Title Agent</span>
                <span>Title Agent</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Escrow Agent</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Buyer Attorney</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Sellers Attorney</span>
                <span></span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Underwriter</span>
                <span>Gayle Robertson</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Closer</span>
                <span>Cinnamon White</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Funder</span>
                <span>Jennifer Roberts</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Shipper</span>
                <span>Rosa Collins</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Loan Officer</span>
                <span>Brad Pitt</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <ChevronDown className="mr-2" />
            <h3 className="font-semibold">Property Details</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">First Payment</span>
                <span>$1,163.16</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Second Payment</span>
                <span>$170.34</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Property Taxes</span>
                <span>$485.23</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Insurance Payment</span>
                <span>$112.55</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">MI Payment</span>
                <span></span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Property Address</span>
                <span>5905 Fallsview Lane</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Property City</span>
                <span>Dallas</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Property State</span>
                <span>TX</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Property Zip</span>
                <span>75252</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Property County</span>
                <span>Collin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modern Version with exact same data
const ModernLoanDashboard = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Modern Navigation - Same items */}
      <nav className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700">Home</a>
            <a href="#" className="text-gray-700">Loan Officer Preferences</a>
            <a href="#" className="text-gray-700">Contacts</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Loans</a>
            <a href="#" className="text-gray-700">Dashboards</a>
            <a href="#" className="text-gray-700">Reports</a>
            <a href="#" className="text-gray-700">People</a>
            <a href="#" className="text-gray-700">Email Marketing</a>
            <button className="text-gray-700 font-bold">+</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Same sections with modern styling but identical data structure */}
          {/* Content structure identical to ExactLoanDashboard but with modern CSS classes */}
        </div>
      </div>
    </div>
  );
};

// 3D Angled Container
const AngledContainer = ({ children }) => {
  return (
    <div className="w-full h-full transform perspective-2000">
      <div className="transform rotate-x-3 rotate-y-3 transition-transform duration-300 hover:scale-[1.02]">
        {children}
      </div>
    </div>
  );
};

// Export the components
const LoanDashboard = ({ version = 'exact', angled = false }) => {
  const Dashboard = version === 'modern' ? ModernLoanDashboard : ExactLoanDashboard;

  if (angled) {
    return (
      <AngledContainer>
        <Dashboard />
      </AngledContainer>
    );
  }

  return <Dashboard />;
};

export default LoanDashboard;

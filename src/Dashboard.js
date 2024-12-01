import React from 'react';

const Dashboard = () => {
  return (
    <div className="pt-20 p-6 bg-gray-100 min-h-screen">
      {/* pt-20 ensures space below the fixed navbar */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Section: Customer Info */}
        <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-lg font-bold">
              CB
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Hannibal Smith</h2>
              <p className="text-gray-500 text-sm">
                1 Market Street, San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Customer ID:</span>
              <span className="text-gray-800 font-semibold">12345</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email Address:</span>
              <span className="text-gray-800 font-semibold">rachel@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone Number:</span>
              <span className="text-gray-800 font-semibold">801-128-9005</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Loyalty Tier:</span>
              <span className="text-gray-800 font-semibold">Silver</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Segment:</span>
              <span className="text-gray-800 font-semibold">Sleepy Customer</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Lifetime Value:</span>
              <span className="text-gray-800 font-semibold">$1M</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Propensity to Purchase:</span>
              <span className="text-yellow-500 font-semibold">75%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Engagement Score:</span>
              <span className="text-green-500 font-semibold">80%</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Assign Another Agent
            </button>
            <button className="w-full bg-gray-200 text-gray-700 mt-4 py-2 rounded-lg hover:bg-gray-300">
              Add New Widget
            </button>
          </div>
        </div>

        {/* Middle Section: Conversations */}
        <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
          {/* Tabs */}
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div className="flex gap-6">
              <button className="text-blue-600 font-medium border-b-2 border-blue-600">
                Conversation
              </button>
              <button className="text-gray-500 hover:text-gray-800">Address Update</button>
              <button className="text-gray-500 hover:text-gray-800">Fee Reversal</button>
              <button className="text-gray-500 hover:text-gray-800">Rate</button>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Escalate
            </button>
          </div>

          {/* Conversation Messages */}
          <div className="space-y-4">
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-gray-800">Rachel Adams</p>
              <p>9:08 PM • Received by WhatsApp</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-gray-800">You</p>
              <p>9:10 PM • Sent by WhatsApp</p>
              <p className="mt-2">
                Thank you for reaching out! We'll get back to you shortly.
              </p>
            </div>
          </div>

          {/* Message Input */}
          <div className="mt-6">
            <textarea
              className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="3"
              placeholder="Type a message..."
            ></textarea>
            <div className="flex justify-between mt-4">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                  SMS
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                  WhatsApp
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300">
                  Email
                </button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3 space-y-6">
          {/* Ask Catura */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ask Catura</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">Greeting Template</p>
              <div className="flex justify-between mt-2 text-blue-600">
                <button className="hover:underline">Copy to Send</button>
                <button className="hover:underline">Preview</button>
              </div>
            </div>
            <textarea
              className="w-full border rounded-lg p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="3"
              placeholder="Type a message..."
            ></textarea>
          </div>

          {/* Action Launcher */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Action Launcher</h2>
            <div className="flex gap-4 mb-6">
              <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-300">
                Add Action
              </button>
              <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-300">
                Fee Reversal
              </button>
              <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-300">
                Retail Onboarding
              </button>
              <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-300">
                Address Update
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">Lorem ipsum dolor sit amet.</div>
              <div className="bg-gray-100 p-4 rounded-lg">Photo</div>
              <div className="bg-gray-100 p-4 rounded-lg">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

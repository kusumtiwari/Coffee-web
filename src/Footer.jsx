export default function Footer() {
  return (
    <div className="bg-orange-200 m-3 md:m-6">
      <div className="flex flex-col lg:flex-row m-4 p-8 md:justify-between">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="flex-1 pb-4">
            <h1 className="font-semibold pb-4">Solutions</h1>
            <h3 className="pb-2">Marketing</h3>
            <h3 className="pb-2">Analytics</h3>
            <h3 className="pb-2">Commerce</h3>
            <h3 className="pb-4">Insights</h3>
          </div>
          <div className="flex-1 pb-4">
            <h1 className="font-semibold pb-4">Support</h1>
            <h3 className="pb-2">Pricing</h3>
            <h3 className="pb-2">Documentation</h3>
            <h3 className="pb-2">Guides</h3>
            <h3>API Status</h3>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row">
          <div className="flex-1 pb-4">
            <h1 className="font-semibold pb-4">Company</h1>
            <h3 className="pb-2">Guides</h3>
            <h3 className="pb-2">About</h3>
            <h3 className="pb-2">Blog</h3>
            <h3 className="pb-2">Jobs</h3>
            <h3 className="pb-2">Press</h3>
            <h3 className="pb-2">Partners</h3>
          </div>
          <div className="flex-1 pb-4">
            <h1 className="font-semibold pb-4">Legal</h1>
            <h3 className="pb-2">Claim</h3>
            <h3 className="pb-2">Privacy</h3>
            <h3 className="pb-2">Terms</h3>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="border-t-2 border-orange-500 my-2 w-100 mx-4" />
      </div>
      <div className="flex flex-col md:flex-row p-3 md:p-8 justify-between">
         <div className="flex-1 h-30">
         <p className="text-gray-600 text-thin">2020 Your Company, Inc. All rights reserved.</p>
         </div>
         <div className="flex flex-row sm:py-4 md:py-0">
            <img src="facebook.png" alt="fb" className="pr-3" />
            <img src="twitter.png" alt="twitter" className="pr-3"/>
            <img src="instagram.png" alt="insta" className="pr-3"/>
            <img src="reddit.png" alt="reddit" className="pr-3"/>
         </div>
      </div>
    </div>
  );
}

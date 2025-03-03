const plansData = {
    topup: [
      { amount: 50, validity: "NA", description: "₹50 Talktime" },
      { amount: 100, validity: "NA", description: "₹100 Talktime" },
      { amount: 150, validity: "NA", description: "₹150 Talktime" },
    ],
    fulltalktime: [
      {
        amount: 200,
        validity: "28 days",
        description: "Unlimited calls + 1GB/day",
      },
      {
        amount: 300,
        validity: "56 days",
        description: "Unlimited calls + 2GB/day",
      },
      {
        amount: 499,
        validity: "84 days",
        description: "Unlimited calls + 1.5GB/day + 100SMS/day",
      },
    ],
    sms: [
      { amount: 30, validity: "7 days", description: "100 SMS/day" },
      { amount: 60, validity: "14 days", description: "200 SMS/day" },
      { amount: 90, validity: "28 days", description: "100 SMS/day + 1GB data" },
    ],
    data: [
      { amount: 50, validity: "1 day", description: "1GB 4G Data" },
      { amount: 150, validity: "7 days", description: "3GB 4G Data" },
      { amount: 249, validity: "28 days", description: "1.5GB/day 4G Data" },
    ],
    roaming: [
      { amount: 39, validity: "1 day", description: "Free Roaming Calls" },
      { amount: 149, validity: "7 days", description: "Free Roaming + 1GB Data" },
    ],
    other: [
      {
        amount: 399,
        validity: "28 days",
        description: "Netflix + Amazon Prime Access + 2GB/day",
      },
      {
        amount: 599,
        validity: "56 days",
        description: "All OTT Platforms + 2.5GB/day",
      },
    ],
  };
  
  export default plansData;
  
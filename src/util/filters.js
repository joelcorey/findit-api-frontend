function filter() {
    return [
        // SHORT TARGETED - UNWANTED PHRASES
        // inappropriate sexual related
        "Webcam models required", // example of long lived filter .. more generic
        "Bottom guy for top", // woah .. this is a job board, highly inappropriate!
        "looking for friend",

        "Shiftsmart",
        "PRODUCT MODELS",
        "WAREHOUSE ASSEMBLY",
        
        "Have a Facebook profile",
        "Receptionist",
        
        "5 minute",
        "survey",
        
        "customer service",
        
        "online survey",
        "Bilingual",
        
        "Piece of Mail",
        "edit videos",
        
        "Credit Help",
        "MOCK JURY",

        // Social media related
        "Looking for Social Media help in",
        "Social Media Assistant",

        // Sales and marketing related
        "internet marketer",
        "Internet Sales & Marketing",
        "sales agents",
        "marketing sales",
        "marketing job",
        "Media Marketing",
        "Marketing Associate",
        "work in sales",
        "Online Advertise",
        "Online Marketing",
        "Telemarketing",
        "Marketing Assistant",
        "Ad Sales",
        "Digital Marketing Opportunity",
        
        // Travel related
        "Travel Coordinator",
        "Travel Booking",
        "TRAVEL AGENT",
        "Travel Agent",
        "Travel Consultant",
        "TRAVEL AGENTS",
        "Book travel packages", // No, don"t want to do that!

        // "$100",
        // "$20",
        "$14/hr",

        "mobile home",
        "Female Expert",
        "Waitress Needed",
        "wedding photos",
        
        "Paddle Board Instructor)",
        "at craigslist",
        "Paralegal",
        "Labor omnia vincit!",
        "Flooring installer",
        "Electrical Apprenticeship",
        "Restaurant Depot",
        "APPT",
        "FROM YOUR CELL PHONE",
        "Appointment Setter",

        "Earn MONEY:",
        "MARKETERS!!!",

        "yelp", // Yelp sucks



        // LONG TARGETED - UNWANTED PHRASES
        "IT/Cybersecurity Training Grants with Job Placement Assistance.", // Semi-applicable but a bit spammy as this job posting had 30 plus postings .. all of which show up in the scraped results
        "Work Safely from Home, Online, Paid Weekly",
        "I AM IN A HOTEL AND I WANT TO USE CHROMECAST - I HAVE TRAVEL ROUTER", // An example of highly annoying more short term filter. Who the hell thinks it"s okay to use all caps like this.. savages.
        "Hiring aomeone to make asmr youtube videos", // Yikes! No thank you.
        "In Need of Social Media Help for Podcast",
        "Two individuals needed as partners in a web hosting business.",
        "Help Get Financing for a Letter of Credit that I Receive from Overseas", // Hello scammer!"
        "I NEED CODEIGNITER EXPERT", // Nothing wrong with CodeIgniter per say, but this post was just silly
        "Suggestions to fix the country",
        "Promote Texbot Ai Earn 100.00 A Day From Home",
        "Online research study for young adult smokers",
        "Looking for low-voltage expert",
        "WANTED HANDYMAN / CONTRACTOR",
        "Have you expunged or sealed a criminal case? We’ll pay you $50 to talk",
        "10 Easy GIGS Anyone Can Do To Make Money!",
        "Phone PC/MAC Repair Technician - Free Training",
        "This is a business, not a job. You are Guarantee to make money your fi",
        "Looking for Instagram Aficionado",
        "Apple device training",
        "Work Part time from Home...",
        "Earn an Extra $1K-$2K+ per month PT / $100K+ Annually FT (From Home!)",
        "Social Media Marketing Expert",
        "FOREX & STOCKS TRADER... LOOKING 4 PARTNERSHIP....",
        "EARN $$1000 IN DIGITAL CURRENCY",
        "Work from home marketing job - No college",
        "Looking for people to test my new Weight Loss Competition Mobile App!",
        "▬► Social Media Manager (Part Time)",
        "Service Field Technicians (North Milwaukee Area)",
        "Need Help with Physics Course",
        "Seeking Salesperson to close b2b clients for Video Production Company",
        "On-Air talent (Savvy woman)to host financial wellness YT/Podcast",
        "**WORK FROM HOME TELEPHONE MYSTERY SHOPPERS NEEDED**",
        "*Remote Work* Product Testing Legal Online Casinos $100-1,000",
        "***Make an Extra $500/Week Mailing Our Postcards***",
        "Adults Ages 60+ Make Money Sharing Your Expertise (Online)",
        "Curtsy is hiring a Customer Success Associate (Work From Home)",
        "NEED TELEPHONE LINES HOOKED UP ASAP TODAY IN WAKEFIELD",
        "Cakewalk by Bandlab",
        "Paid job looking for anybody with a tax number",
        "CASH for your opinion!",
        "Recovering text messages",
        "Weight Loss Competition Mobile App",
        "GREAT WORK FROM HOME OPPORTUNITY FOR MARKETERS!!!",
        "\"GET PAID TO TEXT\"",
        "Scheduling Interviews Today!",
        "Want a career in IT or Tech? We can help",
        "Work From Home - PT or FT",
        "Focus Group - Mock Jury",
        "needed :: defensive technical computer specialist",
        "Scheduling Interviews Today!",
        "Travel,work,play...",
        "Are you a Tech Expert? Get paid for your advice! (Work From Home)",
        "Website Admin Wanted Monroe LA BIG PERKS",
        "Website Admin Needed in MONROE LA",
        "Interviewing Today - PT or FT",
        "WRITE ME A 5 STAR REVIEW!",
        "Work your own hours in sales from home",
        "Mental Health Services - Business Partner",
        "Seeking Cook/Expediter",
        "Assistant for Rare Coin/ Card Store",
        "Get Paid To Receive Mail",
        "Get paid to receive mail",
        "Remote Call Center Job",
        "$5 amazon voucher for 15 mins chat with rideshare driver & freelancers",
        "Become a home based travel agent",
        "Covid 19 Cure - Work from Home $10 an hour.",
        "Get paid to share my videos!",
        "WORK ON CELL PH. Relief From COVID-19",
        "IT / Phone Installation Help Needed ASAP - Pay Cash",
        "Scheduling Interviews This Week",
        "Chinese Buyer - Hiring Now - FULL TIME",
        "Opportunity for Passive Income from your phone",
        "Autonomous Vehicle Operations Specialist | $23 per hour",
        "Become a Notary and get Notary Jobs",
        "Scheduling Interviews This Week!",
        "Earn by giving away vacation getaways!",
        "Freelance Consultant work from the comfort of your home",
        "Sales Position from the comfort of your home",
        "Be your own boss work your own hours, uncapped earning potential!",
        "RECEIVE $350! PAID ONLINE FOCUS GROUP",
        "$100/Week & $100/Gig - Social Media Manager",
        "GET PAID TO WATCH T-I-K T-O-K!!!",
        "Data Science Fellowship",
        "Software Engineering Fellowship",
        "sales position in the comfort of your own home",
        "work from your home as freelance consultant",
        "Content Creator Needed for Social Media",
        "#oneracethehumanrace Lets make a difference!",
        "Time to shine Bangor...Let's make a change!",
        "Time to make a difference",
        "attorney needed",
        "Digital & Affiliate Marketing",
        "Earn $1M in 6 months guaranteed",
        "Credit Agents Needed! Need to Fill Positions.",
        "Secret video will teach you an incredible Secret that ordinary people",
        "Looking $100 Opportunity",
        "Product Management Fellowship",
        "For $79.97 you can remove collections, turn a 400 credit score to 750+",
        "$50 Usability Workshops on 6/16",
        "Become a Certified Cloud Architect Professional",
        "Cloud Architect Career *ACT NOW*",
        "Independent Associates - Work Remotely",
        "Part Time Hustle - Remote Work From Home",
        "Appliance Repair Specialist",
        "Work Remote, $450-$1500 per week, 🚫 Cold Calling 🚫 MLM",
        "Have you ever applied/wanted to apply for a loan as a gig worker?",
        "REMOTE ONLINE - Send SMS Messages",
        "Become a Certified Linux+DevOps Professional",
        "Click on Websites/ 40 Clicks for $20 Per Month",
        "NEXT ONLINE DATA CABLE INFO SESSION, JULY 21ST, APPLY NOW!!",
        "$30 Social Media Set Up - REAPPLY IF YOU DID NOT RECEIVE A RESPONSE",
        "iPhone Mobile Application Testing Inside Shopping Malls: $25/hour",
        "NOW! Hiring Full-Time Auto Technician up to $25/hr. Paid Weekly!",
        "Work From Home With Your PC or Mobile Device!",
        "Make $50 With A Few Clicks - Business Development",
        "cPanel - Linux Technical Analyst", // normally this would be good .. but holy crap batman.. can you say SPAM !!
        "Automotive Technician",
        "A.I. Sports Startup seeks talented iOS engineer [remote position]", // normally good, post is spammy
        "Entry Level IT - Contract Position - Printer Installation",
        "Auto Mechanic Needed!!!",
        "Entry Level IT - Printer Installation Project",

        
    ];
}

module.exports = filter();
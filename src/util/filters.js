function filter() {
    return [
        'Webcam models required', // example of long lived filter .. more generic
        'Bottom guy for top', // woah .. this is a job board, highly inappropriate!
        'Online Advertise',
        'Online Marketing',
        'Shiftsmart',
        'PRODUCT MODELS',
        'WAREHOUSE ASSEMBLY',
        'Telemarketing',
        'Have a Facebook profile',
        'Receptionist',
        '5 Minute',
        'Survey',
        'Book travel packages', // No, don't want to do that!
        'IT/Cybersecurity Training Grants with Job Placement Assistance.', // Semi-applicable but a bit spammy as this job posting had 30 plus postings .. all of which show up in the scraped results
        'Work Safely from Home, Online, Paid Weekly',
        'I AM IN A HOTEL AND I WANT TO USE CHROMECAST - I HAVE TRAVEL ROUTER', // An example of highly annoying more short term filter. Who the hell thinks it's okay to use all caps like this.. savages.
        'Customer Service Representatives Needed',
        'TRAVEL AGENTS WANTED',
        'internet marketer',
        'Hiring aomeone to make asmr youtube videos', // Yikes! No thank you.
        'sales agents',
        'marketing sales',
        'In Need of Social Media Help for Podcast',
        'Two individuals needed as partners in a web hosting business.',
        'Help Get Financing for a Letter of Credit that I Receive from Overseas', // Hello scammer!'
        'I NEED CODEIGNITER EXPERT', // Nothing wrong with CodeIgniter per say, but this post was just silly

    ];
}

module.exports = filter();
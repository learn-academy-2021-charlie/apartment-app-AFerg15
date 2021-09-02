
user = [
    {
        email: 'testing@gmail.com',
        password: 'abcd123',
        password_confirmation: 'abcd123'
    },
    {
        email: 'testing1@gmail.com',
        password: 'abcd123',
        password_confirmation: 'abcd123'
    },
    {
        email: 'testing2@gmail.com',
        password: 'abcd123',
        password_confirmation: 'abcd123'
    }
]

user.each do |value|
    User.create value
end

tasks = [
    {
        title: 'Call the IRS',
        description: 'I have not yet recieved my stimulus check',
        category: 'Phone Calls',
        urgency: 'High',
        hours: '3-9',
     },
    {
        title: 'Steam clean my carpets',
        description: 'My dog has a bladder issue, I need help getting the pee smell out of my carpets',
        category: 'Home Cleaning',
        urgency: 'Medium',
        hours: '2',
    },
    {
        id: 3,
        title: 'Clean out Tortoise Tank',
        description: 'Tortoise tank needs to be emptied cleaned and refilled. Very heavy.',
        category: 'Pet Care',
        urgency: 'Low',
        hours: '3',
    }

]

# remember that we created a user when we signed up while testing devise

first_user = User.where(email: 'testing1@gmail.com').first

tasks.each do |value|
    first_user.tasks.create value
end
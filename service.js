const quotes = [
    {text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", author: "Steve Jobs"},
    {text: "The best way to predict the future is to invent it.", author: "Alan Kay"},
    {text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke"},
    {text: "The most important thing is to keep the most important thing the most important thing.", author: "Stephen Covey"},
    {text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci"},
    {text: "First, solve the problem. Then, write the code.", author: "John Johnson"},
    {text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde"},
    {text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel"},
    {text: "Code never lies, comments sometimes do.", author: "Ron Jeffries"}
];

export function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

export function registerUser(email, password) {
    console.log(`Registering user with email: ${email} and password: ${password}`);
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users)); //local storage only stores strings
}

export function loginUser(email, password) {
    console.log(`Logging in user with email: ${email} and password: ${password}`);
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(u => u.email === email && u.password === password);
}
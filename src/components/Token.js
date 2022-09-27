const tokens = [
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzNzQ1NTIyLCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzNzQxOTIyfQ.Y1vDMD8WcMBrj8vA0FmA-R6u1xAnH91agFlqcD0fVto",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzNzUwOTk0LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzNzQ3Mzk0fQ.N_82JUlLpu2cvy0E0H6rKBPR7FD6ILJ1eTmLn5fsNnU",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzNzUxMDMyLCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzNzQ3NDMyfQ.ZglTg6qyEEfheVG0wwWBbEFw3W4kX3HlGtKnVIdPd20",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzNzUxMDc4LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzNzQ3NDc4fQ.Sl_dghsRItUXwJ0-7nPrKCehCV3IIqBmL9BmYI2VU5A",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjYzNzUxMTA3LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNjYzNzQ3NTA3fQ.Z2-hmZHQIOjb6yd0sAfmCJ6y65Fxb9fomU8uAy6UFq0"
];

const generateToken = () => {
    let random = Math.floor(Math.random() * tokens.length)
    let randomWord = tokens[random]
    return randomWord;  
};

export default generateToken;
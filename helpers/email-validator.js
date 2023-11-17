const validateEmail = (email) => {

     const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

     return emailRegex.test(email);
}

module.exports = validateEmail
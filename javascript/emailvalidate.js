/* validate email address using regex 
    @param emailStr string the email address to validate
    @return boolean true if email address is valid, false otherwise
    @throws {Error} - if emailStr is not a string
    @throws {Error} - if emailStr is not a valid email address
*/
function validateEmail(emailStr) {
    if (!typeof emailStr === 'string') {
        throw new Error('parameter type must be a string');
    }
    if (!emailStr.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        throw new Error('parameter must be a valid email address');
    }
    return true;
}

module.exports = { validateEmail };



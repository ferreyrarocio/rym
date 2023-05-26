export default (userData) => {
    let errors= {}
//email

 if (!userData.email){
    errors.email= "State your email, traveler. It is required"};
    
  if (!/^[A-Z0-9.%+-]+@[A-Z0-9.]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email= "Your invalid email is unacceptable"};

  if (userData.email.length > 35) {
    errors.email= "Attention, spacefarer! Your email cannot surpass the 35 character limit"};
        
//password
    
 if (!/.*\d+.*/.test(userData.password)) {
    errors.p = "To ensure security, your password must contain at least one number"};
    
  if (!userData.password) {
    errors.p = "As a guardian of the space, I demand that you enter a password"};
 
 if (userData.password.length < 6 || userData.password.length > 10) {
        errors.p = "Protecting the galaxy requires passwords between 6-10 characters"};

return errors;

};


export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  
    if (!isEmailValid) return "Please enter a valid email address";
    if (!isPasswordValid) return "Password must be at least 8 characters long and contain at least one letter and one number";
  
    return null;
  };
  
export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name !== null) {
    const isvalidName = /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)+$/.test(name);
    if (!isvalidName) return "Name is not valid";
  }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};

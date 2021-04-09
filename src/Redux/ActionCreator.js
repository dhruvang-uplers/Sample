export const Sign_in = (mail, password) => {
  return { type: "Sign_in", payload: { mail, password } };
};

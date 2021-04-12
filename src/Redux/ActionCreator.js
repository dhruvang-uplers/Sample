export const Sign_in = (mail, password) => {
  return { type: "Sign_in", payload: { mail, password } };
};
export const Sign_Out = (mail, password) => {
  return { type: "Sign_Out", payload: { mail, password } };
};

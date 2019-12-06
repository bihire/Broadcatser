import bcryptjs from "bcryptjs";

const comparePassword = async ({ value, User }) => {
  const hashed = await bcryptjs.compare(value.password, User.password);
  return hashed;
};

export default comparePassword;

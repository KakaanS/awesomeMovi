import AuthProvider from "./AuthCtx";

// FUlly possible to have more context providers inside allctx to simplify the use of context

// eslint-disable-next-line react/prop-types
const AllCtx = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AllCtx;

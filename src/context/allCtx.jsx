import AuthProvider from "./AuthCtx";

// FUlly possible to have more context providers inside allctx to simplify the use of context

const AllCtx = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AllCtx;

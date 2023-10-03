import AuthProvider from "./AuthCtx";
import { BookmarkProvider } from "./BookMarkCtx";

// FUlly possible to have more context providers inside allctx to simplify the use of context

// eslint-disable-next-line react/prop-types
const AllCtx = ({ children }) => {
  return (
    <AuthProvider>
      <BookmarkProvider>{children}</BookmarkProvider>
    </AuthProvider>
  );
};

export default AllCtx;

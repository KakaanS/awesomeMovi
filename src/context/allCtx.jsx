import AuthProvider from "./AuthCtx";
import { BookmarkProvider } from "./BookMarkCtx";

const AllCtx = ({ children }) => {
  return (
    <AuthProvider>
      <BookmarkProvider>{children}</BookmarkProvider>
    </AuthProvider>
  );
};

export default AllCtx;

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
// import { useQuery } from "@tanstack/react-query";

// // const { isPending, error, data ,refetch} = useQuery({
// //     queryFn: () =>
// //       fetch('url').then((res) =>
// //         res.json(),
// //       ),
// //   })

function HomePage() {


  return (
    <div>
      {" "}
      <h1>Welcome to App</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default HomePage;

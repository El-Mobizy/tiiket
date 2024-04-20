import React from 'react';
import '../src/assets/css/globalStyles.scss';
import { SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/clerk-react';

function App() {
  const { user, isLoading } = useAuth();

  return (
    <>
      <h2 className="text-7xl text-center font-bold w-1/2 mx-auto mt-7">
        Welcome to the <span className="text-og_blue">TIIKET</span> app built by devs for devs
      </h2>
      <div className="text-center my-7 flex gap-2 justify-center">
        {!user && !isLoading && (
          <>
            <div className="standard-btn">
              <SignInButton afterSignInUrl="/dashboard" />
            </div>
            <div className="standard-btn">
              <SignUpButton afterSignInUrl="/dashboard" />
            </div>
          </>
        )}
        {user && !isLoading && (
          <div className="text-center">
            <UserButton />
            <a href="/dashboard" className="standard-btn">
              Go to Dashboard
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

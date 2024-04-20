import React from 'react';
import '../src/assets/css/globalStyles.scss';
import { SignInButton, SignUpButton, useUser } from '@clerk/clerk-react';

function App() {
  const { isSignedIn } = useUser();

  return (
    <>
      <h2 className="text-7xl text-center font-bold w-1/2 mx-auto mt-7">
        Welcome to the <span className="text-og_blue">TIIKET</span> app built by devs for devs
      </h2>
      <div className="text-center my-7 flex gap-2 justify-center">
        {!isSignedIn  ? (
          <>
            <div className="standard-btn">
              <SignInButton afterSignInUrl="/dashboard" />
            </div>
            <div className="standard-btn">
              <SignUpButton afterSignInUrl="/dashboard" />
            </div>
          </>
        ):(
            <div className="text-center">
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

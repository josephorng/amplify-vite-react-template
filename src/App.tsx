import React from "react";
import { uploadData } from "aws-amplify/storage";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [file, setFile] = React.useState();

  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <div>
            <input type="file" onChange={handleChange} />
            <button
              onClick={() =>
                uploadData({
                  path: `photos/${file.name}`,
                  data: file,
                })
              }
            >
              Upload
            </button>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
export default App;

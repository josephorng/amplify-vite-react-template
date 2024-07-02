import React from "react";
import { uploadData } from "aws-amplify/storage";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { DefaultStorageManagerExample } from "./storage_example";

function App() {
  const [file, setFile] = React.useState<File | null>();

  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    if (file) {
      uploadData({
        path: `photos/${file.name}`,
        data: file,
      });
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <DefaultStorageManagerExample></DefaultStorageManagerExample>
          <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUploadClick}>Upload</button>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
export default App;

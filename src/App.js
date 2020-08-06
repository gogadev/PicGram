import React, { useState } from "react";

import Title from "./components/title/Title";
import UploadForm from "./components/upload-form/UploadForm";
import ImageGrid from "./components/image-grid/ImageGrid";
import Modal from "./components/modal/Modal";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;

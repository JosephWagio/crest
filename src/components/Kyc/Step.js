import { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import { IoMdCloudUpload } from "react-icons/io";

export const Step1 = () => {
  return (
    <div className="step1">
      <p>
        Welcome to CREST HOLDINGS, Please Verify your Account by Clicking
        Proceed below. You can skip this page and return later when you are
        ready to complete the form.
      </p>
    </div>
  );
};
export const Step2 = () => {
  const { identificationType, setIdentificationType } = useContext(AuthContext);
  return (
    <div className="step2">
      <p>Please Select the Identification Document you want to upload</p>
      <div className="step2__input">
        <select
          value={identificationType}
          onChange={(e) => setIdentificationType(e.target.value)}
        >
          <option value="" disabled hidden>
            Please Select
          </option>
          <option value="national_id">National ID</option>
          <option value="passport">International Passport</option>
        </select>
      </div>
    </div>
  );
};
export const Step3 = () => {
  const {
    identificationDocument,
    setIdentificationDocument,
    handleFileChange,
    handleFileUpload,
    fileInputRef,
    handleDragOver,
    handleDrop,
  } = useContext(AuthContext);
  return (
    <div className="step2">
      <p>
        Please Upload a file with clear images of the front and back parts of
        your ID/Passport
      </p>
      <div
        className="step3__input"
        id="upload_box"
        onClick={handleFileUpload}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <IoMdCloudUpload />
        <span>Drag and drop a file here or click</span>
        {identificationDocument && identificationDocument.name ? (
          <img
            src={URL.createObjectURL(identificationDocument)}
            alt="Identification Document"
          />
        ) : (
          ""
        )}
      </div>
      <input
        type="file"
        // accept="image/*"
        hidden
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e, setIdentificationDocument)}
      />
    </div>
  );
};

export const Step4 = () => {
  const { addressDocumentType, setAddressDocumentType } =
    useContext(AuthContext);
  return (
    <div className="step2">
      <p>Please Share valid address document for our KYC review process</p>
      <div className="step2__input">
        <select
          value={addressDocumentType}
          onChange={(e) => setAddressDocumentType(e.target.value)}
        >
          <option value="" disabled hidden>
            Please Select
          </option>
          <option value="utility_bill">Utility Bill</option>
          <option value="bank_reference">Bank Reference</option>
          <option value="proof_of_residence">Proof of Residence</option>
          <option value="permit">Driver or Residence Permit</option>
        </select>
      </div>
    </div>
  );
};

export const Step5 = () => {
  const {
    addressDocument,
    setAddressDocument,
    handleAddressDocumentChange,
    handleAddressDocumentUpload,
    addressFileInputRef,
    handleDragOver,
    handleDropAddressDocument,
  } = useContext(AuthContext);
  return (
    <div className="step2">
      <p>
        Please Upload a file with clear images of the front and back parts of
        your ID/Passport
      </p>
      <div
        className="step3__input"
        id="upload_box"
        onClick={handleAddressDocumentUpload}
        onDragOver={handleDragOver}
        onDrop={handleDropAddressDocument}
      >
        <IoMdCloudUpload />
        <span>Drag and drop a file here or click</span>
        {addressDocument && addressDocument.name ? (
          <img
            src={URL.createObjectURL(addressDocument)}
            alt="Identification Document"
          />
        ) : (
          ""
        )}
      </div>
      <input
        type="file"
        // accept="image/*"
        hidden
        ref={addressFileInputRef}
        onChange={(e) => handleAddressDocumentChange(e, setAddressDocument)}
      />
    </div>
  );
};

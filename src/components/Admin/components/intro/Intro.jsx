import React, { useState } from 'react';
import { getToken } from '../../../../helper/FormHHelper';
import { jwtDecode } from '../../../../helper/jwtDecode';
import Editor from '../../../../helper/Editor';

const Intro = () => {
  const [images, setImages] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const token = getToken()
  const tokenDecode = jwtDecode(token)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div className="w-100">
      <div className="mt-2">
        <h2>Create Intro</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            {images && (
              <div className="form-group">
                <div className="text-start">
                  <img
                    src={URL.createObjectURL(images)}
                    alt="Product Photo"
                    className="img img-responsive rounded"
                    height="150px"
                  />
                </div>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="image" className="mb-2">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                className="form-control form-control-sm text-white"
                accept="image/*"
                onChange={(e) => setImages(e.target.files[0])}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="welcomeText" className="form-label">
              Welcome Text
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="welcomeText"
              value={welcomeText}
              onChange={(e) => setWelcomeText(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <Editor designation={designation} setDesignation={setDesignation} />
            <textarea
              className="form-control form-control-sm"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          {/* <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control form-control-sm"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div> */}
        </div>
        <div className="col-md-6 ps-5">
          <h3>Social Link</h3>
          <div className="mb-3">
            <label htmlFor="facebook" className="form-label">
              Facebook
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="facebook"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">
              Linkedin
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="github" className="form-label">
              Github
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="secondary-button" disabled={tokenDecode.role === 0} >
            Submit
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Intro;

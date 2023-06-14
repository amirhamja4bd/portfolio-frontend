import React, { useContext, useState } from 'react';
import './intro.css'
import { FaEdit , FaTrashAlt } from 'react-icons/fa';
import { getToken } from '../../../../helper/FormHHelper';
import { jwtDecode } from '../../../../helper/jwtDecode';
import { themeContext } from '../../../../Context';

const IntroList = () => {

    const { state } = useContext(themeContext);
    const { portfolioData } = state;
    const intros = portfolioData?.intro
    // console.log(intros)

    const [images, setImages] = useState("");
    const [resume, setResume] = useState(false);

    const token = getToken()
    const tokenDecode = jwtDecode(token)

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setResume(false);
        // Add logic to handle form submission
      };

    const handleButtonClick = () => {
        setResume(true);
      };

    return (
        <div>
            <div className="mt-2 d-flex justify-content-between">
                <h2 className='mt-2'>Intro List</h2>
                <div className="d-flex">
                <div className="mt-4">
                    <button className="main-btn" onClick={handleButtonClick}>Upload Resume</button>
                </div>
                <div className="mt-4 ms-3">
                    <a className="main-btn-fill" href="/dashboard/intro">Create Intro</a>
                </div>
                </div>
                {/* <h1>Lorem ipsum dolor</h1> */}
            </div>
            {resume && (
                <div className="card w-50 p-3 shadow border" style={{ background: 'var(--secondary-color)' }}>
                <form onSubmit={handleFormSubmit} >
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
                        <label htmlFor="image" className='mb-2 text-light'>Resume Upload</label>
                        <input
                        type="file"
                        id="image"
                        className="form-control form-control-sm text-white"
                        accept="image/*"
                        onChange={(e) => setImages(e.target.files[0])}
                        />
                    </div>
                    </div>
                    <button type="submit" className="secondary-button"  disabled={tokenDecode.role === 0} >Submit</button>
                </form>
                </div>
            )}
            <div className="mt-5">
                <div className="table-responsive card border"  style={{ background: 'var(--secondary-color)' }}>
                    <table className="table">
                    <thead>
                        <tr>
                        <th>file</th>
                        <th>image</th>
                        <th>welcomeText</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>designation</th>
                        <th>description</th>
                        <th>social</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={intros?.file?.secure_url} alt="" />
                            </td>
                            <td>
                                <img src={intros?.image?.secure_url} alt="" style={{height:'30px'}}/>
                            </td>
                            <td>{intros?.welcomeText}</td>
                            <td>{intros?.firstName}</td>
                            <td>{intros?.lastName}</td>
                            <td>{intros?.designation}</td>
                            <td>{intros?.description}</td>
                            <td>{intros?.designation}</td>
                            <td>
                            <div className=" d-flex " disabled={tokenDecode.role === 0}>
                                <a className="edit-btn" href="" ><FaEdit className='text-white'/></a>
                                <a className="delete-btn ms-2 pb-2" href="" ><FaTrashAlt className='text-white'/></a>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default IntroList;
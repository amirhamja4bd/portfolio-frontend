import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <div>
            <div id="education" className="education-wrapper py-5">
                <div className="container">
                    <div className="text-center pb-3">
                        <span className="subtitle">Educational Qualifications</span>
                        <h2>Education</h2>
                    </div>
                    <div className="row justify-content-between align-items-center mt-4">
                        {education.map((edu ,i)=> (
                            <div key={i} className="col-lg-6 mb-4">
                                <div className="card pt-4">
                                    <div className="card-body text-md-start text-center">
                                        <h3>{edu?.degree}</h3>
                                        <p> {edu?.institute} ({edu?.startingDate} - {edu?.endingDate})</p>
                                        <p>Passing Year: {edu?.passingYear}</p>
                                        <p>{i === 0 ? "CGPA" : "GPA"}: {edu?.gpa}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const education = [
    {
        _id: '1',
        degree: 'Diploma in Computer Engineering',
        institute: 'Bangladesh Polytechnic Institute, Rajshahi',
        startingDate: 2017,
        endingDate: 2021,
        passingYear: 2021,
        gpa: 3.66,
        description: 'My dream is to become a software engineer. I completed my diploma in computer engineering from this college.',
    },
    {
        _id: '2',
        degree: 'Secondary School Certificate (SSC)',
        institute: 'Jonail M. L. High School',
        startingDate: 2015,
        endingDate: 2017,
        passingYear: 2017,
        gpa: 3.86,
        description: 'I passed SSC from humanities department from this school.',
    }
]

export default Education;


// import React from 'react';

// const Education = () => {
//     return (
//         <div>
//             <div id="education" className="education-wrapper">
//                 <div className="container">
//                         <span className="subtitle">Educational Qualifications</span>
//                     <div className="row justify-content-between align-items-center mt-4">
//                     <div className="col-lg-6 ps-lg-5 text-center text-lg-start">
//                         <div className="my-3 my-lg-0">
//                         <h2>Education</h2>
//                         </div>

//                         <div className="mt-4">
//                         <p>As a MERN stack developer, I am passionate about building scalable high-quality web applications that deliver exceptional user experiences. With extensive experience in both front-end and back-end development, I have a strong understanding of the entire web development process and can confidently work on every layer of the stack.</p>
//                         <p>
//                         I am a quick learner and a team player who enjoys collaborating with cross-functional teams to deliver innovative solutions to complex problems. I am always looking for new challenges and opportunities to expand my skills and knowledge in the field of web development.</p>
//                         <p>
//                         If you're interested in discussing potential collaborations or have any questions about my experience, please feel free to reach out to me.</p>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 ps-lg-5 text-center text-lg-start">
//                         <div className="my-3 my-lg-0">
//                         <h2>Courses</h2>
//                         </div>

//                         <div className="mt-4">
//                         <p>As a MERN stack developer, I am passionate about building scalable high-quality web applications that deliver exceptional user experiences. With extensive experience in both front-end and back-end development, I have a strong understanding of the entire web development process and can confidently work on every layer of the stack.</p>
//                         <p>
//                         I am a quick learner and a team player who enjoys collaborating with cross-functional teams to deliver innovative solutions to complex problems. I am always looking for new challenges and opportunities to expand my skills and knowledge in the field of web development.</p>
//                         <p>
//                         If you're interested in discussing potential collaborations or have any questions about my experience, please feel free to reach out to me.</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Education;
import React from 'react';
import portfolio from "../../assets/portfolio/Portfolio.png";
import Ostad from "../../assets/portfolio/Ostad.png";
import Lead from "../../assets/portfolio/LeadEdocare.png";
import Zayan from "../../assets/portfolio/Zayan-Shop.png";
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from 'antd';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Details = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        navigate(-1);
      };

      const { id } = useParams();
      
      const PValue = [
        {
            _id: 1,
            thumbnail: portfolio,
            images: [portfolio, portfolio],
            title:  "Portfolio Website",
            description:  "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB..",
            technology: 'React, Next, MongoDb, Express Nodejs',
            tags: [ 'Reactjs', 'Ant Design' , ' Bootstrap',] ,
            liveLink: '#'
        },
        {
            _id: 2,
            thumbnail: Ostad,
            images: [Ostad, Ostad],
            title:  "Online Learning Management System",
            description: "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB.",
            technology: 'React, Next, MongoDb, Express Nodejs',
            tags: [ 'Reactjs' , 'Nextjs' , 'MongoDB' , 'Mongoose' , 'Express' , 'Tailwind css' , 'Ant Design' ,] ,
            liveLink: '#'
        },
        {
            _id: 3,
            thumbnail: Lead,
            images: [Lead, Lead],
            title:  "LMS for Children",
            description:  "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB.",
            technology: 'React, Next, MongoDb, Express Nodejs',
            tags: [ 'Reactjs' , 'Nextjs' , 'MongoDB' , 'Mongoose' , 'Express' , 'Tailwind css' , 'Ant Design' ,] ,
            liveLink: '#'
        },
        {
            _id: 4,
            thumbnail: Zayan,
            images: [Zayan, Zayan],
            title:  "Ecommerce Website",
            description: "Building engaging user interfaces with React, Next.js, and JavaScript. Developing server-side applications with Node.js, Express.js, and MongoDB. Creating end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js) Developing server-side applications with Node.js, Express.js, and MongoDB.",
            technology: 'React, Next, MongoDb, Express Nodejs',
            tags: [ 'Reactjs' , 'MongoDB' , 'Mongoose' , 'Express' , ' Bootstrap' , 'Ant Design' ,] ,
            liveLink: '#'
        },
    ]

    const project = PValue.find((p) => p._id === parseInt(id));

    return (
        <div className=''>
            {project && (
                <>
            <button className='secondary-button p-0 py-1 px-2 my-4' onClick={handleClick}> <FaArrowLeft/> Back</button>
            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="">
                    <h4 className='pb-4'>{project.title}</h4>
                    <p>{project.description}</p>
                    {project?.tags?.map((tag, i)=> (
                        <a  className='tag-btn my-2 mx-2'>{tag}</a>
                    ))}
                    </div>
                    <a href="" className='main-btn-fill ms-2 mt-4 '>Live Demo</a>
                </div>
                <div className="col-md-6">
                    <Image
                        preview={{
                        visible: false,
                        }}
                        width={600}
                        src={project.thumbnail}
                        onClick={() => setVisible(true)}
                    />
                    <div
                        style={{
                        display: 'none',
                        }}
                    >
                        <Image.PreviewGroup
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                        style={{ width: '1000px', height: '500px' }}
                        >
                        {project?.images?.map((img, i)=> (
                            <Image  key={i} src={img} />
                        ))}
                        </Image.PreviewGroup>
                    </div>
                </div>
            </div>
            </>
            )}
        </div>
    );
};

export default Details;
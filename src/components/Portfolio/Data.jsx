import portfolio from "../../assets/portfolio/Portfolio.png";
import portfolio1 from "../../assets/portfolio/Portfolio-details.png";
import Ostad from "../../assets/portfolio/OstadLms.png";
import Ostad2 from "../../assets/portfolio/OstadLms-coursePage.png";
import Ostad3 from "../../assets/portfolio/OstadLms-studentDashboard.png";
import Ostad4 from "../../assets/portfolio/OstadLms-adminDashboard.png";
import Lead from "../../assets/portfolio/LeadEdocare.png";
import Zayan from "../../assets/portfolio/Zayan-Shop.png";
import Zayan2 from "../../assets/portfolio/Zayan-Shop-shopping.png";
import Zayan3 from "../../assets/portfolio/Zayan-Shop-cart.png";
import Zayan4 from "../../assets/portfolio/Zayan-Shop-dashboard.png";

export const PValue = [
    {
        _id: 1,
        thumbnail: portfolio,
        images: [portfolio, portfolio1],
        title:  "Portfolio Website",
        description:  "<p>My Portfolio is an impressive full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) that showcases my skills, projects, and experience as a talented MERN stack developer. With a sleek and modern design, this application not only highlights my technical abilities but also provides a user-friendly and visually stunning experience.</p> <p>The front-end of My Portfolio is developed using React, a powerful JavaScript library for building interactive user interfaces. Leveraging the flexibility of React, I have created a seamless and intuitive navigation system that allows visitors to explore various sections of my portfolio effortlessly. From the captivating landing page to the detailed project showcases, every aspect of the user interface is carefully crafted to captivate and engage visitors.</p> <p>The back-end of My Portfolio is powered by Express.js and Node.js, providing a robust and scalable server architecture. With the integration of MongoDB, a highly efficient NoSQL database, I have seamlessly stored and retrieved project data, ensuring optimal performance and data consistency. The use of Mongoose, a MongoDB object modeling tool, has facilitated efficient interaction with the database, enabling seamless CRUD operations.</p> <p>To enhance the functionality and user experience of My Portfolio, I have incorporated several essential packages and libraries. React Router has been utilized for smooth navigation between different pages, ensuring a seamless browsing experience. The integration of JSON Web Token (JWT) ensures secure authentication and authorization for user interactions. Additionally, EmailJS has been incorporated to enable smooth and efficient communication between visitors and myself.</p> <p>To elevate the visual appeal of My Portfolio, I have integrated Bootstrap, a popular CSS framework, allowing for a responsive and mobile-friendly design. The use of Cloudinary, a cloud-based image and video management platform, enables hassle-free photo and file uploads, ensuring that my portfolio projects are presented in the best possible light.</p> <p>With the inclusion of dynamic content, such as project descriptions, screenshots, and links, visitors can gain a comprehensive understanding of my skills and expertise. Each project is meticulously showcased, highlighting my ability to develop scalable and aesthetically pleasing web applications.</p> <p>In conclusion, My Portfolio is a remarkable full-stack web application that not only exhibits my proficiency in the MERN stack but also reflects my creativity, attention to detail, and dedication to delivering outstanding user experiences. Through the integration of cutting-edge technologies and a visually appealing design, I have created a portfolio that stands out among the rest. Explore My Portfolio today and witness the seamless harmony of functionality and aesthetics!</p>",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'MongoDB' , 'Mongoose' , 'Express' , ' Bootstrap' , 'Ant Design' ,] ,
        type: "personal",
        liveLink: 'https://amirhamza.vercel.app/',
        social:
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/portfolio-frontend' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
    {
        _id: 2,
        thumbnail: Ostad,
        images: [Ostad, Ostad2 , Ostad3 , Ostad4 ,],
        title:  "Online Learning Management System",
        description: "<p> As a MERN stack developer, I had the incredible opportunity to contribute as a Frontend Developer for a groundbreaking project—a Learning Management System (LMS) software built using Next.js and Tailwind CSS. This project aimed to revolutionize the way students and teachers interact with learning materials and manage their educational activities. </p> <p> Our mission was clear: to design and develop a user-friendly platform that would empower both students and teachers to enhance their learning and teaching experiences. Leveraging the power of Next.js and Tailwind CSS, we created a seamlessly responsive and visually stunning application that would captivate users from the moment they logged in. </p> <p> At the core of this web application lies ReactJS, providing a dynamic and interactive user interface that ensures smooth navigation and efficient data handling. Leveraging the power of React Router, we crafted a seamless flow of pages, allowing users to effortlessly switch between different sections and functionalities of the platform. </p> <p> To ensure secure and authenticated access to the platform, we integrated JSON Web Tokens (JWT) for user authentication and authorization. This enabled us to implement robust security measures, safeguarding sensitive data and ensuring a trustworthy environment for both students and teachers. </p> <p> One of the key features we incorporated into the application was seamless communication between users. By leveraging the capabilities of EmailJS, we enabled teachers and students to exchange messages and notifications effectively. This feature proved to be crucial in promoting a collaborative learning environment and fostering clear and efficient communication. </p> <p> Managing rich media content was another critical aspect we addressed. We integrated Cloudinary to enable easy and efficient uploading of photos and PDF files, ensuring that users could effortlessly share and access essential learning materials. With the help of Multer and MongoDB, we successfully established a streamlined process for uploading and storing files securely, enhancing the overall learning experience. </p> <p> Tailwind CSS played a pivotal role in shaping the application's visual appeal and user experience. Leveraging its extensive utility classes, we meticulously crafted an aesthetically pleasing and intuitive design, ensuring that the platform was visually engaging and easy to navigate. </p> <p> As a team, we collaborated closely, effectively utilizing our skills and expertise to deliver a fully functional and user-friendly Learning Management Web Application. By combining the power of Next.js, Tailwind CSS, ReactJS, and an array of powerful libraries and tools, we successfully created a platform that empowers students and teachers alike to excel in their educational journey. </p> <p> By playing a vital role as a Frontend Developer, I contributed to the realization of this transformative project. My dedication to crafting clean and efficient code, along with my passion for creating delightful user experiences, allowed me to make meaningful contributions and take pride in the final result. </p> <p> I am thrilled to include this remarkable project in my portfolio, showcasing my expertise in MERN stack development, proficiency in Next.js and Tailwind CSS, and my ability to collaborate effectively in a team environment. The Learning Management Web Application embodies innovation, usability, and seamless functionality—a testament to the transformative power of technology in education. </p>",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'Nextjs' , 'MongoDB' , 'Mongoose' , 'Express' , 'Tailwind css' , 'Ant Design' ,] ,
        type: "team",
        liveLink: 'https://ostad-lms-frontend.vercel.app/',
        social: 
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
    {
        _id: 3,
        thumbnail: Lead,
        images: [Lead , Ostad2 , Ostad3 , Ostad4 ],
        title:  "LMS for Children",
        description:  "<p>The goal of this project is to develop an online child learning platform that will provide children with a fun and engaging way to learn. The platform will offer a variety of educational content, including games, activities, and videos, that are tailored to different age groups and learning styles.The target audience for this project is children aged 2-12. The platform will be designed to be both fun and educational, and it will be accessible to children of all abilities.</p>",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'Nextjs' , 'MongoDB' , 'Mongoose' , 'Express' , 'Tailwind css' , 'Ant Design' ,] ,
        type: "team",
        liveLink: 'https://edulms-frontend.vercel.app/',
        social:
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
    {
        _id: 4,
        thumbnail: Zayan,
        images: [Zayan, Zayan2 , Zayan3 , Zayan4],
        title:  "Ecommerce Website",
        description: "<p> Introducing ZAYANSHOP - Your Ultimate Shopping Destination </p> <p> Welcome to ZAYANSHOP, a cutting-edge eCommerce website designed to revolutionize your online shopping experience. Developed with the latest technologies and a meticulous attention to detail, our platform offers an array of essential features that cater to your every need. </p> <p> Immersive User Experience: Powered by Reactjs and enhanced with Tailwindcss, ZAYANSHOP boasts a sleek and intuitive user interface that will captivate your senses from the moment you land on our website. With seamless navigation and a visually stunning design, exploring our extensive product catalog has never been more enjoyable. </p> <p> Secure and Reliable: Rest assured that your privacy and security are our top priorities. Our authentication and authorization system, powered by JWT, ensures that only authorized users can access their accounts and make purchases. By utilizing industry-standard encryption protocols, your personal information and payment details remain confidential throughout the entire shopping journey. </p> <p> Comprehensive Product Catalog: Discover an unparalleled range of products on ZAYANSHOP. Our meticulously curated catalog spans diverse categories, ensuring that you find exactly what you're looking for. With efficient search functionality, you can quickly locate your desired items, while filters and sorting options allow you to refine your search based on price, creation date, and more. </p> <p> Seamless Shopping Experience: Create wishlists, add items to your shopping cart, and breeze through our streamlined checkout process. ZAYANSHOP integrates Braintree payment gateway, ensuring smooth and secure transactions with various payment options. Whether you're purchasing a single item or a cart full of goodies, our platform makes it effortless to complete your order. </p> <p> Efficient Order and Account Management: Stay in control of your purchases and easily manage your account with ZAYANSHOP's intuitive order and customer account management features. View your order history, track shipments, and enjoy hassle-free returns and exchanges. Our platform puts you at the center, empowering you to make informed decisions and effortlessly keep track of your shopping activities. </p> <p> ZAYANSHOP - Your Destination for Unparalleled Online Shopping: Experience the future of eCommerce with ZAYANSHOP. Join our ever-growing community of satisfied customers and embark on a journey of convenience, security, and unrivaled shopping pleasure. Start exploring today and discover a world of endless possibilities at your fingertips. </p>",
        technology: 'React, Next, MongoDb, Express Nodejs',
        tags: [ 'Reactjs' , 'MongoDB' , 'Mongoose' , 'Express' , ' Bootstrap' , 'Ant Design' ,] ,
        type: "personal",
        liveLink: 'https://zayanshop.vercel.app/',
        social:
            { 
                facebook: 'https://www.facebook.com/amirhamja360', 
                Linkedin: 'https://www.linkedin.com/in/amirhamja656/' , 
                githubClient: 'https://github.com/amirhamja4bd/' ,
                githubServer: 'https://github.com/amirhamja4bd/' ,
            }
    },
]
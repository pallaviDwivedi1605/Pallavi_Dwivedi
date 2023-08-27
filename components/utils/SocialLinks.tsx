import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SocialLinks = () => {
    const linkData = [
        {
          key: 1,
          img: "/images/linkedin.svg",
          name: "Linkedin",
          link: "https://www.linkedin.com/in/pallavidwivedi/",
        },
        {
          key: 2,
          img: "/images/gmail.svg",
          name: "Gmail",
          link: "mailto:dpallavi854@gmail.com",
        },
        {
          key: 3,
          img: "/images/github.svg",
          name: "Github",
          link: "https://github.com/pallaviDwivedi1605/",
        },
      ];
  return (
    <div className="flex justify-center items-center space-x-2 mt-5 md:mt-8">
      {linkData.map((obj) => (
        <Link
          href={obj.link}
          key={obj.key}
          className="h-20 w-20 flex flex-col items-center justify-center contact-link"
        >
          <div className="image-container">
            <Image
              src={obj.img}
              alt={obj.name}
              className="duration-500"
              width={50}
              height={50}
            />
          </div>
          <h2 className="h2_transformation font-bold text-gray-700">
            {obj.name}
          </h2>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks
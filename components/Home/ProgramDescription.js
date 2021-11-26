import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramDescription = ({
  imgSrc,
  name,
  heading,
  description,
  modules,
  quickLinks,
}) => {
  //console.log("Quick Links", { quickLinks });
  return (
    <div className="progrum-desc-wrapper">
      <div className="white-box">
        <h4>{name}</h4>
        <div className="row align-items-center pt-lg-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="program-img text-center">
              <Image
                // width={100}
                // height={100}
                layout="responsive"
                src={imgSrc}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="program-descrip-wrap">
              <h5>{heading}</h5>
              <p>{description}</p>

              <div className="program-modiule pt-3 pt-lg-5">
                <h5>Modules</h5>
                <span>(Current Module is highlighted)</span>
                <div className="modiule-btns">
                  {modules.map((module) => (
                    <div className="single-modiule-btn">
                      <a
                        href=""
                        className={`btn modulebtn ${
                          module.active ? "active" : ""
                        }`}
                      >
                        {module.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="quick-link pt-3 pt-lg-4">
                <h5>Quick Links</h5>
                {quickLinks.map((quickLink, index) => {
                  return (
                    <Link href={`${quickLink.link}`} key={index}>
                      {quickLink.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDescription;

import React from "react"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillBehanceSquare,
  AiOutlineInstagram,
} from "react-icons/ai"
import "../../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-title">
        <h1 className="title" data-title="MY SOCIAL ACOUNTS">
          My social acounts
        </h1>
      </div>

      <div className="icons">
        <div className="icon">
          <a href="">
            <AiFillFacebook />
          </a>
        </div>
        <div className="icon">
          <a href="">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href="">
            <AiFillTwitterSquare />
          </a>
        </div>
        <div className="icon">
          <a href="">
            <AiOutlineInstagram />
          </a>
        </div>
        <div className="icon">
          <a href="">
            <AiFillBehanceSquare />
          </a>
        </div>
      </div>

      <div
        className="copyright-msg text-center mt-8"
        style={{ fontSize: "16px", color: "white" }}
      >
        <p>
          Copyright Zakaria Reggab ©{new Date().getFullYear()} All rights
          reserved | made by{" "}
          <a
            href="https://www.linkedin.com/in/yasser-belatreche-6b450620a"
            target="_blanc"
            style={{ color: "#f2f4f3" }}
            className="font-bold"
          >
            Yasser
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer

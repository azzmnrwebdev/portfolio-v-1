import "./assets/css/index.css";
import "@splidejs/react-splide/css";
import skills from "./utils/Skills";
import emailjs from "@emailjs/browser";
import profileData from "./utils/Profile";
import educations from "./utils/Educations";
import Experiences from "./utils/Experiences";
import profile from "./assets/images/profile.jpeg";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ToastContainer, Bounce, toast } from "react-toastify";

const App = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [animateClass, setAnimateClass] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setAnimateClass("show");

    const timer = setTimeout(() => {
      setAnimateClass("hide");

      setTimeout(() => {
        setShowLoader(false);
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          form.current.reset();
          setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          toast.error("Failed to send message. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getInputClassName = (value) => {
    return `form-control ${value ? "has-value" : ""}`;
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {showLoader && (
        <div className={`loading-screen ${animateClass}`}>
          <h1 className="mb-1">Welcome To</h1>
          <h1 className="mb-2">Portfolio Website</h1>
          <p className="mb-0">Presented by Muhammad Azzam</p>
        </div>
      )}

      {/* Header */}
      <header id="header">
        <div className="container">
          <div className="image-wrapper">
            <img src={profile} width="100%" alt="Profile" />
          </div>

          <h5 className="title text-light">
            Hi, I'm {profileData.username} 👋
          </h5>
          <h6 className="subtitle">{profileData.position}</h6>
          <p className="description lh-base text-light px-md-5">
            {profileData.short_description}
          </p>
          <div className="row g-2">
            <div className="col-auto">
              <a
                href={profileData.cv_url}
                download
                className="btn btn-cv py-2 px-3 fw-semibold mt-3 d-flex align-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-cloud-arrow-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
                </svg>
                &nbsp;&nbsp;Download CV
              </a>
            </div>
            <div className="col-auto">
              <a
                href="#projects"
                className="btn btn-project py-2 px-3 fw-semibold mt-3 d-flex align-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                </svg>
                &nbsp;&nbsp;My Projects
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="text-down text-light d-flex justify-content-center align-items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-mouse-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0z" />
            </svg>
            <small>Click here for more</small>
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="pt-5">
        <div className="container">
          <h2 className="section-title mb-3">About Me</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: profileData.long_description,
            }}
          />
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="pt-4">
        <div className="container">
          <h2 className="section-title mb-3">Work Experience</h2>

          {/* Accordion */}
          {Experiences.map((project, index) => {
            const isSingle = Experiences.length === 1;
            const isLast = index === Experiences.length - 1;
            const classMargin = isSingle ? "mb-0" : isLast ? "mb-0" : "mb-3";

            return (
              <div
                key={index}
                className={`py-3 px-3 px-sm-4 rounded-3 accordion-custom ${classMargin}`}
              >
                <div className="d-flex justify-content-start align-items-start gap-3">
                  <img
                    src={project.logo}
                    width="60px"
                    height="60px"
                    className="object-fit-cover rounded"
                    alt={`Logo ${project.name}`}
                  />

                  <div className="d-flex flex-column flex-sm-row justify-content-start justify-content-sm-between align-items-start w-100">
                    <div>
                      <h6 className="fs-6 fw-bold text-light mb-0">
                        {project.name}
                      </h6>
                      <small className="text-light">{project.position}</small>
                    </div>

                    <small className="text-light">
                      <i>{project.date}</i>
                    </small>
                  </div>
                </div>

                <div
                  className="pt-3 pt-sm-0 description"
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pt-4">
        <div className="container">
          <h2 className="section-title mb-3">My Projects</h2>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pt-4">
        <div className="container">
          <h2 className="section-title mb-3">Skills & Tools</h2>

          {/* Splide JS */}
          <Splide
            aria-label="Skills & Tools"
            options={{
              perMove: 1,
              snap: true,
              drag: "free",
              type: "loop",
              gap: "1.5rem",
              arrows: false,
              autoplay: true,
              interval: 2500,
              autoWidth: true,
              pagination: false,
              pauseOnHover: true,
              pauseOnFocus: false,
              resetProgress: false,
            }}
          >
            {skills.map((skill, index) => (
              <SplideSlide key={index}>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <div
                    style={{
                      flexShrink: 0,
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="p-2 bg-white rounded"
                  >
                    <img
                      src={skill.image}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                      }}
                      alt={`Logo ${skill.name}`}
                    />
                  </div>
                  <small className="text-light">{skill.name}</small>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="pt-4">
        <div className="container">
          <h2 className="section-title mb-3">Education</h2>

          {/* List */}
          {educations.map((education, index) => {
            const isSingle = educations.length === 1;
            const isLast = index === educations.length - 1;
            const classMargin = isSingle ? "mb-0" : isLast ? "mb-0" : "mb-3";

            return (
              <div
                key={index}
                className={`py-3 px-3 px-sm-4 rounded-3 accordion-custom ${classMargin}`}
              >
                <div className="d-flex justify-content-start align-items-start gap-3">
                  <img
                    src={education.logo}
                    width="60px"
                    height="60px"
                    className="object-fit-cover rounded"
                    alt={`Logo ${education.name}`}
                  />

                  <div className="d-flex flex-column flex-sm-row justify-content-start justify-content-sm-between align-items-start w-100">
                    <div>
                      <h6 className="fs-6 fw-bold text-light mb-0">
                        {education.name}
                      </h6>
                      <small className="text-light">{education.position}</small>
                    </div>

                    <small className="text-light">
                      <i>{education.date}</i>
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-5">
        <div className="container">
          <h1 className="title">Let's Work Together</h1>
          <p className="description">
            Ada proyek atau ide yang ingin dikembangkan? Saya terbuka untuk
            ngobrol lebih lanjut, saya akan dengan senang hati berkolaborasi
            untuk mewujudkannya bersama Anda.
          </p>

          <form ref={form} className="row g-3 mt-3" onSubmit={sendEmail}>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="fullname"
                className={getInputClassName(formData.fullname)}
                placeholder="full name"
                required
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="email"
                name="email"
                className={getInputClassName(formData.email)}
                placeholder="email address"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                name="subject"
                className={getInputClassName(formData.subject)}
                placeholder="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                className={getInputClassName(formData.message)}
                rows="5"
                placeholder="message"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="col-12">
              {isLoading ? (
                <button className="btn btn-custom" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status" className="ms-2">
                    Sending...
                  </span>
                </button>
              ) : (
                <button type="submit" className="btn btn-custom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                  &nbsp;&nbsp;Send Message
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-light py-4">
        <div className="container text-center d-sm-none">
          <p className="mb-0">
            Copyright © {new Date().getFullYear()} Azzmnrdev.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="container text-center d-none d-sm-block">
          <p className="mb-0">
            Copyright © {new Date().getFullYear()} Azzmnrdev. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Button To Top */}
      <button
        className="btn p-0 d-none d-sm-flex align-items-sm-center justify-content-sm-center"
        style={{
          right: "20px",
          width: "40px",
          border: "none",
          height: "40px",
          bottom: "20px",
          outline: "none",
          color: "#212529",
          cursor: "pointer",
          position: "fixed",
          backgroundColor: "#32cd32",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
          />
        </svg>
      </button>

      {/* Menu Bottom */}
      <div className="container">
        <div
          id="menuBottom"
          className="d-flex flex-nowrap justify-content-center align-items-center gap-1 bg-white p-2 rounded-pill"
          style={{
            left: "50%",
            bottom: "20px",
            position: "fixed",
            transform: isVisible
              ? "translateX(-50%) translateY(0)"
              : "translateX(-50%) translateY(20px)",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          <div className="item">
            <a href="/" className="text-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
            </a>
          </div>
          <div className="item">
            <a
              href="https://www.linkedin.com/in/azzmnralwmansyr/"
              target="_blank"
              className="text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
          <div className="item">
            <a
              href="https://github.com/azzmnrwebdev"
              target="_blank"
              className="text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </div>
          <div className="item">
            <a
              href="https://wa.me/6285175067273"
              target="_blank"
              className="text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
          <div className="item">
            <a
              href="https://www.instagram.com/azzmnralwmansyr/"
              target="_blank"
              className="text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default App;

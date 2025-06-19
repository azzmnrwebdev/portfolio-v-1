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
  const descriptionRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [collapsingIndex, setCollapsingIndex] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleDescription = (index) => {
    if (activeIndex === index) {
      setCollapsingIndex(index);
      setTimeout(() => setCollapsingIndex(null), 400);
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    Experiences.forEach((_, i) => {
      const el = descriptionRefs.current[i];
      if (!el) return;

      if (activeIndex === i) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "0px";
      }
    });
  }, [activeIndex]);

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
            dangerouslySetInnerHTML={{ __html: profileData.long_description }}
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
                onClick={() => toggleDescription(index)}
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
                  ref={(el) => (descriptionRefs.current[index] = el)}
                  style={{ overflow: "hidden", transition: "height 0.4s ease" }}
                >
                  <div
                    className={`description ${
                      activeIndex === index || collapsingIndex === index
                        ? "pt-3 pt-sm-0"
                        : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>
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

      {/* Button to top */}
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

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default App;

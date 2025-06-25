import i18n from "i18next";
import "./assets/css/index.css";
import "@splidejs/react-splide/css";
import skills from "./utils/Skills";
import emailjs from "@emailjs/browser";
import profileData from "./utils/Profile";
import educations from "./utils/Educations";
import Experiences from "./utils/Experiences";
import { tabs, projects } from "./utils/Projects";
import profile from "./assets/images/profile.jpeg";
import { useEffect, useRef, useState } from "react";
import NoThumbnail from "./assets/images/projects/empty.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ToastContainer, Bounce, toast } from "react-toastify";
import EnglishFlag from "./assets/images/language/english.png";
import { useTranslation, initReactI18next } from "react-i18next";
import IndonesianFlag from "./assets/images/language/indonesia.png";

i18n.use(initReactI18next).init({
  resources: {
    id: {
      translation: {
        headerTitle: "Hai, saya",
        headerDescription: profileData.short_description_id,
        titleBtnCV: "Unduh CV",
        titleBtnProject: "Jelajahi Proyek",
        titleBtnScrollDown: "Klik untuk info lebih lanjut",
        aboutTitle: "Tentang Saya",
        aboutContent: profileData.long_description_id,
        experienceTitle: "Pengalaman Kerja",
        projectTitle: "Proyek Saya",
        projectDescription:
          "Jelajahi proyek yang telah saya kerjakan sejauh ini.",
        projectSource: "sumber",
        projectResult: "hasil",
        skillTitle: "Keahlian & Alat",
        educationTitle: "Pendidikan",
        contactTitle: "Mari Bekerja Sama",
        contactDescription: `Ada proyek atau ide yang ingin dikembangkan? Saya terbuka untuk
            ngobrol lebih lanjut, saya akan dengan senang hati berkolaborasi
            untuk mewujudkannya bersama Anda.`,
        inputFullname: "nama lengkap",
        inputEmail: "alamat email",
        inputSubject: "subjek",
        inputMessage: "pesan",
        titleBtnContact: "Kirim Pesan",
        titleBtnContactLoading: "Mengirim...",
        bottomSheetRole: "Peran",
        bottomSheetClient: "Klien",
        bottomSheetPeriod: "Periode",
        bottomSheetTechno: "Teknologi",
        bottomSheetResult: "Hasil",
        bottomSheetDescription: "Deskripsi",
      },
    },
    en: {
      translation: {
        headerTitle: "Hi, I'm",
        headerDescription: profileData.short_description_en,
        titleBtnCV: "Download CV",
        titleBtnProject: "Explore Projects",
        titleBtnScrollDown: "Click here for more",
        aboutTitle: "About Me",
        aboutContent: profileData.long_description_en,
        experienceTitle: "Work Experience",
        projectTitle: "My Projects",
        projectDescription: "Explore the projects I've worked on so far.",
        projectSource: "source",
        projectResult: "result",
        skillTitle: "Skills & Tools",
        educationTitle: "Education",
        contactTitle: "Let's Work Together",
        contactDescription: `Got a project or idea you want to work on? Let's chat. I'd love to collaborate and bring it to life together!`,
        inputFullname: "full name",
        inputEmail: "email address",
        inputSubject: "subject",
        inputMessage: "message",
        titleBtnContact: "Send Message",
        titleBtnContactLoading: "Sending...",
        bottomSheetRole: "Role",
        bottomSheetClient: "Client",
        bottomSheetPeriod: "Period",
        bottomSheetTechno: "Technology",
        bottomSheetResult: "Result",
        bottomSheetDescription: "Description",
      },
    },
  },
  lng: "id",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const form = useRef();
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [animateClass, setAnimateClass] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeProject, setActiveProject] = useState(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  // Loading Screen
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

  // Project
  const filteredProjects = projects.filter(
    (project) => project.tabId === activeTab
  );

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowBottomSheet(true);
  };

  const handleCloseBottomSheet = () => {
    const bottomSheet = document.querySelector(".bottom-sheet");
    const overlay = document.querySelector(".bottom-sheet-overlay");

    if (bottomSheet && overlay) {
      bottomSheet.classList.add("closing");
      overlay.classList.add("closing");

      setTimeout(() => {
        setShowBottomSheet(false);
        setActiveProject(null);

        bottomSheet.classList.remove("closing");
        overlay.classList.remove("closing");
      }, 300);
    }
  };

  // Contact
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

  // Button To Top
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

  // Translate
  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "id" : "en";

    i18n.changeLanguage(newLanguage).then(() => {
      setIsEnglish(!isEnglish);
    });
  };

  return (
    <>
      {showLoader && (
        <div className={`loading-screen ${animateClass}`}>
          <h1 className="mb-1">Welcome To</h1>
          <h1 className="mb-2">Portfolio Website</h1>
          <p className="mb-0">Presented By Muhammad Azzam</p>
        </div>
      )}

      {/* Header */}
      <header id="header">
        <div className="container">
          <div className="image-wrapper">
            <img src={profile} width="100%" alt="Profile" />
          </div>

          <h5 className="title text-light">
            {t("headerTitle")} {profileData.username} 👋
          </h5>
          <h6 className="subtitle">{profileData.position}</h6>
          <p className="description lh-base px-md-5">
            {t("headerDescription")}
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
                &nbsp;&nbsp;{t("titleBtnCV")}
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
                &nbsp;&nbsp;{t("titleBtnProject")}
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="text-down d-flex justify-content-center align-items-center gap-2"
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
            <small>{t("titleBtnScrollDown")}</small>
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="pt-5">
        <div className="container">
          <h2 className="section-title mb-3">{t("aboutTitle")}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: t("aboutContent"),
            }}
          />
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <h2 className="section-title mb-3">{t("experienceTitle")}</h2>

          {/* Accordion */}
          {Experiences.map((experience, index) => {
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
                    src={experience.logo}
                    width="60px"
                    height="60px"
                    className="object-fit-cover rounded"
                    alt={`Logo ${experience.name}`}
                  />

                  <div className="d-flex flex-column flex-sm-row justify-content-start justify-content-sm-between align-items-start w-100">
                    <div>
                      <h6 className="fs-6 fw-bold text-light mb-0">
                        {experience.name}
                      </h6>
                      <small style={{ color: "#dee2e6" }}>
                        {experience.position}
                      </small>
                    </div>

                    <small style={{ color: "#dee2e6" }}>
                      <i>
                        {isEnglish ? experience.date_en : experience.date_id}
                      </i>
                    </small>
                  </div>
                </div>

                <div
                  className="pt-3 pt-sm-0 description"
                  dangerouslySetInnerHTML={{
                    __html: isEnglish
                      ? experience.description_en
                      : experience.description_id,
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <h1 className="title">{t("projectTitle")}</h1>
          <p className="description">{t("projectDescription")}</p>

          {/* Tabs */}
          <div
            id="tabs"
            style={{ backgroundColor: "#343a40", scrollbarWidth: "none" }}
            className="py-3 rounded-top-4 d-flex flex-nowrap justify-content-around align-items-center overflow-auto mt-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tabs-button bg-transparent border-0 text-light text-nowrap px-4 ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* List Data */}
          <div className="mt-3">
            {filteredProjects.length > 0 ? (
              <div className="row row-cols-1 row-cols-sm-2 g-3">
                {filteredProjects.map((project, index) => {
                  const thumbnail = project.files.find(
                    (file) => file.isThumbnail
                  );

                  const imageSrc =
                    project.files.length === 0 || !thumbnail
                      ? NoThumbnail
                      : thumbnail.path;

                  return (
                    <div key={index} className="col">
                      <div className="card border-0 rounded-0 bg-transparent">
                        <div className="card-body p-0">
                          <div
                            className="ratio ratio-16x9 mb-3"
                            onClick={() => handleProjectClick(project)}
                          >
                            <img
                              src={imageSrc}
                              style={{ objectPosition: "top" }}
                              className="img-fluid object-fit-cover rounded-3"
                              alt="Thumbnail"
                            />
                          </div>
                          {(project.link_github || project.link_demo) && (
                            <div className="d-flex justify-content-start align-items-center gap-3 mb-2">
                              {project.link_github && (
                                <a
                                  href={project.link_github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ fontSize: "14px", color: "#32cd32" }}
                                  className="text-decoration-none d-flex align-items-center"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-github"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                  </svg>
                                  &nbsp;&nbsp;{t("projectSource")}
                                </a>
                              )}
                              {project.link_demo && (
                                <a
                                  href={project.link_demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ fontSize: "14px", color: "#32cd32" }}
                                  className="text-decoration-none d-flex align-items-center"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-tv-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2" />
                                  </svg>
                                  &nbsp;&nbsp;{t("projectResult")}
                                </a>
                              )}
                            </div>
                          )}
                          <h5
                            className="card-title text-light lh-base"
                            onClick={() => handleProjectClick(project)}
                          >
                            {project.name}
                          </h5>
                          <p className="card-text lh-base">
                            {isEnglish
                              ? project.description_en
                              : project.description_id}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Tidak ada project untuk kategori ini</p>
            )}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ paddingTop: "0" }}>
        <div className="container">
          <h2 className="section-title mb-3">{t("skillTitle")}</h2>

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
      <section id="education" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <h2 className="section-title mb-3">{t("educationTitle")}</h2>

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
                        {isEnglish ? education.name_en : education.name_id}
                      </h6>
                      <small style={{ color: "#dee2e6" }}>
                        {isEnglish
                          ? education.position_en
                          : education.position_id}
                      </small>
                    </div>

                    <small style={{ color: "#dee2e6" }}>
                      <i>{isEnglish ? education.date_en : education.date_id}</i>
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
          <h1 className="title">{t("contactTitle")}</h1>
          <p className="description">{t("contactDescription")}</p>

          <form ref={form} className="row g-3 mt-3" onSubmit={sendEmail}>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="fullname"
                className={getInputClassName(formData.fullname)}
                placeholder={t("inputFullname")}
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
                placeholder={t("inputEmail")}
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
                placeholder={t("inputSubject")}
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
                placeholder={t("inputMessage")}
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
                    {t("titleBtnContactLoading")}
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
                  &nbsp;&nbsp;{t("titleBtnContact")}
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
          className="d-flex flex-nowrap justify-content-center align-items-center gap-1 bg-light p-2 rounded-pill"
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
          <div
            className="item"
            onClick={toggleLanguage}
            style={{ cursor: "pointer" }}
          >
            <img
              src={isEnglish ? EnglishFlag : IndonesianFlag}
              height="24px"
              className="object-fit-cover"
              alt="Language"
            />
          </div>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div
        className={`bottom-sheet-overlay ${showBottomSheet ? "show" : ""}`}
        onClick={handleCloseBottomSheet}
      />

      <div className={`bottom-sheet ${showBottomSheet ? "show" : ""}`}>
        {activeProject && (
          <>
            <div className="bottom-sheet-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">{activeProject.name}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                stroke="currentColor"
                strokeWidth="1"
                onClick={handleCloseBottomSheet}
                style={{ cursor: "pointer" }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>

            <div className="bottom-sheet-body">
              <div className="ratio ratio-16x9 mb-4">
                {activeProject.files.some((f) => f.type === "video") ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={
                      activeProject.files.find((f) => f.type === "video").path
                    }
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-3"
                  ></iframe>
                ) : activeProject.files.some(
                    (f) => f.type === "image" && f.isThumbnail
                  ) ? (
                  <img
                    src={
                      activeProject.files.find(
                        (f) => f.type === "image" && f.isThumbnail
                      ).path
                    }
                    style={{ objectPosition: "top" }}
                    className="img-fluid object-fit-cover rounded-3"
                    alt="Thumbnail"
                  />
                ) : (
                  <img
                    src={NoThumbnail}
                    style={{ objectPosition: "top" }}
                    className="img-fluid object-fit-cover rounded-3"
                    alt="No Thumbnail"
                  />
                )}
              </div>

              <div
                className="table-responsive mb-4"
                style={{ scrollbarWidth: "none" }}
              >
                <table className="table table-borderless text-nowrap mb-0">
                  <tbody>
                    <tr>
                      <td className="ps-0 pe-2 py-1 d-flex align-items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        {t("bottomSheetRole")}
                      </td>
                      <td className="px-1 py-1">:</td>
                      <td className="px-0 py-1">{activeProject.role}</td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2 py-1 d-flex align-items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        {t("bottomSheetClient")}
                      </td>
                      <td className="px-1 py-1">:</td>
                      <td className="px-0 py-1">{activeProject.client}</td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2 py-1 d-flex align-items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-calendar-event"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                        {t("bottomSheetPeriod")}
                      </td>
                      <td className="px-1 py-1">:</td>
                      <td className="px-0 py-1">
                        {isEnglish
                          ? activeProject.period_en
                          : activeProject.period_id}
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2 py-1 d-flex align-items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-wrench-adjustable"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" />
                          <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                        </svg>
                        {t("bottomSheetTechno")}
                      </td>
                      <td className="px-1 py-1">:</td>
                      <td className="px-0 py-1">{activeProject.technology}</td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2 py-1 d-flex align-items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                        {t("bottomSheetResult")}
                      </td>
                      <td className="px-1 py-1">:</td>
                      <td className="px-0 py-1">
                        {activeProject.link_demo ? (
                          <a
                            href={activeProject.link_demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            {activeProject.link_demo}
                          </a>
                        ) : (
                          <span className="text-danger">
                            {isEnglish
                              ? activeProject.status_demo_en
                              : activeProject.status_demo_id}
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0 pe-2 py-1 d-flex align-items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                        Github
                      </td>
                      <td className="px-1 py-1">:</td>
                      <td className="px-0 py-1">
                        {activeProject.link_github ? (
                          <a
                            href={activeProject.link_github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            {activeProject.link_github}
                          </a>
                        ) : (
                          <span className="text-danger">
                            {isEnglish
                              ? activeProject.status_github_en
                              : activeProject.status_github_id}
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="description">
                <h6 style={{ fontSize: "18px" }}>
                  {t("bottomSheetDescription")}
                </h6>
                <p className="mb-0">
                  {isEnglish
                    ? activeProject.description_en
                    : activeProject.description_id}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default App;

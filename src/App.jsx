import { useEffect, useState } from "react";
import { profile, experience, projects, credentials, skills, education } from "./data.js";

const sections = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["work", "Work"],
  ["certs", "Credentials"],
  ["contact", "Contact"],
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function Photo() {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="photo fallback" aria-hidden="true">{profile.initials}</div>
  ) : (
    <img className="photo" src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} onError={() => setFailed(true)} />
  );
}

function Shot({ src, caption }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="shot missing">Add screenshot: public{src}</div>;
  return (
    <figure className="shot">
      <img src={src} alt={caption} loading="lazy" onError={() => setFailed(true)} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);
  if (!project) return null;
  const hasLink = project.link && project.link !== "#";
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={project.name} onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">&times;</button>
        <h3>{project.name}</h3>
        <p className="mwhat">{project.what}</p>
        <p className="mstack">{project.stack}</p>
        <div className="shots">
          {project.images.map((im) => <Shot key={im.src} {...im} />)}
        </div>
        {hasLink && (
          <a className="viewbtn solid" href={project.link} target="_blank" rel="noopener noreferrer">Open project</a>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const active = useActiveSection(sections.map(([id]) => id));
  const [open, setOpen] = useState(null);

  return (
    <div className="wrap">
      <aside className="rail">
        <Photo />
        <h1>
          {profile.firstName} <b>{profile.lastName}</b>
        </h1>
        <p className="role">{profile.role}</p>
        <nav aria-label="Sections">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>
              {label}
            </a>
          ))}
        </nav>
        <div className="social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.resume}>Resume</a>
        </div>
      </aside>

      <main>
        <section id="about">
          <h2>About</h2>
          <p className="lead">{profile.lead}</p>
          <p>{profile.about}</p>
          <div className="stats">
            <div className="stat"><b>9.30</b><span>CGPA, B.Tech CSE</span></div>
            <div className="stat"><b>{credentials.length}</b><span>Certifications</span></div>
            <div className="stat"><b>{projects.length}</b><span>Projects built</span></div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="pills">
            {skills.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {experience.map((x) => (
            <div className="row" key={x.title}>
              <time>{x.time}</time>
              <div>
                <h3>{x.title}</h3>
                {x.text && <p>{x.text}</p>}
                {x.points && (
                  <ul className="points">
                    {x.points.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          {education.map((x) => (
            <div className="row" key={x.title}>
              <time>{x.time}</time>
              <div>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="work">
          <h2>Selected work</h2>
          {projects.map((p) => (
            <article className="spec" key={p.name}>
              <h3>{p.name}</h3>
              <dl>
                <dt>What</dt><dd>{p.what}</dd>
                <dt>Stack</dt><dd>{p.stack}</dd>
                <dt>Proof</dt><dd><button className="viewbtn" onClick={() => setOpen(p)}>View project</button></dd>
              </dl>
            </article>
          ))}
        </section>

        <section id="certs">
          <h2>Credentials</h2>
          <ul className="list">
            {credentials.map((c) => (
              <li key={c.name}>{c.name}<span>{c.by}</span></li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p style={{ marginBottom: 20, color: "var(--mute)" }}>{profile.openTo}</p>
          <a className="cta" href={`mailto:${profile.email}`}>{profile.email}</a>
          <footer>© 2026 {profile.firstName} {profile.lastName}</footer>
        </section>
      </main>
      <Modal project={open} onClose={() => setOpen(null)} />
    </div>
  );
}

import SocialLinks from "./SocialLinks";

const Footer = ({ githubUrl, link, twitter }) => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
      <SocialLinks githubUrl={githubUrl} link={link} twitter={twitter} />
      <p className="lead my-3 text-white">
        &copy; Made with <span>♥️</span> by{" "}
        <a
          id="myInfo"
          href="https://github.com/Divya242"
          target="_blank"
          rel="noreferrer"
        >
          Divya Gupta
        </a>
      </p>
    </footer>
  );
};

export default Footer;

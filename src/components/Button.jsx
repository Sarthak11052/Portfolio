const Button = ({ text, className, id, downloadLink }) => {
  const handleClick = (e) => {
    // Scroll to section if `id` is provided
    if (id) {
      e.preventDefault();

      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    // Otherwise, default link behavior for downloads or navigation
  };

  return (
    <a
      href={id ? "#" : downloadLink}
      onClick={handleClick}
      download={downloadLink ? true : undefined}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;

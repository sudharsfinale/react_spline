import "../../App.css";
const NavLink = ({ labelName = "", renderDuration = "500" }) => {
  return (
    <a data-aos="fade-down" data-aos-duration={renderDuration} href="#">
      {labelName}
    </a>
  );
};

export default NavLink;

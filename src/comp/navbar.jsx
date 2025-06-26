import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBoxOpen, FaUser, FaNewspaper, FaQrcode } from "react-icons/fa";

const styles = {
  navbar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    marginBottom: "12px", // 12px margin at the bottom
    padding: "8px 0",
    backgroundColor: "#282c34",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 1000,
    width: "calc(100% - 24px)",  // width minus 24px total (12px each side)
    marginLeft: "12px",           // push in from left
    marginRight: "12px",          // push in from right
    boxSizing: "border-box",
    borderRadius: "20px",
  },
  link: {
    color: "#ccc",
    fontSize: "26px",
    margin: "0 18px",
    transition: "color 0.3s ease",
    marginTop: "8px",     // push icons down slightly
  },
  activeLink: {
    color: "#61dafb",
  },
};



const CustomNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <NavLink
        to="/"
        end
        style={({ isActive }) =>
          isActive
            ? { ...styles.link, ...styles.activeLink }
            : styles.link
        }
        aria-label="Home"
      >
        <FaHome />
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) =>
          isActive
            ? { ...styles.link, ...styles.activeLink }
            : styles.link
        }
        aria-label="Products"
      >
        <FaBoxOpen />
      </NavLink>

      <NavLink
        to="/qr"
        style={({ isActive }) =>
          isActive
            ? { ...styles.link, ...styles.activeLink }
            : styles.link
        }
        aria-label="QR Code Generator"
      >
        <FaQrcode />
      </NavLink>

      <NavLink
        to="/news"
        style={({ isActive }) =>
          isActive
            ? { ...styles.link, ...styles.activeLink }
            : styles.link
        }
        aria-label="Nyheter"
      >
        <FaNewspaper />
      </NavLink>

      <NavLink
        to="/profile"
        style={({ isActive }) =>
          isActive
            ? { ...styles.link, ...styles.activeLink }
            : styles.link
        }
        aria-label="Profile"
      >
        <FaUser />
      </NavLink>
    </nav>
  );
};

export default CustomNavbar;

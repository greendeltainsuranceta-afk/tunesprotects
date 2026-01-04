"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.message}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  },
  code: {
    fontSize: "8rem",
    margin: 0,
    color: "#ff6b6b",
  },
  message: {
    fontSize: "2rem",
    margin: "10px 0",
    color: "#343a40",
  },
  text: {
    fontSize: "1.1rem",
    color: "#495057",
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    textDecoration: "none",
    padding: "12px 25px",
    backgroundColor: "#1c7ed6",
    color: "#fff",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

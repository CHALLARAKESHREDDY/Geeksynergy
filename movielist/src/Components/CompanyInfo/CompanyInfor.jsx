// CompanyInfo.js
import React from "react";
import styles from "./CompanyInfo.module.css";

const CompanyInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Company Information</h2>
      <p><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
      <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
      <p><strong>Phone:</strong> XXXXXXXXX09</p>
      <p><strong>Email:</strong> XXXXXX@gmail.com</p>
    </div>
  );
};

export default CompanyInfo;

import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/layout.module.css";
const Projects = () => {
  return (
    <div className={style.pageContent}>
      <div>
        <h3>Major Projects</h3>
        <h5 className={style.clickNote}>
          Click on project name for more details
        </h5>
        <div className={style.well}>
          <div className={style.well}>
            <div className={style.wellContainer}>
              <ul className={style.projectName}>
                <li>
                  <Link to="/rcd">
                    <li>Remote Cheque Deposit </li>
                  </Link>
                </li>
              </ul>
              <div className={style.roleDescription}>
                Using the application, corporate users can scan cheques through
                a scanner. The cheque details would be captured for auditing or
                processing purposes. Entitled bank employees will access the
                dashboard either to approve, reject or final submission to bank.
              </div>
            </div>
          </div>

          <div className={style.well}>
            <div className={style.wellContainer}>
              <ul className={style.projectName}>
                <Link to="/vms">
                  <li>Voucher Management Service</li>
                </Link>
              </ul>
              <div className={style.roleDescription}>
                Using the application, customer would pay client via UPI or
                other payment services. Customer will then receive 6-digit code
                and a QR code on SMS. Customer will then have to get the QR Code
                scanned by the gas station attendant. On successful validation,
                the attendant would deliver the services/products.
              </div>
            </div>

            <div className={style.well}>
              <div className={style.wellContainer}>
                <ul className={style.projectName}>
                  <Link to="/cdc">
                    <li>Corporate Digital Centre</li>
                  </Link>
                </ul>
                <div className={style.roleDescription}>
                  The project involved building Data Analytics representation on
                  a 27-foot long digital wall. The data analytics represented
                  various KPIs of different business domains.
                </div>
              </div>
            </div>

            <div className={style.well}>
              <div className={style.wellContainer}>
                <ul className={style.projectName}>
                  <Link to="/cas">
                    <li>Retail Web Application</li>
                  </Link>
                </ul>
                <div className={style.roleDescription}>
                  Using the application, customers of the petrochemical
                  conglomerate will be able to buy and book services and
                  products at one integrated platform. The project was part of
                  digital transformation of existing(now-defunct) web
                  application by bringing together all the service line retail
                  sales at one integrated platform.
                </div>
              </div>
            </div>

            <div className={style.well}>
              <div className={style.wellContainer}>
                <ul className={style.projectName}>
                  <Link to="/rcd">
                    <li>
                      Transform the incumbent desktop application for an
                      E-Commerce application into a web application{" "}
                    </li>
                  </Link>
                </ul>
                <div className={style.roleDescription}>
                  The application managed retail and supply chain movement of a
                  European organization. A migration project where my job was to
                  lead the team of developers to migrate the then- existing
                  desktop application to a React Redux web application
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

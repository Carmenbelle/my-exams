import React from "react";
import HomeStyle from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaAirbnb } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Helmet>
        ‍<title>Pets - Products</title>‍
        <meta
          name="description"
          content="Find all the best quality products your pet may need"
        />
        <meta name="voting-card" content="summary_large_image" />
        <meta name="voting:site" content="@user" />
        <meta name="voting:creator" content="@user" />
        <meta name="vote:title" content="Pets - Products" />
        <meta
          name="Online-voting:description"
          content="Best Products for your pet"
        />
        <meta name="oline-voting:image" content="url_to_image" />
        <meta property="og:title" content="election" />
        <meta property="og:description" content="Best Products for your pet" />
        <meta property="og:url" content="voting.abc" />
        <meta property="og:site_name" content="votes - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="voting:app_id" content="ID_APP_VOTE" />
      </Helmet>
      <FaAirbnb style={{ width: "20%", height: "30px", color: "grey" }} />
      <section className={HomeStyle.body}>
        <section className={HomeStyle.container}>
          <h1>Welcome to your Online voting platform</h1>

          <button className={HomeStyle.btn}>
            <NavLink to="/users">Start</NavLink>
          </button>
        </section>
      </section>
    </>
  );
};

export default Home;

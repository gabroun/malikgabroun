import * as S from "./styles";

import React, { useState } from "react";

const convertkit_tags = require("../../utils/convertkit_tags.json");

const Signup = ({ tags }) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const YOUR_FORM_ID = "2118215";
  const YOUR_SUBFORM_ID = "2358";
  const YOUR_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions`;

  const tagMap = convertkit_tags.reduce((result, tag) => {
    result[tag.name] = tag.id;
    return result;
  }, {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setLoading(true);

    try {
      const response = await fetch(YOUR_FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });

      const json = await response.json();

      if (json.status === "success") {
        setStatus("SUCCESS");
        setLoading(false);
        return;
      }

      setStatus("ERROR");
      setLoading(false);
    } catch (err) {
      setStatus("ERROR");
      setLoading(false);
    }
  };

  return (
    <S.Form action={YOUR_FORM_URL} method="post" onSubmit={handleSubmit}>
      <div className="col left">
        <h1>Subscribe to the newsletter</h1>
        <div>
          <p>
            subscribe to get my latest content, favourite articles from the web
            and additional details about my launches, products, and experiments
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          style={{ maxWidth: "100%" }}
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#f47c48"
              d="M23,36 C22.813,36 22.627,35.948 22.463,35.844 L0.463,21.844 C0.159,21.651 -0.017,21.308 0.001,20.948 C0.02,20.589 0.23,20.266 0.553,20.105 L23,6 L45.447,20.105 C45.769,20.266 45.98,20.588 45.999,20.948 C46.018,21.308 45.841,21.65 45.537,21.844 L23.537,35.844 C23.373,35.948 23.187,36 23,36 Z"
            />
            <path
              fill="#FFF"
              d="M38,37 L8,37 L8,1 C8,0.448 8.448,0 9,0 L37,0 C37.552,0 38,0.448 38,1 L38,37 Z"
            />
            <path
              fill="#f47c48"
              d="M45,46 C44.916,46 44.831,45.989 44.748,45.968 L21.748,39.968 L22,33 L46,21 L46,45 C46,45.31 45.856,45.602 45.611,45.792 C45.435,45.928 45.219,46 45,46 Z"
            />
            <path
              fill="#f47c48"
              d="M45,46 L1,46 C0.447,46 0,45.552 0,45 L0,21 L45.479,44.122 C45.88,44.341 46.083,44.804 45.969,45.247 C45.856,45.69 45.457,46 45,46 Z"
            />
            <path
              fill="##f47c48"
              d="M19 20.414L14.293 15.707C13.902 15.316 13.902 14.684 14.293 14.293L19 9.586 20.414 11 16.414 15 20.414 19 19 20.414zM27 20.414L25.586 19 29.586 15 25.586 11 27 9.586 31.707 14.293C32.098 14.684 32.098 15.316 31.707 15.707L27 20.414z"
            />
          </g>
        </svg>
      </div>
      <div className="col right">
        <input
          type="text"
          aria-label="First name"
          name="fields[first_name]"
          placeholder="First name"
          required
        />
        <input
          type="email"
          aria-label="Email address"
          name="email_address"
          placeholder="Email address"
          required
        />
        {tags.map((tag) => {
          if (tagMap[tag] !== undefined) {
            return (
              <input
                key={tagMap[tag]}
                id={`tag-${YOUR_SUBFORM_ID}-${tagMap[tag]}`}
                type="checkbox"
                style={{ display: "none" }}
                checked
                name="tags[]"
                value={tagMap[tag]}
                onChange={(e) => {}}
              />
            );
          }
        })}
        <button type="submit" className={`${loading ? "loading" : ""}`}>
          Subscrib{loading ? "ing" : "e"}
        </button>
        {status === "SUCCESS" && (
          <p className="success">Please go confirm your subscription!</p>
        )}
        {status === "ERROR" && <p className="error">Oops, try again.</p>}
      </div>
    </S.Form>
  );
};

export default Signup;

import React, { useState } from "react";
import style from "../style/contectform.module.css";
import z from "zod";
import { Link, useLocation } from "react-router-dom";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

function ContectForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const backbtnlocation = useLocation();

  const handleformdata = (e) => {
    e.preventDefault();
    const result = schema.safeParse({
      name,
      email,
      message,
    });
    setErrors([]);
    if (result.success) {
      alert("Form submitted successfully!");
    } else {
      setErrors(result.error.issues);
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  const getFieldError = (fieldName) => {
    return errors
      .filter((err) => err.path.includes(fieldName)) // Filter issues for this field
      .map((err) => err.message)[0]; // Return the first error message found
  };

  return (
    <>
      <form onSubmit={handleformdata} className="mb-20 flex flex-col items-center justify-center gap-1.5">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={style.inputfeild}
          />
        {getFieldError("name") && (
          <p style={{ color: "red" }}>{getFieldError("name")}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={style.inputfeild}
          />
        {getFieldError("email") && (
          <p style={{ color: "red" }}>{getFieldError("email")}</p>
        )}
        <textarea
          placeholder="Write your message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={style.inputfeild}
        />
        {getFieldError("message") && (
          <p style={{ color: "red" }}>{getFieldError("message")}</p>
        )}
        <button
          type="submit"
          className={`${style.inputfeild} ${style.submitbutton}`}
        >
          Submit
        </button>
        {backbtnlocation.pathname === "/contactform" && (
          <Link
            to={"/home"}
            className={`${style.inputfeild} ${style.backbutton}`}
          >
            Back
          </Link>
        )}
      </form>
    </>
  );
}

export default ContectForm;

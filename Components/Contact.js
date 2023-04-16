import { Stack, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";

const Contact = ({ currentTheme }) => {
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: "#101010",
    boxShadow: currentTheme.boxShadow,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    toast({
      description: "성공적으로 전송되었습니다!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeading}>
        <h2 className={styles.contact}>{headings.contact}</h2>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.form}
        style={{
          borderColor: currentTheme.text,
          backgroundColor:
            currentTheme.name === "light" ? "#fafafa" : "transparent",
        }}
      >
        <Stack spacing={4}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="이름"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            autoComplete="off"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="이메일"
            focusBorderColor={currentTheme.tertiary}
            autoComplete="off"
            isRequired
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="tel"
            name="phone"
            value={phone}
            placeholder="전화번호"
            focusBorderColor={currentTheme.tertiary}
            autoComplete="off"
            isRequired
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Textarea
            placeholder="내용"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            name="email"
            value={message}
            autoComplete="off"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div>
            <div
              className={styles.submit}
              style={{ backgroundColor: currentTheme.tertiary }}
            >
              <button type="submit">{ctaTexts.submitBTN}</button>
            </div>
          </div>
        </Stack>
      </form>

      <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
        <Link
          href={`mailto:${
            userinfo.contact.email ? userinfo.contact.email : ""
          }`}
        >
          <a>{userinfo.contact.email}</a>
        </Link>
      </div>
      {userinfo.contact.phone ? (
        <div
          style={{
            textAlign: "center",
            paddingTop: "0.2rem",
            color: currentTheme.tertiary,
          }}
        >
          <Link
            href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`}
          >
            <a>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</a>
          </Link>
        </div>
      ) : null}
      <div className={styles.socialIconDiv}>
        {userinfo.socials
          ? userinfo.socials.map((social, key) => {
              return (
                <div className={styles.socialIcon} style={iconStyles} key={key}>
                  <Link href={social.link}>
                    <a>
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Contact;

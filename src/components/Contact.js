import React from "react";

import { UsersIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert(" * Message sent! * ¡Mensaje enviado! * メッセージを送信しました！* Meddelande skickat! * Message envoyé! 메시지가 보내졌습니다! * Viesti lähetetty! * Nachricht gesendet! * 消息已發送！* Messaggio inviato! * Besked sendt! * تم الارسال! * Mensagem enviada! * Mesajı gönderildi! * Повідомлення надіслано! * Melding sendt! * Đã gửi tin nhắn! * Wiadomość wysłana! * Skilaboð send! * Το μήνυμα στάλθηκε! * Zpráva odeslána! *"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="flex justify-center items-center"
    style={{backgroundColor: "#bfbfbf"}}
    >
    <div className="justify-center bg-gray text-center">
    <UsersIcon
       className="inline-block" 
       style={{width: "70px", backgroundColor: "#bfbfbf", alignItems: "center"}}
       />
      <form
        netlify="true"
        name="contact"
        onSubmit={handleSubmit}
        className="justify-center items-center"
        >
        <h2 className="text-gray sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center content-center items-center" 
        style={{color: '#e0ebeb'}}
        >
          Contact Me
        </h2>
        <p className="leading-relaxed mb-5">
        Thank you for visiting my website. Let's build something amazing together!
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7  flex justify-center content-center items-center">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            style={{ backgroundColor: "#e0ebeb" }}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 flex justify-center content-center items-center">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex justify-center content-center items-center"
            style={{ backgroundColor: "#e0ebeb" }}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7  flex justify-center content-center items-center">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            style={{ backgroundColor: "#e0ebeb" }}
          />
        </div>
        <div className="relative mb-4 flex justify-center content-center items-center">
        <button
          type="submit"
          className="w-full text-white bg-indigo-500 border-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          style={{color: "#0000cc", backgroundColor: isHovering ? 'gray' : '#e0ebeb' , fontSize: 24 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSubmit}
          >
          Submit
        </button>
       </div>
      </form>
      </div>
  </section>
);
}

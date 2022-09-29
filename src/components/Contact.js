import React from "react";

import { contact } from "../data";

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
    <section id="contact" className="flex">
    <div className="container px-20 py-20 mx-auto flex sm:flex-nowrap w-15 h-15">
      <div className="bg-gray-900 flex-block py-20
      px-10 h-3/6 h-full rounded shadow-md">
      <h1 style={{ color: "white" }}> Hola ke ase </h1> 
         <iframe
          width="580"
          height="560"
          title="gif"
          className="giphy-embed"
          src="./giphy.gif"
        />
        </div>
      <form
        netlify="true"
        name="contact"
        onSubmit={handleSubmit}
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
        <h2 className="text-gray sm:text-4xl text-3xl mb-1 font-medium title-font">
          Contact Me
        </h2>
        <p className="leading-relaxed mb-5">
        Thank you for visiting my website. Let's build something amazing together!
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          style={{color: "#0000cc", backgroundColor: isHovering ? 'gray' : 'white' , fontSize: 24 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSubmit}
          >
          Submit
        </button>
      </form>
      </div>
  </section>
);
}

import emailjs from "emailjs-com";
import { useState } from "react";
import { useAlert } from "../contexts/AlertContext";
import { AlertDesc, AlertMsg, AlertStatus } from "../constants/alertEnums";
import Loader from "../components/Loader";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { setAlertState } = useAlert();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (
      formData.email.trim().length &&
      formData.name.trim().length &&
      formData.message.trim().length
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_e6mw8dv",
          "template_147vpub",
          e.target as HTMLFormElement,
          "3XwTHbJFA_p53fi9-"
        )
        .then(() => {
          setAlertState({
            status: AlertStatus.success,
            msg: AlertMsg.successMsg,
            description: AlertDesc.successMsgDesc,
            show: true,
          });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() =>
          setAlertState({
            status: AlertStatus.error,
            msg: AlertMsg.errorMsg,
            description: AlertDesc.errorMsgDesc,
            show: true,
          })
        )
        .finally(() => {
          setLoading(false);
        });
    } else {
      setAlertState({
        status: AlertStatus.error,
        msg: AlertMsg.emptyFieldMsg,
        description: AlertDesc.emptyFieldMsgDesc,
        show: true,
      });
    }
  }
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    switch (e.target.name) {
      case "name":
        setFormData({ ...formData, name: e.target.value });
        break;
      case "email":
        setFormData({ ...formData, email: e.target.value });
        break;
      case "message":
        setFormData({ ...formData, message: e.target.value });
        break;
    }
  }
  return loading ? (
    <Loader />
  ) : (
    <div className="h-[calc(100vh-133px)] elements-center">
      <form
        onSubmit={handleFormSubmit}
        className="border border-gray-400 flex flex-col gap-5 w-full 
      max-w-[600px] px-5 rounded-l-md py-5 
      shadow-amber-500 shadow-xs"
      >
        <h1 className="text-center font-semibold text-xl">
          Send us a message.
        </h1>
        <div className="input-group">
          <label className="text-md" htmlFor="name">
            Enter your name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-box"
            type="text"
            id="name"
            placeholder="e.g.: John Doe"
          />
        </div>
        <div className="input-group">
          <label className="text-md" htmlFor="email">
            Enter your email
          </label>
          <input
            name="email"
            placeholder="e.g.: johnDoe@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="input-box"
            type="email"
            id="email"
          />
        </div>
        <div className="input-group">
          <label className="text-md" htmlFor="message">
            Enter your message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="input-box resize-none h-[100px]"
            id="message"
          />
        </div>
        <button
          className="bg-[var(--theme-color)] text-indigo-950 rounded-md py-1 cursor-pointer text-lg hover:bg-[var(--theme-color)]/90"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

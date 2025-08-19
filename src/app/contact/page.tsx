"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-200 font-sans">
      <NavBar />
      
      <main className="max-w-md mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-lg font-light tracking-wider mb-2">- CONTACT -</h1>
          <p className="text-sm font-light">jjmusicc@naver.com</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-light mb-2">NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-b border-gray-400 pb-2 text-sm font-light focus:outline-none focus:border-gray-200"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-light mb-2">E-MAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-transparent border-b border-gray-400 pb-2 text-sm font-light focus:outline-none focus:border-gray-200"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs font-light mb-2">MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-400 pb-2 text-sm font-light focus:outline-none focus:border-gray-200 resize-none"
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-400 opacity-50"></div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2 border border-gray-400 text-sm font-light hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "전송 중..." : "SUBMIT"}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="text-center text-green-400 text-sm">
              메시지가 성공적으로 전송되었습니다.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="text-center text-red-400 text-sm">
              메시지 전송에 실패했습니다. 다시 시도해주세요.
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-xs font-light text-gray-400">
            - We promise the best work Always. -
          </p>
        </div>
      </main>
    </div>
  );
}

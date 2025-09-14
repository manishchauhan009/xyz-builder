import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-6 py-20 md:py-32"
    >
      {/* Contact Card */}
      <div className="w-full max-w-6xl animate-fadeInUp flex justify-center">
        <ContactForm />
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;

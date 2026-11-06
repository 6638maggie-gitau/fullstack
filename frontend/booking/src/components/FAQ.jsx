import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the requirements ?",
      answer:
        "The  requirements vary depending on the contry origin.please visit the contacts page to learn more",
    },
    {
      question: "Is half borad available?",
      answer:
        "Yes, half boardis available for all our visitors . Please reach us via whatsaap for more information.",
    },
    {
      question: "What other activities are offered?",
      answer:
        "We offer a variety of activities, including sports-golf, bar&restaurant, spa, and other activities.",
    },
    {
      question: "How many people are accomodated per room?",
      answer:
        "we have a variety of rooms for accomodation i.e 1bedroom,twin bedroom with two beds ,trre top suite for maximum of two and an airbnb  villa for maximum of 5 with all available electronics to cater for our guests needs",
    },
    {
      question: "How can I schedule a tour?",
      answer:
        "You can schedule a tour by booking with us on our website or by contacting the customer care service directly or reach us via whatsapp.",
    },
    {
      question: "do you offer airport transfer services?",
      answer: "yes we offer airport transfer services to our clients"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center"
              >
                <h3 className="text-1xl font-semibold">{faq.question}</h3>
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
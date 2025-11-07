"use client";

import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The **responsiveness** of the team was **exceptional**. They took great initiative to understand our brand, address our pain points, and **meet our needs**.",
      author: "Aniyl Selvam",
      company: "**Aloft Kuala Lumpur Sentral**",
      svgImage: "/images/NewMain/Quote (1).svg",
    },
    {
      id: 2,
      text: "Cult Creative helped **streamline** the process for us by handling the sourcing and coordination of influencers, making our campaigns **efficient** and **quick**.",
      author: "Nasya-Ann Appaduray, **RAEA**.",
      company: "",
      svgImage: "/images/NewMain/Quote (2).svg",
    },
    {
      id: 3,
      text: "We love the **price** package and **flexibility**!",
      author: "Sabrina Salehuddin, **BATA**.",
      company: "",
      svgImage: "/images/NewMain/Quote (3).svg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-left mb-20 max-w-4xl ml-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-0"
            style={{
              fontFamily: "Aileron, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "73px",
              letterSpacing: "-0.06em",
              textTransform: "capitalize",
              color: "#231F20",
            }}
          >
            Don&apos;t Take Our Word For
            <span className="relative inline-block">
              &nbsp;It.
              <img
                src="/images/NewMain/forit.svg"
                alt="For It decoration"
                className="absolute -top-4 left-8 w-12 h-10"
              />
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Times New Roman, serif",
              fontWeight: 100,
              fontStyle: "italic",
              fontSize: "64px",
              lineHeight: "86.5px",
              letterSpacing: "-0.04em",
              color: "#231F20",
              marginTop: "-20px",
            }}
          >
            See what they&apos;re saying.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="flex justify-center items-center gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.svgImage}
                alt={`Testimonial ${testimonial.id}`}
                className={`${
                  testimonial.id === 1
                    ? "w-[460px] h-[460px] translate-y-4"
                    : testimonial.id === 3
                    ? "w-[400px] h-[400px] translate-y-2"
                    : "w-[400px] h-[400px]"
                } hover:rotate-3 hover:scale-125`}
                onMouseEnter={(e) => {
                  if (testimonial.id === 1)
                    e.target.src = "/images/NewMain/Quote 1 Tilt.svg";
                  else if (testimonial.id === 2)
                    e.target.src = "/images/NewMain/Quote 2 Tilt.svg";
                  else if (testimonial.id === 3)
                    e.target.src = "/images/NewMain/Quote 3 Tilt.svg";
                }}
                onMouseLeave={(e) => {
                  e.target.src = testimonial.svgImage;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

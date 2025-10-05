export default function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const locations = [
    {
      id: 1,
      name: "Bangalore Office",
      address: "Dasarahalli Main Rd, Sector B, Hebbal Kempapura, Bengaluru, Byatarayanapura CMC and OG Part, Karnataka 560024",
      phone: "+91 7019750155",
      email: "careers@xtransmatrix.com",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6915668862944!2d77.59526637484294!3d13.05529408726785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1787207f0a6b%3A0x5ed4c0d1232ad252!2sBrigade%20Triumph!5e0!3m2!1sen!2sin!4v1742812459047!5m2!1sen!2sin"
    },
    {
      id: 2,
      name: "Mangalore Office",
      address: "Mangalore, Karnataka",
      phone: "+91 7019750155",
      email: "careers@xtransmatrix.com",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.995008930592!2d74.83396397507533!3d12.908042087401503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzI5LjAiTiA3NMKwNTAnMTEuNSJF!5e0!3m2!1sen!2sin!4v1750851630184!5m2!1sen!2sin"
    },
    {
      id: 3,
      name: "Noida Office",
      address: "A24, First Floor, A Block, Sector 63, Noida, Uttar Pradesh 201309",
      phone: "+91 7019750155",
      email: "careers@xtransmatrix.com",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.003741081876!2d77.37841491084554!3d28.62964997556486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8cdf6c7ca9%3A0x26e011dc817afe96!2sWorcoz%20Co-working%20Office%20Space!5e0!3m2!1sen!2sin!4v1754902658690!5m2!1sen!2sin"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    setTimeout(() => {

      WQ
      :      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="relative flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 text-white bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]">
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="absolute top-6 sm:top-8 md:top-12 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-[#35A7E4] text-xs sm:text-sm md:text-lg font-semibold z-10 hover:bg-[#3953C5] hover:border-[#6253A1]"
        style={{ backgroundColor: "rgba(98, 83, 161, 0.3)" }}
      >
        Contact
      </div>

      <div className="w-full max-w-7xl bg-black/80 backdrop-blur-sm p-6 sm:p-10 rounded-lg shadow-lg border-2 border-[#7F60ED] flex flex-col lg:flex-row items-start gap-8 md:gap-12 mt-12 sm:mt-16 relative z-10">

        <div className="w-full lg:w-1/2 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Get in touch with us</h2>

            <div className="space-y-4 sm:space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                required
              />
              <textarea
                name="message"
                placeholder="Type your query here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1] h-24 sm:h-28"
                required
              ></textarea>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#6253A1] text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-[#53458C] transition"
              >
                {loading ? "Sending..." : "Send my message"}
              </button>
            </div>

            {responseMessage && (
              <p className={`text-sm mt-4 text-center ${responseMessage.includes("Failed") ? "text-red-400" : "text-green-400"}`}>
                {responseMessage}
              </p>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-center">Our Locations</h3>
          
          <div className="flex flex-wrap justify-center gap-2">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedLocation === index
                    ? 'bg-[#6253A1] text-white'
                    : 'bg-[#1e1e38] text-gray-300 hover:bg-[#2a2a4a]'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>

          <div className="bg-[#1e1e38]/50 rounded-lg p-6 space-y-4">
            <h4 className="text-lg font-semibold text-[#B296F1]">
              {locations[selectedLocation].name}
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#35A7E4] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{locations[selectedLocation].address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#35A7E4] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{locations[selectedLocation].phone}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#35A7E4] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{locations[selectedLocation].email}</span>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden border border-[#7F60ED]/30">
            <iframe
              key={selectedLocation} 
              src={locations[selectedLocation].mapSrc}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title={`Map of ${locations[selectedLocation].name}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
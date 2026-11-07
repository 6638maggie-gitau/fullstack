import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className="bg-gray-100">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | Zara homes</title>
        <meta
          name="description"
          content="Learn more about Bidii Schools, our mission, faculty, and why we are the best choice for quality education."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Our modern homes
        
        </h1>
        <p className="mt-3 text-lg">
          Providing a luxurious living to our guests worldwide
        </p>
      </div>

      
      {/* Why Choose Us? */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card with hover transition */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Quality Services to our visitors
              </h3>
              <p className="text-gray-700 mt-2">
                Our guests experience the best and quality dishes and services ,book your stay today.it's home away from home..
              </p>
            </div>
            {/* Card with hover transition */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                modern&luxury homes
              </h3>
              <p className="text-gray-700 mt-2">
                Everything you need is provided for
              </p>
            </div>
            {/* Card with hover transition */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
               Friendly staff
              </h3>
              <p className="text-gray-700 mt-2">
                They provide the best services and are availablr 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Testimonials */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-700 italic">
                "Zara homes provide the you can ever expect to have their rooms are topnotch ,go find out for yourself!"
              </p>
              <h3 className="text-blue-600 font-bold mt-2">- Sarah Adani</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-700 italic">
                "the serene environment is what you need to experience especially in Malindi it was a nice stay there!"
              </p>
              <h3 className="text-blue-600 font-bold mt-2">- Prescott Omari</h3>
            </div>
             <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-700 italic">
                "Their tours and travel team were the best ,they made the place quite interesting it was a moment not to be forgotten, from taking us to visit beautiful and attractive places in Mombasa to their well prepared swahili dishes it was quite a nice stay honestly!"
              </p>
              <h3 className="text-blue-600 font-bold mt-2">- Miss Angela</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-semibold">Book your stay Today</h2>
        <p className="mt-2">come enjoy the serene environment and the cool breeze from the ocean</p>
        <Link to="/Booking">
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold cursor-pointer">
            Book Now
          </button>
        </Link>
      </div>
        
          <Footer/>
    </div>
  
  );
};

export default About;
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FAQ from "../components/FAQ";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section with Carousel */}
      <section className="relative">
          <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div
            className=" img-blur h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-black font-semibold p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Welcome to Zara Homes and Villas
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-600">
                Enjoy a unique blend of comfort, style, and tranquility in our exquisite homes and villas.
              </p>
              
              
              <p className="text-xl md:text-2xl mb-6 ">
                Located in malindi , Shanzu and Diani
              </p>
              <Link to="/Booking">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-blue-600 p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                serene surroundings
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Immerse yourself in the beauty of nature and the tranquility of our surroundings.
              </p>
              <Link to="/Booking">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549294413-26f195200c16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-green-600 p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Modern Living Spaces
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Book your space today and experience the perfect blend of comfort, style, and tranquility in our exquisite homes and villas.
              </p>
              <Link to="/AboutUs">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-green-600 p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                A place to call home
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                fine breeze from the ocean, the sound of waves crashing against the shore, and the warmth of the sun on your skin. It's a place where you can relax, unwind, and enjoy the simple pleasures of life.
              </p>
              <Link to="/AllRooms">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Explore All our rooms and villas 
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-white p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Book your stay with us today
              </h1>
              <p className="text-xl md:text-2xl mb-6">
               Promising luxury, comfort, and a memorable experience. Our dedicated team is here to ensure your stay is nothing short of exceptional.
              </p>
              <Link to="/Contacts">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </Carousel>
      </section>
        <Ratings/>
      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">About Our Villas</h2>
          <p className="text-lg text-gray-700 mb-12">
           we are dedicated to offer elite services to our clients
          </p>
          <Link to="/AboutUs">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-100">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {[
           
        
            {
              title: "luxury Homes",
              text: "luxury living and cormfort.",
              
            },
            
            {
              title: "Modern Facilities",
              text: "State-of-the-art living spaces.",
            },
            {
              title: "Sporting and Swimming",
              text: "Sports and swimming for art of pleasure",
            },
            
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-400 shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Rooms&Suites</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
          <div
            className="bg-cover bg-center flex items-center justify-center w-80 h-80 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
            
          ><p className="font-semibold"> luxury suite</p>
          </div>
          <div
            className="bg-cover bg-center flex items-center justify-center w-80 h-80 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          ></div>
          <div
            className="bg-cover bg-center flex items-center justify-center w-80 h-80 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1781572725438-ac8c41476752?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          ></div>
          <div
            className="bg-cover bg-center flex items-center justify-center w-80 h-80 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          ></div>

            </div>
          
        
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Everything you need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {[
              { title: "Swimming pool a heated Pool",description:"open sunrise and sunset" },
              { title: "Garden spa", description: "Summer holidays" },
              {
                title: "Fast Wifi",
                description: "Always",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-500">{blog.description}</p>
                <Link
                  to="/blog"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Loved by travellers globally</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                text: "The most quite nd peaceful place I've experienced in the coastal Kenya",
                name: "Harry John, American",
              },
              {
                text: "Fast wifi, great coastal foods and the pool",
                name: "Nick Kiplangat, kenyan",
              },
              {
                text: "The deluxe suite is worth every shiiling,quite affordable",
                name: "Alice wanjiru, kisumu",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 shadow-xl rounded-lg p-6 max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <p className="text-yellow-600 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to experience with us?</h2>
        <p className="text-lg mb-8">
          Book today and get unlimited experience and cormfort
        </p>
        <Link to="/booking">
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
            Book Now
          </button>
        </Link>
      </section>
      
      <FAQ />
      <Footer/>
    </div>
  );
};

export default HomePage;
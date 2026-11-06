import Footer from "../components/Footer";
const AllRooms = () => {
    return(

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
          ></div>
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
          
        <Footer/>
      </section>
    );
}

export default AllRooms;
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
    return (
        <div 
        // style={{ backgroundImage: "url('https://res.cloudinary.com/dk8ign4oc/image/upload/v1687631532/aadhya-removebg-preview_odfw2c.png')" }}
        >
            <Navbar />
            {children}
            <Footer/>
        </div>
    );
}
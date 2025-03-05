import Background from '../assets/bg.jpg';

const Hero = () => {
    return (
        <div 
            className="h-[400px] bg-cover bg-center flex items-center justify-center flex-col text-center"
            style={{ backgroundImage: `url(${Background})` }} 
        >       
            <h1 className="bg-[#003092] rounded-xl px-10  py-3 text-white text-3xl font-semibold">Welcome to <br /> Sneaker Shop</h1>
            <button className="mt-4 px-6 py-2 bg-white text-[#003092] rounded-lg">Learn More</button>
            
        </div>
    );
}

export default Hero;

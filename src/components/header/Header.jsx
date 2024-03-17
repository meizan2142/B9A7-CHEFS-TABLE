const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-12">
                <div className="navbar-start text-3xl font-bold">
                    <h1>Recipe Calories</h1>
                </div>
                <div className="navbar-center">
                    <ul className="gap-12 lg:flex text-base font-medium">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 ">
                    <label className="input rounded-full input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator bg-[#0BE58A] rounded-full">
                            <img src="https://img.icons8.com/?size=50&id=7820&format=png" alt="" />
                        </div>
                    </button>
                </div>
            </div>
            {/* Hero section starts from here */}
            <div className="mt-12">
                <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5 text-lg font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                            <div className="space-x-8">
                            <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
                            <button className="btn  rounded-full border-none">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero section ends here */}
            <div className="space-y-6 mt-12">
                <h1 className="font-semibold text-4xl">Our Recipes</h1>
                <p className="">Our Recipes offers a diverse culinary repertoire to inspire home cooks with creative and delicious dishes.</p>
            </div>
        </div>
    )
}

export default Header
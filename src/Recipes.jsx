const Recipes = () => {
    return (
        <div className="mt-12">
            <div className="space-y-6">
                <h1 className="font-semibold text-4xl">Our Recipes</h1>
                <p className="">Our Recipes offers a diverse culinary repertoire to inspire home cooks with creative and delicious dishes.</p>
            </div>
            <div className="flex gap-6 justify-center items-center">
                <div className="mt-11 flex gap-6">
                    <div className="card w-[355px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/XzWbRt2/photo-1512058564366-18510be2db19.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="px-5 pt-10">
                            <h2 className="card-title">Spaghetti Bolognese</h2>
                            <p>Classic Italian pasta dish with savory meat sauce.</p>
                            <div className="card-body space-y-4">
                                <div className="space-y-4">
                                    <p className="font-medium text-lg">Ingredients: 6</p>
                                    <ul>
                                        <li>500g ground beef</li>
                                        <li>1 onion, chopped</li>
                                        <li>2 cloves garlic, minced</li>
                                    </ul>
                                </div>
                                <div className="flex  justify-between ">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-4 h-4" src="https://img.icons8.com/?size=24&id=86136&format=png" alt="" />
                                        <p><span>30</span> minutes</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-4 h-4" src="https://img.icons8.com/?size=64&id=tUQmHTb6ANnA&format=png" alt="" />
                                        <p><span>600</span> calories</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-start">
                                    <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[355px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/QPX2xwv/photo-1604908177453-7462950a6a3b.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="px-5 pt-10">
                            <h2 className="card-title">Spaghetti Bolognese</h2>
                            <p>Classic Italian pasta dish with savory meat sauce.</p>
                            <div className="card-body space-y-4">
                                <div className="space-y-4">
                                    <p className="font-medium text-lg">Ingredients: 6</p>
                                    <ul>
                                        <li>500g ground beef</li>
                                        <li>1 onion, chopped</li>
                                        <li>2 cloves garlic, minced</li>
                                    </ul>
                                </div>
                                <div className="flex  justify-between ">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-4 h-4" src="https://img.icons8.com/?size=24&id=86136&format=png" alt="" />
                                        <p><span>30</span> minutes</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-4 h-4" src="https://img.icons8.com/?size=64&id=tUQmHTb6ANnA&format=png" alt="" />
                                        <p><span>600</span> calories</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-start">
                                    <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[514px] h-auto  border rounded-2xl">
                    <div>
                        <div className="pt-5">
                            <p>Want to cook: 0</p>
                            <div className="flex justify-start gap-10 px-12 pt-3">
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>
                            <div id="add-text">

                            </div>
                        </div>
                        <div>
                        <p>Currently cookingk: 0</p>
                            <div className="flex justify-start gap-10 px-12 pt-3">
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>
                            <div id="add-text">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes
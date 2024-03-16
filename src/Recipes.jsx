const Recipes = () => {
    return (
        <div className="mt-12">
            <div className="space-y-6">
                <h1 className="font-semibold text-4xl">Our Recipes</h1>
                <p className="">Our Recipes offers a diverse culinary repertoire to inspire home cooks with creative and delicious dishes.</p>
            </div>
            <div className="flex gap-6 justify-center items-center">
            <div className="mt-11 flex gap-6">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/n3SGTNs/photo-1602253057119-44d745d9b860.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
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
                            <div className="flex  justify-between">
                                <div className="flex justify-center gap-2">
                                    <img className="w-6 h-6" src="https://img.icons8.com/?size=24&id=86136&format=png" alt="" />
                                    <p><span>30</span> minutes</p>
                                </div>
                                <div className="flex justify-center gap-2">
                                    <img className="w-6 h-6" src="https://img.icons8.com/?size=64&id=tUQmHTb6ANnA&format=png" alt="" />
                                    <p><span>600</span> calories</p>
                                </div>
                            </div>
                            <div className="card-actions justify-start">
                                <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/n3SGTNs/photo-1602253057119-44d745d9b860.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
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
                            <div className="flex  justify-between">
                                <div className="flex justify-center gap-2">
                                    <img className="w-6 h-6" src="https://img.icons8.com/?size=24&id=86136&format=png" alt="" />
                                    <p><span>30</span> minutes</p>
                                </div>
                                <div className="flex justify-center gap-2">
                                    <img className="w-6 h-6" src="https://img.icons8.com/?size=64&id=tUQmHTb6ANnA&format=png" alt="" />
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
            <div className="w-[514px] h-[685px] bg-slate-200 border">

            </div>
            </div>
        </div>
    )
}

export default Recipes
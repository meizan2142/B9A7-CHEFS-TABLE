const Recipes = () => {
    return (
        <div className="mt-12">
            <div className="space-y-5">
                <h1 className="text-4xl font-bold">Our Recipes</h1>
                <p className="text-base font-normal">Our Recipes offers a diverse culinary repertoire to inspire home cooks with creative and delicious dishes.</p>
            </div>
            <div className="mt-11">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="w-[331px] h-[200px] style={{backgrounImage: 'url(https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}">

                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Recipes
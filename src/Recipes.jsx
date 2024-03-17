import { useEffect } from "react";
import { useState } from "react"

const Recipes = ({recipe, handleCookBtn}) => {
    // console.log(handleCookBtn);
    return (
        <div>
            <div >
                <div>
                    <div className="card w-[355px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recipe.recipe_image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="px-5 pt-10">
                            <h2 className="card-title">{recipe.recipe_name}</h2>
                            <p>{recipe.short_description}</p>
                            <div className="card-body space-y-4">
                                <div className="space-y-4">
                                    <p className="font-medium text-lg">Ingredients: 6</p>
                                    <ul>
                                        {recipe.ingredients}
                                    </ul>
                                </div>
                                <div className="flex  justify-between ">
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-4 h-4" src="https://img.icons8.com/?size=24&id=86136&format=png" alt="" />
                                        <p><span>{recipe.preparing_time}</span> minutes</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <img className="w-4 h-4" src="https://img.icons8.com/?size=64&id=tUQmHTb6ANnA&format=png" alt="" />
                                        <p><span>{recipe.calories}</span> calories</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-start">
                                    <button onClick={(e) => handleCookBtn(recipe)} className="btn bg-[#0BE58A] rounded-full">Want to Cook</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p>Hello</p> */}
                </div>
            </div>
        </div>
    )
}

export default Recipes
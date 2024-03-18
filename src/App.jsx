import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Recipes from './Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [cookBtn, setCookBtn] = useState(0);
  useEffect(() => {
    fetch('blogs.json')
      .then(response => response.json())
      .then(data => setRecipeInfo(data))
  }, [])
  const handleWantToCook = (rec) => {
    // setCookBtn = cookBtn + 1;
    // console.log(cookBtn);
    const isExist = wantToCook.find(reci => reci.recipe_id == rec.recipe_id)
    // console.log(isExist);
    if (!isExist) {
      setWantToCook([...wantToCook, rec])
      console.log('Hi');
    }
    else {
      toast("Recipe already added!", {
        position: "top-right",
        autoClose: 2000
      });
    }
  };
  // console.log(wantToCook);

  return (

    <div className="main-container max-w-[1300px] mx-auto text-center">
      <Header></Header>
      <div className='flex justify-between '>
        <div className='recipes grid grid-cols-2 gap-5'>
          {
            recipeInfo.map(recipes => <Recipes key={recipes.recipe_id} recipe={recipes} handleCookBtn={handleWantToCook}></Recipes>)
          }
        </div>
        <div className='sidebar'>
          <div>
          <ToastContainer />
          </div>
          <div className="w-[514px] h-auto  border rounded-2xl">
            <div>
              <div className="pt-5">
                
                <p className="font-semibold text-xl">Want to Cook: {cookBtn}</p>
                <div className="flex justify-start gap-16 px-12 pt-3">
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                </div>
                {
                  wantToCook.map((info) => (
                    <div className='flex justify-start gap-10 px-12 pt-3 items-center'>
                      <p>{info.recipe_name}</p>
                      <p>{info.preparing_time}</p>
                      <p>{info.calories}</p>
                      <button className="btn bg-[#0BE58A] rounded-full">Preparing</button>
                    </div>
                  ))
                }

              </div>
              <div>
                <p className="font-semibold text-xl">Currently Cooking: 0</p>
                <div className="flex justify-start gap-10 px-12 pt-3">
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                </div>
                <div className="addText">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

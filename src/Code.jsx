import React from 'react';
import { useNavigate } from "react-router";

export default function Code(){
    let navigate = useNavigate();
    return(
        <section class = "bg-[#222026] text-white p-8">
           
            <div class = " mx-auto mt-6 max-w-xl min-h-screen">
                
                <h1 class = "font-cormorant text-4xl">
                    Coming Soon!
                </h1> 

                <button 
                    onClick={() => navigate("/")}
                    class = "font-jetbrains mt-2 underline hover:cursor-pointer"
                    
                    >
                    Click here to return home.
                </button>
                {/* 
                <p class = "font-jetbrains mt-2">
                    Description
                </p>

                <h1 class = "font-cormorant text-4xl">
                    Projects
                </h1> 
                <p class = "font-jetbrains mt-2">
                    
                </p>
                */}

            </div>
        </section>
            
    );
}
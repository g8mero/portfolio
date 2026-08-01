import React from 'react';
import { useNavigate } from "react-router";

export default function Code(){
    let navigate = useNavigate();
    
    return(
        
        <section class = "bg-[#222026] text-white p-8">
            <button 
                onClick={() => navigate("/")}
                class = "font-jetbrains mt-2"
                
                >
                <span class="hover:cursor-pointer">~/</span>
                <span>communication</span>
            </button> 
            
            <div class = " mx-auto mt-6 max-w-xl min-h-screen">
                <h1 class = "font-cormorant text-4xl">
                    Coming Soon!
                </h1> 
            </div>

        </section>
    )
}
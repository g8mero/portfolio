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
                <span>code</span>
            </button>   
            <div class = " mx-auto mt-6 max-w-xl min-h-screen">
                
                <h1 class = "font-cormorant text-4xl">
                    Projects -------------------------------------
                </h1> 
                <div class = "mt-5 mb-5 flex flex-col md:flex-row items-center gap-2 md:gap-8">
                    <div>
                        <img
                            class = "md:ml-3 md:scale-150"
                            src = "/GreenPages.png"
                        ></img>
                    </div>
                    <div>
                        <h3 class = "text-text group-hover:text-accent text-xl font-jetbrains transition-colors">
                            GreenPages
                        </h3>
                        <p class = " font-jetbrains ">
                            Like Grammarly, but for clean print jobs. Flags wasteful print formatting in Google Docs and suggests eco-friendly fixes to reduce wasting pages && ink.
                        </p>
                    </div>
                </div>
                <h1 class = "mt-5 font-cormorant text-4xl">
                    Languages ----------------------------------
                </h1>
                <p class = " mt-5 font-jetbrains text-justify [text-align-last:justify]">
                    python java html javascript react tailwindcss 
                </p>
                
                <h1 class = "mt-5 font-cormorant text-4xl">
                    Awards --------------------------------------
                </h1> 
                <div class="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <a class="border-surface0 bg-base hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">
                        <div>
                            <img class = "mt-17 mb-17 w-full transition-transform duration-300 scale-95 group-hover:scale-100" 
                            src = "/USAII-logo.webp"
                            ></img>
                        </div>
                        <div class="space-y-3 p-5">
                            <h3 class = "flex flex-col text-text group-hover:text-accent text-xl font-jetbrains transition-colors">
                                <span>USAII Global Hackathon, Finalist</span>
                            </h3>
                        </div>
                    </a>
                    <a class="border-surface0 bg-base hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">
                        <div>
                            <img class = "w-full transition-transform duration-300 group-hover:scale-105" 
                            src = "/EarthIO.jpg"
                            ></img>
                        </div>
                        <div class="space-y-3 p-5">
                            <h3 class = "flex flex-col text-text group-hover:text-accent text-xl font-jetbrains transition-colors">
                                <span>Earth.io Hackathon,</span>
                                <span>2nd Place</span>
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </section>
            
    );
}
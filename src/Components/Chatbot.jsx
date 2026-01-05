import React from 'react'

export default function Chatbot() {
    const Prompts = [
        {prompt:"Explain Quantam Computing in Simple Terms?"},
        {prompt:"What is Life Cycle of Power BI?"},
        {prompt:"Got any Creative Ideas for a 10 year old birthday?"},
        {prompt:"What is Difference Between Artificial Intelligence vs Business Intelligence?"},
        {prompt:"Who is Richest Person in the world?"},
        {prompt:"How to use CORS in Programming?"},
        {prompt:"What is Difference Between Artificial Intelligence vs Business Intelligence?"},
        {prompt:"Who is Richest Person in the world?"},
        {prompt:"How to use CORS in Programming?"},
    ]
    return (
        <section className="chatbot-section" style={{fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;"}}>
            <button className="px-40 absolute top-15 cursor-pointer hover:text-orange-400 focus:-translate-x-50 transition hover:underline underline-offset-4" onClick={() => {window.location.href="/"}}> Back </button>
            <div className="chatbot-section-container grid justify-center content-center justify-items-center h-dvh">
                <p className="font-bold text-3xl text-center"> Mr.Bott - Your AI Chatbot </p>
                <div className="chatbot-exm-prompts mt-3 gap-4 grid grid-cols-3">
                    {
                        Prompts.map((data) => (
                            <div className="bg-gray-800 p-4 text-center rounded-sm border border-gray-600 transition hover:scale-105 duration-200 cursor-pointer" style={{
                                background:"rgba(255,255,255,0.06)",
                                backdropFilter:"blur(10px)",
                            }}>
                                <p className="w-60"> {data.prompt} </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

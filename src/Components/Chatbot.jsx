import React, {useEffect} from 'react';
import "../CSS/chatbot.css";

export default function Chatbot() {
    const [chatMenuOpen, setChatMenuOpen] = React.useState(false);
    let chatText = "Hello, How can I assist you?";
    const [text, setText] = React.useState("");
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

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
             setText(chatText.slice(0,index+1));
             index++;

             if (index === text.length) {
                 clearInterval(interval);
             }

             return () => clearInterval(interval);
        },50);
    },[])
    return (
        <section className="chatbot-section h-auto" style={{fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;"}}>
            <button className="md:mx-40 px-3 rounded-2xl md:absolute top-15 cursor-pointer bg-orange-400 w-fit text-gray-950 transition" onClick={() => {window.location.href="/"}}>
                <div className="flex justify-center items-center p-0"> <img src="/back_arrow.svg" alt="back" className="p-0"/><span> Back </span> </div>
            </button>
            <div className="chatbot-section-container pt-60  grid justify-center gap-3 content-center justify-items-center">
            {
                !chatMenuOpen?(
                    <>
                        <p className="font-bold text-3xl text-center border px-2 py-1 rounded-xl"> Mr.Bott - Your AI Chatbot </p>
                        <div className="chatbot-exm-prompts mt-4 gap-4 grid grid-cols-3">
                            {
                                Prompts.map((data) => (
                                    <div className="bg-gray-800 p-3 text-center rounded-sm border border-gray-600 transition hover:scale-105 duration-200 cursor-pointer" style={{
                                        background:"rgba(255,255,255,0.06)",
                                        backdropFilter:"blur(10px)",
                                    }}>
                                        <p className="w-60"> "{data.prompt}" </p>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    ):(
                    <div className="chat-container">
                        <p className="text-white"> {text} </p>
                    </div>
                )
            }
            </div>
            <div className={`chat-section md:mx-130 mt-70 ${chatMenuOpen?"mt-155 pb-2":"mt-70"} relative`}>
                <div className="chat-area-box p-3 rounded-md flex justify-between ">
                    <input type="text" className="w-full mr-3 outline-0" placeholder="Type a Message..."/>
                    <img src="/navigate_icon.svg" className="rotate-90 bg-linear-65 from-red-500 to-orange-400 p-1 rounded-2xl active:scale-90 transition" onClick={() => {setChatMenuOpen(true)}} alt=""/>
                </div>
            </div>
        </section>
    )
}

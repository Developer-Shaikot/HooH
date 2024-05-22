import Chat from "./Chat";
// import Spinner from "./Spinner";
import { useState } from "react";
import PropTypes from "prop-types";
import PreDefinedOptions from "./PreDefinedOptions";
import { useContext } from "react";
import { AuthContext } from "../../app/App";

export default function ChatBox({ closeChat }) {
    const { user } = useContext(AuthContext);
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setText("");
    };

    return (
        <div className="fixed z-[99] bottom-[130px] right-6 rounded-xl shadow-lg bg-white font-inter text-white w-[310px] browser-end:w-[340px] ">
            <div className="relative h-[100%]">
                <div className="bg-default-theme py-3 px-4 rounded-t-lg text-lg flex items-center justify-between">
                    <img src="/images/hooh.png" alt="damex" />
                    <div className="flex items-center gap-2">
                        <div className="cursor-pointer" onClick={closeChat}>
                            <img
                                className="w-6 h-6 brightness-0 saturate-100 invert"
                                src="/icons/close-fill.svg"
                                alt="close"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-[380px] text-black p-4 overflow-y-auto mb-10">
                    <Chat
                        user={user}
                        text="Hey, What can I do for you?"
                        time={Date.now()}
                        index={0}
                    />
                    <PreDefinedOptions />
                    <Chat user={user} text="Create a ticket" time={Date.now()} index={1} />
                </div>
                <div className="absolute bottom-[-40px] w-[100%] rounded-b-lg shadow-top flex items-center">
                    <form className="w-[100%]" onSubmit={handleSubmit}>
                        <input
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            name="text"
                            placeholder="Ask Justin anything..."
                            type="text"
                            className="w-[100%] p-4 text-black focus:border-none focus:outline-none rounded-b-lg"
                        />
                    </form>
                    {/* <Spinner /> */}
                </div>
            </div>
        </div>
    );
}

ChatBox.propTypes = {
    closeChat: PropTypes.func,
};

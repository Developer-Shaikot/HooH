import PropTypes from "prop-types";

export default function ChatButton({ toggleChat }) {
    return (
        <div
            onClick={toggleChat}
            className="w-[120px] h-[100px] fixed bottom-6 right-6 z-30 flex justify-center text-white items-center cursor-pointer"
        >
            <img className="drop-shadow-lg inline-block" src="/images/chatBot.png" alt="bot" />
        </div>
    );
}

ChatButton.propTypes = {
    toggleChat: PropTypes.func,
};

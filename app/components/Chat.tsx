import {useRouter} from "next/navigation";
import {useState} from "react";
import {ModalSearchList} from "@/app/components/ModalSearchList";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            // @ts-ignore
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <>
            <div className="container bg-gray-300 p-4 rounded-box">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">Qual o estilo que vc gostaria?</div>
                </div>
                {messages.map((message, index) => (
                    <div key={index} className="chat chat-end">
                        <div className="chat-bubble chat-bubble-accent">{message}</div>
                    </div>
                ))}

            </div>

            <div className="">
                <input type="text" className="input input-bordered w-full max-w-xs"
                       onChange={(e) => setNewMessage(e.target.value)}
                       placeholder="Digite sua mensagem..."
                       onKeyUpCapture={
                            (e) => {
                                 if (e.key === 'Enter') {
                                        handleSendMessage();
                                 }
                            }
                       }
                />
            </div>

        </>
    )
}
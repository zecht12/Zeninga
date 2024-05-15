import { useEffect } from "react";
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";

export const PopupMessage = ({ message, type, onClose }: { message: string | undefined; type: 'success' | 'error'; onClose: () => void }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded shadow-md flex items-center space-x-2 ${type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                {type === 'error' && <CgDanger size={24} />}
                {type === 'success' && <FaCheck size={24} />}
                <p>{message}</p>
            </div>
        </div>
    );
};
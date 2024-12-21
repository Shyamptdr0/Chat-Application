import React from 'react';

const DeleteModal = ({ show, onClose, onConfirm, userId }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete this user?</h2>
                <div className="flex justify-between">
                    <button 
                        className="btn btn-secondary" 
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        className="btn btn-danger" 
                        onClick={() => onConfirm(userId)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;

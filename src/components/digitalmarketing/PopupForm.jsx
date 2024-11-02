import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose, selectedIcon }) => {
  const [disable, setDisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const formData = new FormData(e.target);
   

    try {
      const response = await fetch(import.meta.env.VITE_API_KEY, {
        method: "POST",
        body: formData,
      });
      const result = await response.text();
      if (result) {
        console.log("Submission successful:", result);
        e.target.reset()
        onClose();
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setDisable(false);
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{selectedIcon.name}</h2>
        <img src={selectedIcon.imageUrl} className="w-full"  alt={selectedIcon.name} />
      
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="formType" defaultValue="digitalmarketing" />
          <input type="hidden" name="platform" defaultValue={selectedIcon.name} />

          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              className="border p-2 w-full"
              required
            />
          </label>
          <label className="block">
            Phone Number:
            <input
              type="tel"
              name="phone"
              className="border p-2 w-full"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={disable}
          >
            {disable ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default PopupForm;

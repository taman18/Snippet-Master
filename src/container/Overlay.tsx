import React from "react"

const Overlay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return <div className="fixed inset-0 bg-black opacity-50 z-50" onClick={onClick} />;
  };

  export default Overlay;
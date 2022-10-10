import React from "react";

const Topbar = () => {
  return (
    <div className="top-bar">
      <p>Free shipping on all u.s oders over 50XAF</p>

      <div className="top1">
        <a href="#" id="eccommer">
          eccommer@info.com
        </a>
        <a href="#" id="login">
          Login <i class="fa-solid fa-right-to-bracket"></i>
        </a>
        <button type="#" className="bt">
          <a href="#">
            <i class="fa-solid fa-user-plus use"></i>   Register
          </a>
        </button>
      </div>
    </div>
  );
};

export default Topbar;

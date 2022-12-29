import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import { MdOutlineMessage, MdOutlinePermMedia, MdPermMedia, MdPersonOutline } from "react-icons/md";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:pl-48">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/media'><MdOutlinePermMedia /> Media</Link></li>
                        <li><Link to='/message'><MdOutlineMessage /> Messages</Link></li>
                        <li><Link to='/about'><MdPersonOutline /> About</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Main;
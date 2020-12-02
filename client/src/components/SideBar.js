import React, { useCallback, useContext } from 'react';
import { useAuth } from '../custom/auth';
import { useTab } from '../custom/tab';

function SideBar(props) {
    const { setAuthToken } = useAuth();
    var currentTab = useTab();

    const logout = useCallback(async(e) => {
        e.preventDefault();
        setAuthToken(`accessToken`);
        setAuthToken(`refreshToken`);
    }, []);

    return (
        <div className="side-menu flex-lg-column mr-lg-1">
            {/* LOGO */}
            <div className="navbar-brand-box">
            <a className="logo logo-dark">
                <span className="logo-sm">
                <img src="assets/images/logo.svg" alt="" height={30} />
                </span>
            </a>
            </div>
            {/* end navbar-brand-box */}
            {/* Start side-menu nav */}
            <div className="flex-lg-column my-auto">
            <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
                <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Profile">
                    <a className={currentTab === 'Profile' ? "nav-link active" : "nav-link"}
                        id="pills-user-tab" data-toggle="pill" href="#pills-user" role="tab">
                        <i className="ri-user-2-line" />
                    </a>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Contacts">
                    <a className={currentTab === 'Contacts' ? "nav-link active" : "nav-link"} 
                        id="pills-contacts-tab" data-toggle="pill" href="#pills-contacts" role="tab">
                        <i className="ri-contacts-line"></i>
                    </a>
                </li>
                <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                    </a>
                </li>
            </ul>
            </div>
            {/* end side-menu nav */}
            <div className="flex-lg-column d-none d-lg-block">
            <ul className="nav side-menu-nav justify-content-center">
                <li className="nav-item btn-group dropup profile-user-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={props.avatar} alt="" className="profile-user rounded-circle" />
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={logout}>Log out <i className="ri-logout-circle-r-line float-right text-muted" /></a>
                </div>
                </li>
            </ul>
            </div>
            {/* Side menu user */}
        </div>
    );
}

export default SideBar;
import React, { Component } from 'react';

class chat extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="layout-wrapper d-lg-flex">
            {/* Start left sidebar-menu */}
            <div className="side-menu flex-lg-column mr-lg-1">
                {/* LOGO */}
                <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                    <img src="assets/images/logo.svg" alt="" height={30} />
                    </span>
                </a>
                <a href="index.html" className="logo logo-light">
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
                    <a className="nav-link" id="pills-user-tab" data-toggle="pill" href="#pills-user" role="tab">
                        <i className="ri-user-2-line" />
                    </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Chats">
                    <a className="nav-link active" id="pills-chat-tab" data-toggle="pill" href="#pills-chat" role="tab">
                        <i className="ri-message-3-line" />
                    </a>
                    </li>
                    <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                    <a className="nav-link dropdown-toggle" href="javascript: void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Log out <i className="ri-logout-circle-r-line float-right text-muted" /></a>
                    </div>
                    </li>
                </ul>
                </div>
                {/* end side-menu nav */}
                <div className="flex-lg-column d-none d-lg-block">
                <ul className="nav side-menu-nav justify-content-center">
                    <li className="nav-item btn-group dropup profile-user-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Log out <i className="ri-logout-circle-r-line float-right text-muted" /></a>
                    </div>
                    </li>
                </ul>
                </div>
                {/* Side menu user */}
            </div>
            {/* end left sidebar-menu */}
            {/* start chat-leftsidebar */}
            <div className="chat-leftsidebar mr-lg-1">
                <div className="tab-content">
                {/* Start Profile tab-pane */}
                <div className="tab-pane" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                    {/* Start profile content */}
                    <div>
                    <div className="px-4 pt-4">
                        <h4 className="mb-0">My Profile</h4>
                    </div>
                    <div className="text-center p-4 border-bottom">
                        <div className="mb-4">
                        <img src="assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="" />
                        </div>
                        <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
                        <p className="text-muted text-truncate mb-1"><i className="ri-record-circle-fill font-size-10 text-success mr-1 d-inline-block" /> Active</p>
                    </div>
                    {/* End profile user */}
                    {/* Start user-profile-desc */}
                    <div className="p-4 user-profile-desc" data-simplebar>
                        <div className="text-muted">
                        <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                        </div>
                        <div id="profile-user-accordion-1" className="custom-accordion">
                        <div className="card shadow-none border mb-2">
                            <a href="#profile-user-collapseOne" className="text-dark" data-toggle="collapse" aria-expanded="true" aria-controls="profile-user-collapseOne">
                            <div className="card-header" id="profile-user-headingOne">
                                <h5 className="font-size-14 m-0">
                                <i className="ri-user-2-line mr-2 align-middle d-inline-block" /> About
                                <i className="mdi mdi-chevron-up float-right accor-plus-icon" />
                                </h5>
                            </div>
                            </a>
                            <div id="profile-user-collapseOne" className="collapse show" aria-labelledby="profile-user-headingOne" data-parent="#profile-user-accordion-1">
                            <div className="card-body">
                                <div>
                                <p className="text-muted mb-1">Name</p>
                                <h5 className="font-size-14">Patricia Smith</h5>
                                </div>
                                <div className="mt-4">
                                <p className="text-muted mb-1">Email</p>
                                <h5 className="font-size-14">adc@123.com</h5>
                                </div>
                                <div className="mt-4">
                                <p className="text-muted mb-1">Time</p>
                                <h5 className="font-size-14">11:40 AM</h5>
                                </div>
                                <div className="mt-4">
                                <p className="text-muted mb-1">Location</p>
                                <h5 className="font-size-14 mb-0">California, USA</h5>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End About card */}
                        </div>
                        {/* end profile-user-accordion */}
                    </div>
                    {/* end user-profile-desc */}
                    </div>
                    {/* End profile content */}
                </div>
                {/* End Profile tab-pane */}
                {/* Start chats tab-pane */}
                <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                    {/* Start chats content */}
                    <div>
                    <div className="px-4 pt-4">
                        <h4 className="mb-4">Chats</h4>
                        <div className="search-box chat-search-box">
                        <div className="input-group mb-3 bg-light  input-group-lg rounded-lg">
                            <div className="input-group-prepend">
                            <button className="btn btn-link text-muted pr-1 text-decoration-none" type="button">
                                <i className="ri-search-line search-icon font-size-18" />
                            </button>
                            </div>
                            <input type="text" className="form-control bg-light" placeholder="Search messages or users" />
                        </div> 
                        </div> {/* Search Box*/}
                    </div> {/* .p-4 */}
                    {/* Start user status */}
                    <div className="px-4 pb-4" dir="ltr">
                        <div className="owl-carousel owl-theme" id="user-status-carousel">
                        <div className="item">
                            <a href="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src="assets/images/users/avatar-2.jpg" alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status" />
                            </div>
                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src="assets/images/users/avatar-4.jpg" alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status" />
                            </div>
                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Doris</h5>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src="assets/images/users/avatar-5.jpg" alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status" />
                            </div>
                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Emily</h5>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <img src="assets/images/users/avatar-6.jpg" alt="user-img" className="img-fluid rounded-circle" />
                                <span className="user-status" />
                            </div>
                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Steve</h5>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="user-status-box">
                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                T
                                </span>
                                <span className="user-status" />
                            </div>
                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Teresa</h5>
                            </a>
                        </div>
                        </div>
                        {/* end user status carousel */}
                    </div>
                    {/* end user status */}
                    {/* Start chat-message-list */}
                    <div className="px-2">
                        <h5 className="mb-3 px-3 font-size-16">Recent</h5>
                        <div className="chat-message-list" data-simplebar>
                        <ul className="list-unstyled chat-list chat-user-list">
                            <li>
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img online align-self-center mr-3">
                                    <img src="assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Patrick Hendricks</h5>
                                    <p className="chat-user-message text-truncate mb-0">Hey! there I'm available</p>
                                </div>
                                <div className="font-size-11">05 min</div>
                                </div>
                            </a>
                            </li>
                            <li className="unread">
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img away align-self-center mr-3">
                                    <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Mark Messer</h5>
                                    <p className="chat-user-message text-truncate mb-0"><i className="ri-image-fill align-middle mr-1" /> Images</p>
                                </div>
                                <div className="font-size-11">12 min</div>
                                <div className="unread-message">
                                    <span className="badge badge-soft-danger badge-pill">02</span>
                                </div>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img align-self-center mr-3">
                                    <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        G
                                    </span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">General</h5>
                                    <p className="chat-user-message text-truncate mb-0">This theme is awesome!</p>
                                </div>
                                <div className="font-size-11">20 min</div>
                                </div>
                            </a>
                            </li>
                            <li className="active">
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img online align-self-center mr-3">
                                    <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Doris Brown</h5>
                                    <p className="chat-user-message text-truncate mb-0">Nice to meet you</p>
                                </div>
                                <div className="font-size-11">10:12 AM</div>
                                </div>
                            </a>
                            </li>
                            <li className="unread">
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img align-self-center mr-3">
                                    <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        D
                                    </span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Designer</h5>
                                    <p className="chat-user-message text-truncate mb-0">Next meeting tomorrow 10.00AM</p>
                                </div>
                                <div className="font-size-11">12:01 PM</div>
                                <div className="unread-message">
                                    <span className="badge badge-soft-danger badge-pill">01</span>
                                </div>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img away align-self-center mr-3">
                                    <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Steve Walker</h5>
                                    <p className="chat-user-message text-truncate mb-0"><i className="ri-file-text-fill align-middle mr-1" /> Admin-A.zip</p>
                                </div>
                                <div className="font-size-11">03:20 PM</div>
                                </div>
                            </a>
                            </li>
                            <li className="typing">
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img align-self-center online mr-3">
                                    <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        A
                                    </span>
                                    </div>
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Albert Rodarte</h5>
                                    <p className="chat-user-message text-truncate mb-0">typing<span className="animate-typing">
                                        <span className="dot" />
                                        <span className="dot" />
                                        <span className="dot" />
                                    </span></p>
                                </div>
                                <div className="font-size-11">04:56 PM</div>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img align-self-center online mr-3">
                                    <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        M
                                    </span>
                                    </div>
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Mirta George</h5>
                                    <p className="chat-user-message text-truncate mb-0">Yeah everything is fine</p>
                                </div>
                                <div className="font-size-11">12/07</div>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="media">
                                <div className="chat-user-img away align-self-center mr-3">
                                    <img src="assets/images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status" />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <h5 className="text-truncate font-size-15 mb-1">Paul Haynes</h5>
                                    <p className="chat-user-message text-truncate mb-0">Good morning</p>
                                </div>
                                <div className="font-size-11">12/07</div>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* End chat-message-list */}
                    </div>
                    {/* Start chats content */}
                </div>
                {/* End chats tab-pane */}
                </div>
                {/* end tab content */}
            </div>
            {/* end chat-leftsidebar */}
            {/* Start User chat */}
            <div className="user-chat w-100">
                <div className="d-lg-flex">
                {/* start chat conversation section */}
                <div className="w-100">
                    <div className="p-3 p-lg-4 border-bottom">
                    <div className="row align-items-center">
                        <div className="col-sm-4 col-8">
                        <div className="media align-items-center">
                            <div className="d-block d-lg-none mr-2">
                            <a href="javascript: void(0);" className="user-chat-remove text-muted font-size-16 p-2"><i className="ri-arrow-left-s-line" /></a>
                            </div>
                            <div className="mr-3">
                            <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                            </div>
                            <div className="media-body overflow-hidden">
                            <h5 className="font-size-16 mb-0 text-truncate"><a href="#" className="text-reset user-profile-show">Doris Brown</a> <i className="ri-record-circle-fill font-size-10 text-success d-inline-block ml-1" /></h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-8 col-4">
                        <ul className="list-inline user-chat-nav text-right mb-0">
                            <li className="list-inline-item d-none d-lg-inline-block">
                            <button type="button" className="btn nav-btn user-profile-show">
                                <i className="ri-user-2-line" />
                            </button>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* end chat user head */}
                    {/* start chat conversation */}
                    <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                    <ul className="list-unstyled mb-0">
                        <li>
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-4.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    Good morning
                                </p>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:00</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="conversation-name">Doris Brown</div>
                            </div>
                        </div>
                        </li>
                        <li className="right">
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-1.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    Good morning, How are you? What about our next meeting?
                                </p>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:02</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="conversation-name">Patricia Smith</div>
                            </div>
                        </div>
                        </li>
                        <li> 
                        <div className="chat-day-title">
                            <span className="title">Today</span>
                        </div>
                        </li>
                        <li>
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-4.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    Yeah everything is fine
                                </p>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:05</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    &amp; Next meeting tomorrow 10.00AM
                                </p>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:05</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="conversation-name">Doris Brown</div>
                            </div>
                        </div>
                        </li>
                        <li className="right">
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-1.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    Wow that's great
                                </p>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:06</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="conversation-name">Patricia Smith</div>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-4.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <ul className="list-inline message-img  mb-0">
                                    <li className="list-inline-item message-img-list">
                                    <div>
                                        <a className="popup-img d-inline-block m-1" href="assets/images/small/img-1.jpg" title="Project 1">
                                        <img src="assets/images/small/img-1.jpg" alt="" className="rounded border" />
                                        </a>
                                    </div>
                                    <div className="message-img-link">
                                        <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <a href="#">
                                            <i className="ri-download-2-line" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item dropdown">
                                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-more-fill" />
                                            </a>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </li>
                                    <li className="list-inline-item message-img-list">
                                    <div>
                                        <a className="popup-img d-inline-block m-1" href="assets/images/small/img-2.jpg" title="Project 2">
                                        <img src="assets/images/small/img-2.jpg" alt="" className="rounded border" />
                                        </a>
                                    </div>
                                    <div className="message-img-link">
                                        <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <a href="#">
                                            <i className="ri-download-2-line" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item dropdown">
                                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-more-fill" />
                                            </a>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </li>
                                </ul>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:09</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="conversation-name">Doris Brown</div>
                            </div>
                        </div>
                        </li>
                        <li className="right">
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-1.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <div className="card p-2 mb-2">
                                    <div className="media align-items-center">
                                    <div className="avatar-sm mr-3">
                                        <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                        <i className="ri-file-text-fill" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <div className="text-left">
                                        <h5 className="font-size-14 mb-1">admin_v1.0.zip</h5>
                                        <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <ul className="list-inline mb-0 font-size-20">
                                        <li className="list-inline-item">
                                            <a href="#" className="text-muted">
                                            <i className="ri-download-2-line" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item dropdown">
                                            <a className="dropdown-toggle text-muted" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-more-fill" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Share <i className="ri-share-line float-right text-muted" /></a>
                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">10:16</span></p>
                                </div>
                                <div className="dropdown align-self-start">
                                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-more-2-fill" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                                </div>
                                </div>
                            </div>
                            <div className="conversation-name">Patricia Smith</div>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="conversation-list">
                            <div className="chat-avatar">
                            <img src="assets/images/users/avatar-4.jpg" alt="" />
                            </div>
                            <div className="user-chat-content">
                            <div className="ctext-wrap">
                                <div className="ctext-wrap-content">
                                <p className="mb-0">
                                    typing
                                    <span className="animate-typing">
                                    <span className="dot" />
                                    <span className="dot" />
                                    <span className="dot" />
                                    </span>
                                </p>
                                </div>
                            </div>
                            <div className="conversation-name">Doris Brown</div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                    {/* end chat conversation end */}
                    {/* start chat input section */}
                    <div className="p-3 p-lg-4 border-top mb-0">
                    <div className="row no-gutters">
                        <div className="col">
                        <div>
                            <input type="text" className="form-control form-control-lg bg-light border-light" placeholder="Enter Message..." />
                        </div>
                        </div>
                        <div className="col-auto">
                        <div className="chat-input-links ml-md-2">
                            <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <button type="button" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect" data-toggle="tooltip" data-placement="top" title="Emoji">
                                <i className="ri-emotion-happy-line" />
                                </button>
                            </li>
                            <li className="list-inline-item">
                                <button type="submit" className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light">
                                <i className="ri-send-plane-2-fill" />
                                </button>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* end chat input section */}
                </div>
                {/* end chat conversation section */}
                {/* start User profile detail sidebar */}
                <div className="user-profile-sidebar">
                    <div className="px-3 px-lg-4 pt-3 pt-lg-4">
                    <div className="user-chat-nav text-right">
                        <button type="button" className="btn nav-btn" id="user-profile-hide">
                        <i className="ri-close-line" />
                        </button>
                    </div>
                    </div>
                    <div className="text-center p-4 border-bottom">
                    <div className="mb-4">
                        <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="" />
                    </div>
                    <h5 className="font-size-16 mb-1 text-truncate">Doris Brown</h5>
                    <p className="text-muted text-truncate mb-1"><i className="ri-record-circle-fill font-size-10 text-success mr-1" /> Active</p>
                    </div>
                    {/* End profile user */}
                    {/* Start user-profile-desc */}
                    <div className="p-4 user-profile-desc" data-simplebar>
                    <div className="text-muted">
                        <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                    </div>
                    <div id="profile-user-accordion" className="custom-accordion">
                        <div className="card shadow-none border mb-2">
                        <a href="#collapseOne" className="text-dark" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                            <div className="card-header" id="headingOne">
                            <h5 className="font-size-14 m-0">
                                <i className="ri-user-2-line mr-2 align-middle d-inline-block" /> About
                                <i className="mdi mdi-chevron-up float-right accor-plus-icon" />
                            </h5>
                            </div>
                        </a>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#profile-user-accordion">
                            <div className="card-body">
                            <div>
                                <p className="text-muted mb-1">Name</p>
                                <h5 className="font-size-14">Doris Brown</h5>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted mb-1">Email</p>
                                <h5 className="font-size-14">adc@123.com</h5>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted mb-1">Time</p>
                                <h5 className="font-size-14">11:40 AM</h5>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted mb-1">Location</p>
                                <h5 className="font-size-14 mb-0">California, USA</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* End About card */}
                    </div>
                    {/* end profile-user-accordion */}
                    </div>
                    {/* end user-profile-desc */}
                </div>
                {/* end User profile detail sidebar */}
                </div>
            </div>
            {/* End User chat */}
            </div>

        ) 
    }
}

export default chat
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Header() {

    function titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
           sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
     return sentence;
     }
    const Name =localStorage.getItem("name");
    const Usertype = titleCase(localStorage.getItem("usertype"));

    return (
        <div>
            <div>
                <div>
                    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar mt-5">
                        {/* Header */}

                        <div className="app-header header-shadow">
                            <div className="app-header__logo">
                                <div className="logo-src"> </div>
                                <div className="header__pane ml-auto">
                                    <div>
                                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="app-header__mobile-menu">
                                <div>
                                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="app-header__menu">
                                <span>
                                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                        <span className="btn-icon-wrapper">
                                            <i className="fa fa-ellipsis-v fa-w-6"></i>
                                        </span>
                                    </button>
                                </span>
                            </div>
                            <div className="app-header__content">
                                <div className="app-header-right">
                                    <div className="search-wrapper">
                                        <div className="input-holder">
                                            <input type="text" className="search-input" placeholder="Type to search"></input>
                                            <button className="search-icon"><span></span></button>
                                        </div>
                                        
                                        <button className="close"></button>

                                    </div>
                                    {/* serch right side  */}


                                </div>
                                <h4>Pragati Hardware</h4>

                                <div className="app-header-right">
                                    <div className="header-dots">

                                        {/* user login info side     */}

                                    </div>
                                    <div className="header-btn-lg pr-0">
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="btn-group">
                                                        <a data-toggle="dropdown" href='/' aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                            <img className="rounded-circle  " src={require("../assets/images/avatars/2.jpg")} alt="" />
                                                            <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                                        </a>
                                                        <div tabIndex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                                            <div className="dropdown-menu-header">
                                                                <div className="dropdown-menu-header-inner bg-info">
                                                                    <div className="menu-header-image opacity-2" style={{ backgroundImage: `url('assets/images/dropdown-header/city3.jpg')` }}></div>
                                                                    <div className="menu-header-content text-left">
                                                                        <div className="widget-content p-0">
                                                                            <div className="widget-content-wrapper">
                                                                                <div className="widget-content-left mr-3">
                                                                                    <img className="rounded-circle" src={require("../assets/images/avatars/2.jpg")} alt="" />
                                                                                </div>
                                                                                <div className="widget-content-left">
                                                                                    <div className="widget-heading">{Name}</div>
                                                                                    <div className="widget-subheading opacity-8"> {Usertype}</div>
                                                                                </div> <div className="widget-content-right mr-2">
                                                                                    <Link to='/login'> <button className="btn-pill bg-primary btn-shadow btn-shine btn btn-focus">Log Out</button></Link>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="scroll-area-xs" style={{ height: "150px" }}>
                                                                <div className="scrollbar-container ps">
                                                                    <ul className="nav flex-column">
                                                                        <li className="nav-item-header nav-item">Activity</li>

                                                                        <li className="nav-item">
                                                                            <Link to='/master' className="nav-link">Recover Password</Link>
                                                                        </li>
                                                                        <ul className="nav flex-column">
                                                                            <li className="nav-item-divider mb-0 nav-item"></li>
                                                                        </ul>
                                                                        <li className="nav-item-header nav-item">My Account
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link to='/master' className="nav-link">Settings
                                                                                <div className="ml-auto badge badge-success">New</div>
                                                                            </Link>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>


                                                            <ul className="nav flex-column">
                                                                <li className="nav-item-divider nav-item">
                                                                </li>
                                                                <li className="nav-item-btn text-center nav-item">
                                                                    <button className="btn-wide btn btn-primary btn-sm"> Open Messages </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left  ml-3 header-user-info">
                                                    <div className="widget-heading"> {Name} </div>
                                                    <div className="widget-subheading"> {Usertype} </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="ui-theme-settings">
                            <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
                                <i className="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
                            </button>
                            <div className="theme-settings__inner">
                                <div className="scrollbar-container">
                                    <div className="theme-settings__options-wrapper">
                                        <h3 className="themeoptions-heading">Layout Options</h3>
                                        <div className="p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="switch has-switch switch-container-className" data-class="fixed-header">
                                                                    <div className="switch-animate switch-on">
                                                                        <input type="checkbox" data-toggle="toggle" data-onstyle="success"></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Fixed Header</div>
                                                                <div className="widget-subheading">Makes the header top fixed, always visible!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="switch has-switch switch-container-className" data-class="fixed-sidebar">
                                                                    <div className="switch-animate switch-on">
                                                                        <input type="checkbox" data-toggle="toggle" data-onstyle="success"></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Fixed Sidebar</div>
                                                                <div className="widget-subheading">Makes the sidebar left fixed, always visible!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="switch has-switch switch-container-className" data-class="fixed-footer">
                                                                    <div className="switch-animate switch-off">
                                                                        <input type="checkbox" data-toggle="toggle" data-onstyle="success"></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading">Fixed Footer</div>
                                                                <div className="widget-subheading">Makes the app footer bottom fixed, always visible!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="themeoptions-heading">
                                            <div> Header Options </div>
                                            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-className" data-class="">
                                                Restore Default
                                            </button>
                                        </h3>
                                        <div className="p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <h5 className="pb-2">Choose Color Scheme</h5>
                                                    <div className="theme-settings-swatches">
                                                        <div className="swatch-holder bg-primary switch-header-cs-className" data-class="bg-primary header-text-light"></div>
                                                        <div className="swatch-holder bg-secondary switch-header-cs-className" data-class="bg-secondary header-text-light"></div>
                                                        <div className="swatch-holder bg-success switch-header-cs-className" data-class="bg-success header-text-light"></div>
                                                        <div className="swatch-holder bg-info switch-header-cs-className" data-class="bg-info header-text-light"></div>
                                                        <div className="swatch-holder bg-warning switch-header-cs-className" data-class="bg-warning header-text-dark"></div>
                                                        <div className="swatch-holder bg-danger switch-header-cs-className" data-class="bg-danger header-text-light"></div>
                                                        <div className="swatch-holder bg-light switch-header-cs-className" data-class="bg-light header-text-dark"></div>
                                                        <div className="swatch-holder bg-dark switch-header-cs-className" data-class="bg-dark header-text-light"></div>
                                                        <div className="swatch-holder bg-focus switch-header-cs-className" data-class="bg-focus header-text-light"></div>
                                                        <div className="swatch-holder bg-alternate switch-header-cs-className" data-class="bg-alternate header-text-light"></div>
                                                        <div className="divider"></div>
                                                        <div className="swatch-holder bg-vicious-stance switch-header-cs-className" data-class="bg-vicious-stance header-text-light"></div>
                                                        <div className="swatch-holder bg-midnight-bloom switch-header-cs-className" data-class="bg-midnight-bloom header-text-light"></div>
                                                        <div className="swatch-holder bg-night-sky switch-header-cs-className" data-class="bg-night-sky header-text-light"></div>
                                                        <div className="swatch-holder bg-slick-carbon switch-header-cs-className" data-class="bg-slick-carbon header-text-light"></div>
                                                        <div className="swatch-holder bg-asteroid switch-header-cs-className" data-class="bg-asteroid header-text-light"></div>
                                                        <div className="swatch-holder bg-royal switch-header-cs-className" data-class="bg-royal header-text-light"></div>
                                                        <div className="swatch-holder bg-warm-flame switch-header-cs-className" data-class="bg-warm-flame header-text-dark"></div>
                                                        <div className="swatch-holder bg-night-fade switch-header-cs-className" data-class="bg-night-fade header-text-dark"></div>
                                                        <div className="swatch-holder bg-sunny-morning switch-header-cs-className" data-class="bg-sunny-morning header-text-dark"></div>
                                                        <div className="swatch-holder bg-tempting-azure switch-header-cs-className" data-class="bg-tempting-azure header-text-dark"></div>
                                                        <div className="swatch-holder bg-amy-crisp switch-header-cs-className" data-class="bg-amy-crisp header-text-dark"></div>
                                                        <div className="swatch-holder bg-heavy-rain switch-header-cs-className" data-class="bg-heavy-rain header-text-dark"></div>
                                                        <div className="swatch-holder bg-mean-fruit switch-header-cs-className" data-class="bg-mean-fruit header-text-dark"></div>
                                                        <div className="swatch-holder bg-malibu-beach switch-header-cs-className" data-class="bg-malibu-beach header-text-light"></div>
                                                        <div className="swatch-holder bg-deep-blue switch-header-cs-className" data-class="bg-deep-blue header-text-dark"></div>
                                                        <div className="swatch-holder bg-ripe-malin switch-header-cs-className" data-class="bg-ripe-malin header-text-light"></div>
                                                        <div className="swatch-holder bg-arielle-smile switch-header-cs-className" data-class="bg-arielle-smile header-text-light"></div>
                                                        <div className="swatch-holder bg-plum-plate switch-header-cs-className" data-class="bg-plum-plate header-text-light"></div>
                                                        <div className="swatch-holder bg-happy-fisher switch-header-cs-className" data-class="bg-happy-fisher header-text-dark"></div>
                                                        <div className="swatch-holder bg-happy-itmeo switch-header-cs-className" data-class="bg-happy-itmeo header-text-light"></div>
                                                        <div className="swatch-holder bg-mixed-hopes switch-header-cs-className" data-class="bg-mixed-hopes header-text-light"></div>
                                                        <div className="swatch-holder bg-strong-bliss switch-header-cs-className" data-class="bg-strong-bliss header-text-light"></div>
                                                        <div className="swatch-holder bg-grow-early switch-header-cs-className" data-class="bg-grow-early header-text-light"></div>
                                                        <div className="swatch-holder bg-love-kiss switch-header-cs-className" data-class="bg-love-kiss header-text-light"></div>
                                                        <div className="swatch-holder bg-premium-dark switch-header-cs-className" data-class="bg-premium-dark header-text-light"></div>
                                                        <div className="swatch-holder bg-happy-green switch-header-cs-className" data-class="bg-happy-green header-text-light"></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h3 className="themeoptions-heading">
                                            <div>Sidebar Options</div>
                                            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-className" data-class="">
                                                Restore Default
                                            </button>
                                        </h3>
                                        <div className="p-3">
                                            <ul className="list-group">

                                                <li className="list-group-item">
                                                    <h5 className="pb-2">Choose Color Scheme</h5>
                                                    <div className="theme-settings-swatches">
                                                        <div className="swatch-holder bg-primary switch-sidebar-cs-className" data-class="bg-primary sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-secondary switch-sidebar-cs-className" data-class="bg-secondary sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-success switch-sidebar-cs-className" data-class="bg-success sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-info switch-sidebar-cs-className" data-class="bg-info sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-warning switch-sidebar-cs-className" data-class="bg-warning sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-danger switch-sidebar-cs-className" data-class="bg-danger sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-light switch-sidebar-cs-className" data-class="bg-light sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-dark switch-sidebar-cs-className" data-class="bg-dark sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-focus switch-sidebar-cs-className" data-class="bg-focus sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-alternate switch-sidebar-cs-className" data-class="bg-alternate sidebar-text-light"></div>
                                                        <div className="divider"></div>
                                                        <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-className" data-class="bg-vicious-stance sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-className" data-class="bg-midnight-bloom sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-night-sky switch-sidebar-cs-className" data-class="bg-night-sky sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-className" data-class="bg-slick-carbon sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-asteroid switch-sidebar-cs-className" data-class="bg-asteroid sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-royal switch-sidebar-cs-className" data-class="bg-royal sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-warm-flame switch-sidebar-cs-className" data-class="bg-warm-flame sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-night-fade switch-sidebar-cs-className" data-class="bg-night-fade sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-className" data-class="bg-sunny-morning sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-className" data-class="bg-tempting-azure sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-className" data-class="bg-amy-crisp sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-className" data-class="bg-heavy-rain sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-className" data-class="bg-mean-fruit sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-className" data-class="bg-malibu-beach sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-deep-blue switch-sidebar-cs-className" data-class="bg-deep-blue sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-className" data-class="bg-ripe-malin sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-className" data-class="bg-arielle-smile sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-plum-plate switch-sidebar-cs-className" data-class="bg-plum-plate sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-className" data-class="bg-happy-fisher sidebar-text-dark"></div>
                                                        <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-className" data-class="bg-happy-itmeo sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-className" data-class="bg-mixed-hopes sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-className" data-class="bg-strong-bliss sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-grow-early switch-sidebar-cs-className" data-class="bg-grow-early sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-love-kiss switch-sidebar-cs-className" data-class="bg-love-kiss sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-premium-dark switch-sidebar-cs-className" data-class="bg-premium-dark sidebar-text-light"></div>
                                                        <div className="swatch-holder bg-happy-green switch-sidebar-cs-className" data-class="bg-happy-green sidebar-text-light"></div>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>
                                        <h3 className="themeoptions-heading">
                                            <div>Main Content Options</div>
                                            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default</button>
                                        </h3>
                                        <div className="p-3">
                                            <ul className="list-group">

                                                <li className="list-group-item">
                                                    <h5 className="pb-2">Page Section Tabs</h5>
                                                    <div className="theme-settings-swatches">
                                                        <div role="group" className="mt-2 btn-group">
                                                            <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-className" data-class="body-tabs-line"> Line</button>
                                                            <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-className" data-class="body-tabs-shadow"> Shadow </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <h5 className="pb-2">Light Color Schemes
                                                    </h5>
                                                    <div className="theme-settings-swatches">
                                                        <div role="group" className="mt-2 btn-group">
                                                            <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-className" data-class="app-theme-white"> White Theme</button>
                                                            <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-className" data-class="app-theme-gray"> Gray Theme</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="app-main"> */}


                        {/*----------------- Sidebar -----------------------*/}

                        <div className="row" style={{ marginTop: '72px' }}>
                            <div className="col-lg-2">

                                <div className="app-sidebar sidebar-shadow">
                                    <div className="app-header__logo">
                                        <div className="logo-src">
                                        </div>
                                        <div className="header__pane ml-auto">
                                            <div>
                                                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                                    <span className="hamburger-box">
                                                        <span className="hamburger-inner"></span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="app-header__mobile-menu">
                                        <div>
                                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                                <span className="hamburger-box">
                                                    <span className="hamburger-inner"></span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="app-header__menu">
                                        <span>
                                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                                <span className="btn-icon-wrapper">
                                                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                                                </span>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="scrollbar-sidebar">
                                        <div className="app-sidebar__inner"> <h3>P <br /> |-| </h3>
                                            <ul className="vertical-nav-menu">
                                                <li className="app-sidebar__heading ">Menu</li>
                                                <li className="mm-active">
                                                    <Link to="/master">
                                                        <i className="metismenu-icon pe-7s-rocket"></i>Masters
                                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                                    </Link>
                                                    <ul>
                                                        <li><Link to="/master/cities">Cities</Link></li>
                                                        <li><Link to="/master/productcatagories">Product Catagories</Link></li>
                                                        <li><Link to="/master/companies">Companies</Link></li>
                                                        <li><Link to="/master/dealers">Dealer</Link></li>
                                                        <li><Link to="/master/products">Product</Link></li>
                                                        <li><Link to="/master/users">Users</Link></li>

                                                    </ul>
                                                </li>

                                                {/* components  */}


                                                <li>
                                                    <Link to="/settings">
                                                        <i className="metismenu-icon pe-7s-settings"></i> Settings
                                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                                    </Link>
                                                    <ul>

                                                        <li>
                                                            <Link to='/settings/bulkprices'>
                                                                <i className="metismenu-icon"></i> Bulk Prices
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li>
                                                    <Link to="/quotation">
                                                        <i className="metismenu-icon pe-7s-display2"></i> Quotations
                                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                                    </Link>
                                                    <ul>

                                                        <li>
                                                            <a href='/quotation/quotations'>
                                                                <i className="metismenu-icon"></i> Quotation
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </li>









                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-9 mx-auto">
                                <Outlet />
                            </div>
                        </div>


                        {/* </div> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

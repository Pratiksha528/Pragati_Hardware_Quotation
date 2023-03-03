import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
       <div>
         <div>
      <div className="row">
        <div className="col-lg-2">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src"></div>
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                  </span>
                </button>
              </span>
            </div>{" "}
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">Menu</li>
                  <li className="mm-active">
                    <a href="/">
                      <i className="metismenu-icon pe-7s-rocket"></i>Dashboards
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                          <li><Link to="/dashboards/analyticsdashboard">Analytics Dashboard</Link></li>
                          <li><Link to="/dashboards/technicalsupport">Technical Supports</Link></li>
                          <li><Link to="/dashboards/chartcard">Chart Card</Link></li>
                          <li><Link to="/dashboards/dynamictables">Dynamic Tables</Link></li>
                          <li><Link to="/dashboards/taskandchatbox">Task And Chatbox</Link></li>
                          <li><Link to="/dashboards/totalorders">TotalOrders</Link></li>
                        <a href="index.html" className="mm-active">
                          <i className="metismenu-icon"></i>Analytics
                        </a>
                      </li>
                      <li>
                        <a href="dashboards-commerce.html">
                          <i className="metismenu-icon"></i>Commerce
                        </a>
                      </li>
                      <li>
                        <a href="dashboards-sales.html">
                          <i className="metismenu-icon"></i>Sales
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="metismenu-icon"></i> Minimal
                          <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="dashboards-minimal-1.html">
                              <i className="metismenu-icon"></i>Variation 1
                            </a>
                          </li>
                          <li>
                            <a href="dashboards-minimal-2.html">
                              <i className="metismenu-icon"></i>Variation 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="dashboards-crm.html">
                          <i className="metismenu-icon"></i> CRM
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-browser"></i>Pages
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="pages-login.html">
                          <i className="metismenu-icon"></i> Login
                        </a>
                      </li>
                      <li>
                        <a href="pages-login-boxed.html">
                          <i className="metismenu-icon"></i>Login Boxed
                        </a>
                      </li>
                      <li>
                        <a href="pages-register.html">
                          <i className="metismenu-icon"></i>Register
                        </a>
                      </li>
                      <li>
                        <a href="pages-register-boxed.html">
                          <i className="metismenu-icon"></i>Register Boxed
                        </a>
                      </li>
                      <li>
                        <a href="pages-forgot-password.html">
                          <i className="metismenu-icon"></i>Forgot Password
                        </a>
                      </li>
                      <li>
                        <a href="pages-forgot-password-boxed.html">
                          <i className="metismenu-icon"></i>Forgot Password Boxed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-plugin"></i>Applications
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="apps-mailbox.html">
                          <i className="metismenu-icon"></i>Mailbox
                        </a>
                      </li>
                      <li>
                        <a href="apps-chat.html">
                          <i className="metismenu-icon"></i>Chat
                        </a>
                      </li>
                      <li>
                        <a href="apps-faq-section.html">
                          <i className="metismenu-icon"></i>FAQ Section
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="metismenu-icon"></i>Forums
                          <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="apps-forum-list.html">
                              <i className="metismenu-icon"></i>Forum Listing
                            </a>
                          </li>
                          <li>
                            <a href="apps-forum-threads.html">
                              <i className="metismenu-icon"></i>Forum Threads
                            </a>
                          </li>
                          <li>
                            <a href="apps-forum-discussion.html">
                              <i className="metismenu-icon"></i>Forum Discussion
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="app-sidebar__heading">UI Components</li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-diamond"></i> Elements
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/">
                          <i className="metismenu-icon"></i> Buttons
                          <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="elements-buttons-standard.html">
                              <i className="metismenu-icon"></i>Standard
                            </a>
                          </li>
                          <li>
                            <a href="elements-buttons-pills.html">
                              <i className="metismenu-icon"></i>Pills
                            </a>
                          </li>
                          <li>
                            <a href="elements-buttons-square.html">
                              <i className="metismenu-icon"></i>Square
                            </a>
                          </li>
                          <li>
                            <a href="elements-buttons-shadow.html">
                              <i className="metismenu-icon"></i>Shadow
                            </a>
                          </li>
                          <li>
                            <a href="elements-buttons-icons.html">
                              <i className="metismenu-icon"></i>With Icons
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="elements-dropdowns.html">
                          <i className="metismenu-icon"></i>Dropdowns
                        </a>
                      </li>
                      <li>
                        <a href="elements-icons.html">
                          <i className="metismenu-icon"></i>Icons
                        </a>
                      </li>
                      <li>
                        <a href="elements-badges-labels.html">
                          <i className="metismenu-icon"></i>Badges
                        </a>
                      </li>
                      <li>
                        <a href="elements-cards.html">
                          <i className="metismenu-icon"></i>Cards
                        </a>
                      </li>
                      <li>
                        <a href="elements-loaders.html">
                          <i className="metismenu-icon"></i>Loading Indicators
                        </a>
                      </li>
                      <li>
                        <a href="elements-list-group.html">
                          <i className="metismenu-icon"></i>List Groups
                        </a>
                      </li>
                      <li>
                        <a href="elements-navigation.html">
                          <i className="metismenu-icon"></i>Navigation Menus
                        </a>
                      </li>
                      <li>
                        <a href="elements-timelines.html">
                          <i className="metismenu-icon"></i>Timeline
                        </a>
                      </li>
                      <li>
                        <a href="elements-utilities.html">
                          <i className="metismenu-icon"></i>Utilities
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-car"></i> Components
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="components-tabs.html">
                          <i className="metismenu-icon"></i>Tabs
                        </a>
                      </li>
                      <li>
                        <a href="components-accordions.html">
                          <i className="metismenu-icon"></i>Accordions
                        </a>
                      </li>
                      <li>
                        <a href="components-notifications.html">
                          <i className="metismenu-icon"></i>Notifications
                        </a>
                      </li>
                      <li>
                        <a href="components-modals.html">
                          <i className="metismenu-icon"></i>Modals
                        </a>
                      </li>
                      <li>
                        <a href="components-loading-blocks.html">
                          <i className="metismenu-icon"></i>Loading Blockers
                        </a>
                      </li>
                      <li>
                        <a href="components-progress-bar.html">
                          <i className="metismenu-icon"></i>Progress Bar
                        </a>
                      </li>
                      <li>
                        <a href="components-tooltips-popovers.html">
                          <i className="metismenu-icon"> </i>Tooltips &amp; Popovers
                        </a>
                      </li>
                      <li>
                        <a href="components-carousel.html">
                          <i className="metismenu-icon"></i>Carousel
                        </a>
                      </li>
                      <li>
                        <a href="components-calendar.html">
                          <i className="metismenu-icon"></i>Calendar
                        </a>
                      </li>
                      <li>
                        <a href="components-pagination.html">
                          <i className="metismenu-icon"></i>Pagination
                        </a>
                      </li>
                      <li>
                        <a href="components-count-up.html">
                          <i className="metismenu-icon"></i>Count Up
                        </a>
                      </li>
                      <li>
                        <a href="components-scrollable-elements.html">
                          <i className="metismenu-icon"></i>Scrollable
                        </a>
                      </li>
                      <li>
                        <a href="components-tree-view.html">
                          <i className="metismenu-icon"></i>Tree View
                        </a>
                      </li>
                      <li>
                        <a href="components-maps.html">
                          <i className="metismenu-icon"></i>Maps
                        </a>
                      </li>
                      <li>
                        <a href="components-ratings.html">
                          <i className="metismenu-icon"></i>Ratings
                        </a>
                      </li>
                      <li>
                        <a href="components-image-crop.html">
                          <i className="metismenu-icon"></i>Image Crop
                        </a>
                      </li>
                      <li>
                        <a href="components-guided-tours.html">
                          <i className="metismenu-icon"></i>Guided Tours
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-display2"></i> Tables
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="tables-data-tables.html">
                          <i className="metismenu-icon"> </i>Data Tables
                        </a>
                      </li>
                      <li>
                        <a href="tables-regular.html">
                          <i className="metismenu-icon"></i>Regular Tables
                        </a>
                      </li>
                      <li>
                        <a href="tables-grid.html">
                          <i className="metismenu-icon"></i>Grid Tables
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="app-sidebar__heading">Dashboard Widgets</li>
                  <li>
                    <a href="widgets-chart-boxes.html">
                      <i className="metismenu-icon pe-7s-graph"></i>Chart Boxes 1
                    </a>
                  </li>
                  <li>
                    <a href="widgets-chart-boxes-2.html">
                      <i className="metismenu-icon pe-7s-way"></i>Chart Boxes 2
                    </a>
                  </li>
                  <li>
                    <a href="widgets-chart-boxes-3.html">
                      <i className="metismenu-icon pe-7s-ball"></i>Chart Boxes 3
                    </a>
                  </li>
                  <li>
                    <a href="widgets-profile-boxes.html">
                      <i className="metismenu-icon pe-7s-id"></i>Profile Boxes
                    </a>
                  </li>
                  <li className="app-sidebar__heading">Forms</li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-light"></i> Elements
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="forms-controls.html">
                          <i className="metismenu-icon"></i>Controls
                        </a>
                      </li>
                      <li>
                        <a href="forms-layouts.html">
                          <i className="metismenu-icon"></i>Layouts
                        </a>
                      </li>
                      <li>
                        <a href="forms-validation.html">
                          <i className="metismenu-icon"></i>Validation
                        </a>
                      </li>
                      <li>
                        <a href="forms-wizard.html">
                          <i className="metismenu-icon"></i>Wizard
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-joy"></i> Widgets
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="forms-datepicker.html">
                          <i className="metismenu-icon"></i>Datepicker
                        </a>
                      </li>
                      <li>
                        <a href="forms-range-slider.html">
                          <i className="metismenu-icon"></i>Range Slider
                        </a>
                      </li>
                      <li>
                        <a href="forms-input-selects.html">
                          <i className="metismenu-icon"></i>Input Selects
                        </a>
                      </li>
                      <li>
                        <a href="forms-toggle-switch.html">
                          <i className="metismenu-icon"></i>Toggle Switch
                        </a>
                      </li>
                      <li>
                        <a href="forms-wysiwyg-editor.html">
                          <i className="metismenu-icon"></i>WYSIWYG Editor
                        </a>
                      </li>
                      <li>
                        <a href="forms-input-mask.html">
                          <i className="metismenu-icon"></i>Input Mask
                        </a>
                      </li>
                      <li>
                        <a href="forms-clipboard.html">
                          <i className="metismenu-icon"></i>Clipboard
                        </a>
                      </li>
                      <li>
                        <a href="forms-textarea-autosize.html">
                          <i className="metismenu-icon"></i>Textarea Autosize
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="app-sidebar__heading">Charts</li>
                  <li>
                    <a href="charts-chartjs.html">
                      <i className="metismenu-icon pe-7s-graph2"></i>ChartJS
                    </a>
                  </li>
                  <li>
                    <a href="charts-apexcharts.html">
                      <i className="metismenu-icon pe-7s-graph"></i>Apex Charts
                    </a>
                  </li>
                  <li>
                    <a href="charts-sparklines.html">
                      <i className="metismenu-icon pe-7s-graph1"></i>Chart
                      Sparklines
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

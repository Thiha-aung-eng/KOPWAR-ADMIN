import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">

                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Dashboard
                    </Link>

                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                        Users
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                    </Link>

                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="layout-static.html">Registeration</Link>
                            <Link className="nav-link" to="layout-sidenav-light.html">Academy</Link>
                            <Link className="nav-link" to="layout-static.html">Speedx</Link>
                            <Link className="nav-link" to="layout-sidenav-light.html">Life</Link>
                        </nav>
                    </div>

                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                        <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                        Business Unit
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                    </Link>

                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">

                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                Mart
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>

                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Academy
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>

                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Speedx
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>

                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Life
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>

                        </nav>
                    </div>

                    <Link className="nav-link" to="charts.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                        Subscription
                    </Link>

                    <Link className="nav-link" to="tables.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                        Reporting
                    </Link>

                </div>
            </div>

        </nav>

    )
}

export default Sidebar
function NavBar() {
    return (
        <div className="nav_bar">
            <nav class="nav">
                <div className="logoSection">
                    <h4 class="nav_logo">logo</h4>
                    <h2 className="click">Click me!</h2>
                </div>
                <div class="nav_items">
                    <p class="nav_item">Home</p>
                    <p class="nav_item">About</p>
                    <p class="nav_item">Contact</p>
                    <p class="nav_item">Login</p>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
function NavBar() {
    return (
        <div className="nav_bar">
            <nav class="nav">
                <h4 class="nav_logo">logo</h4>
                <div class="nav_items">
                    <p class="nav_item">Home</p>
                    <p class="nav_item">About</p>
                    <p class="nav_item">Contact</p>
                    <input type="text" style={{
                        height:"20px",
                        width:"40%",
                        marginTop:"30px",
                        borderRadius:"20px"

                    }} placeholder="Search here...." />
                  
                    

                </div>
            </nav>
        </div>
    )
}
export default NavBar;
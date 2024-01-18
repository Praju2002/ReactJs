function Footer() {
    return (
        <footer class="footer">
            <h3 class="footer_heading">Footer</h3>
            {/* <!-- footeritems --> */}
            <div class="footer_main">
                <div class="footer_items">
                    <p class="footer_item">About</p>
                    <p class="footer_item">Contact us</p>
                    <p class="footer_item">Blogs</p>
                    <p class="footer_item">Phone number 9987</p>
                </div>
                <div class="footer_items">
                    <p class="footer_item">
                        <i class="fa-brands fa-facebook"></i>&nbsp;Facebook
                    </p>
                    <p class="footer_item">
                        <i class="fa-brands fa-instagram"></i>&nbsp;Insta
                    </p>
                    <p class="footer_item">
                        <i class="fa-brands fa-youtube"></i>&nbsp;Youtube
                    </p>
                </div>
                <div class="footer_items">
                    <p class="footer_item">Copyright @2002</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
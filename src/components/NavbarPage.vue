<template>
  <div>
    <header>
			<!-- TOP HEADER -->
			<div id="top-header" style="background-color:white;" :class="{ 'hidden': scrolled }">
				<div class="container">
					<ul class="header-links pull-left">
						<li><a href="#" style="color:black"><i class="fa fa-phone"></i> +254-712-345-678</a></li>
						<li><a href="#" style="color:black"><i class="fa fa-envelope-o"></i> sc@strathmore.edu</a></li>
						<li><a href="#" style="color:black"><i class="fa fa-map-marker"></i> Strathmore University, keri Road</a></li>
					</ul>
          <ul class="header-links pull-right">
    <li><a href="#" style="color:black"><v-icon>mdi-cash</v-icon> Ksh</a></li>
    <li><a href="#" style="color:black"><v-icon>mdi-account-outline</v-icon> My Account</a></li>
    <!-- Social media links -->
    <li><a href="#" style="color:black;"><v-icon style="color:navy">mdi-facebook</v-icon></a></li>
    <li><a href="#" style="color:black"><v-icon color="blue">mdi-twitter</v-icon></a></li>
    <li><a href="#" style="color:black"><v-icon color="pink">mdi-instagram</v-icon></a></li>
    <!-- Add more social media links/icons as needed -->
  </ul>
				</div>
			</div>
			<!-- /TOP HEADER -->

			<!-- MAIN HEADER -->
			<div id="header" style="background-color:navy;" :class="{ 'fixed': scrolled }">
				<!-- container -->
				<div class="container">
					<!-- row -->
					<div class="row">
						<!-- LOGO -->
						<div class="col-md-3">
							<div class="header-logo">
								<a href="#" class="logo">
									<img src="/logo.png" style="height:70px" alt="">
								</a>
							</div>
						</div>
						
						<div>
							<div class="header-ctn">
								<!-- Wishlist -->
								<div>
									<a href="#">
										<i class="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div class="qty">2</div>
									</a>
								</div>

								

								


								
								
								<!-- /Wishlist -->

								<!-- Cart -->
								<div class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  @click="dialog = !dialog">
										<i class="fa fa-shopping-cart"></i>
										<span>Your Cart</span>
										<div class="qty">3</div>
									</a>
									<div class="cart-dropdown">
										<div class="cart-list">
											<div class="product-widget">
												<div class="product-img">
													<img src="/product01.png" alt="">
												</div>
												<div class="product-body">
													<h3 class="product-name"><a href="#">product name goes here</a></h3>
													<h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
												</div>
												<button class="delete"><i class="fa fa-close"></i></button>
											</div>

											<div class="product-widget">
												<div class="product-img">
													<img src="/product02.png" alt="">
												</div>
												<div class="product-body">
													<h3 class="product-name"><a href="#">product name goes here</a></h3>
													<h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
												</div>
												<button class="delete"><i class="fa fa-close"></i></button>
											</div>
										</div>
										<div class="cart-summary">
											<small>3 Item(s) selected</small>
											<h5>SUBTOTAL: $2940.00</h5>
										</div>
										<div class="cart-btns">
											<a href="#" style="background-color:red;">View Cart <v-icon>mdi-eye</v-icon></a>
											<a href="#" style="background-color: navy;">Checkout  <i class="fa fa-arrow-circle-right"></i></a>
										</div>
									</div>
								</div>
								

								<div >
                  <a href="/login">
                    <i class="fa fa-user"></i>
                    <span>Login</span>
                  </a>
                </div>
                <!-- /Login -->

                <!-- Register -->
                <div >
                  <a href="/register">
                    <i class="fa fa-user-plus"></i>
                    <span>Register</span>
                  </a>
                </div>
                <!-- /Register -->

                <!-- Sell -->
                <div>
                  <a href="#">
                    <i class="fa fa-tag"></i>
                    <span>Sell</span>
                  </a>
                </div>
								
									
								
								<!-- /Cart -->

								<!-- Menu Toogle -->
								<div class="menu-toggle">
									<a href="#">
										<i class="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>

								

								
								<!-- /Menu Toogle -->
							</div>
						</div>
						<!-- /ACCOUNT -->
					</div>
					<!-- row -->
				</div>
				<!-- container -->
			</div>
			<!-- /MAIN HEADER -->
		</header>


    <nav id="navigation">
			<!-- container -->
			<div class="container">
				<!-- responsive-nav -->
				<div id="responsive-nav">
					<!-- NAV -->
					<ul class="main-nav nav navbar-nav">
						<li class="active"><a href="/">Home</a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Laptops</a></li>
						<li><a href="#">Smartphones</a></li>
						<li><a href="#">Cameras</a></li>
						<li><a href="#">Accessories</a></li>
					</ul>
					<!-- /NAV -->
				</div>
				<!-- /responsive-nav -->
			</div>
			<!-- /container -->
		</nav>
  </div>
</template>



<script>
export default {
  data() {
    return {
      scrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  }
};
</script>

<style>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
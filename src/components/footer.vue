<template>
	<footer id="footer" style="background-color:navy;" >
	  <!-- top footer -->
	  <v-container>
		<!-- row -->
		<v-row>
		  <v-col md="3" xs="6">
			<div class="footer">
			  <h3 class="footer-title">About Us</h3>
			  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
			  <ul class="footer-links">
				<li><a href="#"><i class="fa fa-map-marker"></i>Strathmore University, keri Road</a></li>
				<li><a href="#"><i class="fa fa-phone"></i>+254-712-345-678	</a></li>
				<li><a href="#"><i class="fa fa-envelope-o"></i>sc@strathmore.edu</a></li>
			  </ul>
			</div>
		  </v-col>
  
		  <v-col md="3" xs="6">
			<div class="footer">
			  <h3 class="footer-title">Categories</h3>
			  <ul class="footer-links">
				<li><a href="#">Hot deals</a></li>
				<li><a href="#">Laptops</a></li>
				<li><a href="#">Smartphones</a></li>
				<li><a href="#">Cameras</a></li>
				<li><a href="#">Accessories</a></li>
			  </ul>
			</div>
		  </v-col>
  
		  <v-col md="3" xs="6">
			<div class="footer">
			  <h3 class="footer-title">Information</h3>
			  <ul class="footer-links">
				<li><a href="#">About Us</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Orders and Returns</a></li>
				<li><a href="#">Terms & Conditions</a></li>
			  </ul>
			</div>
		  </v-col>
  
		  <v-col md="3" xs="6">
			<div class="footer">
			  <h3 class="footer-title">Service</h3>
			  <ul class="footer-links">
				<li><a href="#">My Account</a></li>
				<li><a href="#">View Cart</a></li>
				<li><a href="#">Wishlist</a></li>
				<li><a href="#">Track My Order</a></li>
				<li><a href="#">Help</a></li>
			  </ul>
			</div>
		  </v-col>
		</v-row>
	  </v-container>
  
	  <!-- bottom footer -->
	  <v-container>
      <v-row>
        <v-col md="12" class="text-center">
          <ul class="footer-payments">
            <!-- Vuetify icon -->
           
            <!-- Image icon -->
            <v-img src="/mpesa.png" height="80"></v-img>
          </ul>
        </v-col>
      </v-row>
    </v-container>
	  <!-- /bottom footer -->
	</footer>
  </template>
  
  <script>
  // You can add script logic here if needed
  export default {
	name: 'Footer', // Component name
  }
  </script>
  
  <style scoped>
  /* You can add component-specific styles here */
  </style>
  
<template>
        <Navbar @change-language="changeLanguage"></Navbar>

  <div>
    <div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<v-row>
      <!-- Laptop Collection -->
      <v-col md="4" xs="6">
        <v-card class="shop" elevation="0" style="border-radius:10px;" @mouseenter="scaleImage(1.1)" @mouseleave="scaleImage(1)">
          <transition name="fade">
          <v-img src="/shop01.png" alt="Laptop Collection" height="300"></v-img>
          </transition>
          <v-card-text class="shop-body">
            <h3>Laptop<br>Collection</h3>
            <a href="#" class="cta-btn">Shop now <v-icon>mdi-arrow-circle-right</v-icon></a>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Accessories Collection -->
      <v-col md="4" xs="6">
        <v-card class="shop" elevation="0" style="border-radius: 10px;" @mouseenter="scaleImage(1.1)" @mouseleave="scaleImage(1)">
          <v-img src="/shop03.png" alt="Accessories Collection" height="300"></v-img>
          <v-card-text class="shop-body">
            <h3>Accessories<br>Collection</h3>
            <a href="#" class="cta-btn">Shop now <v-icon>mdi-arrow-circle-right</v-icon></a>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Cameras Collection -->
      <v-col md="4" xs="6">
        <v-card class="shop" elevation="0" style="border-radius: 10px;" @mouseenter="scaleImage(1.1)" @mouseleave="scaleImage(1)">
          <v-img src="/shop02.png" alt="Cameras Collection" height="300"></v-img>
          <v-card-text class="shop-body">
            <h3>Cameras<br>Collection</h3>
            <a href="#" class="cta-btn">Shop now <v-icon>mdi-arrow-circle-right</v-icon></a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>


    <v-container>
    <v-row>
      <v-col cols="12">
        <div class="section-title">
          <h3 class="title">NEW PRODUCTS</h3>
          <div class="section-nav">
            <v-row class="tab-nav">
              <v-col v-for="(tab, index) in tabs" :key="index" :class="{ 'active': activeTab === tab }" cols="auto">
                <a @click="changeTab(tab)">{{ tab }}</a>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-slide-group cycle>
      <v-slide-item v-for="(product, index) in products" :key="index">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="product mr-4" style="border-radius: 10px;" width="340px">
              <v-img :src="product.image" :alt="product.name"></v-img>
              <div class="product-label"></div>
              <v-card-text>
                <p class="product-category">{{ product.category }}</p>
                <h3 class="product-name"><a href="#">{{ product.name }}</a></h3>
                <h4 class="product-price" style="color:red">{{ product.price }} <del class="product-old-price" style="color:gray">{{ product.oldPrice }}</del></h4>
                <div class="product-rating">
                  <i v-for="star in 5" :key="star" class="fa fa-star" :class="{ 'fa-star-o': star > product.rating }"></i>
                </div>
              </v-card-text>
              <hr>
              <v-card-actions>
                <v-btn class="add-to-wishlist" icon><v-icon >mdi-heart-outline</v-icon></v-btn>
                <v-btn class="add-to-compare" icon><v-icon >mdi-shuffle-variant</v-icon></v-btn>
                <v-btn class="quick-view" icon><v-icon >mdi-eye-outline</v-icon></v-btn>
                <v-btn class="add-to-cart-btn" icon><v-icon >mdi-cart-outline</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-slide-item>
    </v-slide-group>
  </v-container>
 
  </div>

  <Footer></Footer>
  
</template>
<!-- 
<script>
export default {
  data() {
    return {
      activeTab: 'Laptops',
      products: [
        {
          name: 'product name goes here',
          category: 'Category',
          image: './img/product01.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 30,
          rating: 5
        },
        {
          name: 'product name goes here',
          category: 'Category',
          image: './img/product02.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 0,
          rating: 4
        },
        {
          name: 'product name goes here',
          category: 'Category',
          image: './img/product03.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 30,
          rating: 0
        },
        {
          name: 'product name goes here',
          category: 'Category',
          image: './img/product04.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 0,
          rating: 5
        },
        {
          name: 'product name goes here',
          category: 'Category',
          image: './img/product05.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 0,
          rating: 5
        }
      ]
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script> -->


<script>

import Navbar from '@/components/NavbarPage.vue';
import Footer from '@/components/footer.vue';


export default {

  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      activeTab: 'Laptops',
      tabs: ['Laptops', 'Smartphones', 'Cameras', 'Accessories'],
      products: [
        {
          name: 'Laptop',
          category: 'Electronics',
          image: '/product01.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 30,
          rating: 5
        },
        {
          name: 'Headphones',
          category: 'Electronics',
          image: '/product02.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 0,
          rating: 4
        },
        {
          name: 'Laptop',
          category: 'Electronics',
          image: '/product03.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 30,
          rating: 0
        },
        {
          name: 'Ipad',
          category: 'Electronics',
          image: '/product04.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 0,
          rating: 5
        },
        {
          name: 'Ipad',
          category: 'Electronics',
          image: '/product04.png',
          price: '$980.00',
          oldPrice: '$990.00',
          discount: 0,
          rating: 5
        },
       
      ]
    };
  },
  methods: {
    scaleImage(event, scale) {
      event.target.style.transform = `scale(${scale})`;
    }
  }
};
</script>


<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


.shop img {
  transition: opacity 0.5s;
}
.shop img:hover {
  opacity: 0.7;
}



</style>


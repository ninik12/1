import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products=[
    {id:1, name:'Teddy',price:75, description: 'This soft and cuddly teddy bear is the perfect companion for comfort and playtime. Made with high-quality, plush fabric, it is gentle to the touch and perfect for hugging. Its friendly face, with stitched eyes and a warm smile, will quickly become a favorite among children and adults alike. Whether for bedtime snuggles or imaginative adventures, this adorable teddy bear is sure to bring joy and a sense of warmth to any room. A timeless gift that is ideal for all ages!', image:'https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw='},
    {id:2, name:'Doll toy set',price:95, description: 'This charming doll with a milk bottle is the perfect addition to any little ones collection. Featuring a sweet, soft face and a lifelike design, the doll comes with its very own milk bottle, ready for pretend feeding and nurturing play. Crafted from soft, durable materials, this doll is gentle enough for cuddling but sturdy enough for endless hours of imaginative fun. Whether it is feeding time or nap time, this doll is ready for all the care and love your child can give. A wonderful toy for teaching nurturing skills and sparking creativity!', image:'https://images-cdn.ubuy.co.in/6533589a75dc304def13bb5c-my-sweet-love-sweet-baby-doll-toy-set-4.jpg'},
    {id:3, name:'Barbie',price:85, description: 'This iconic Barbie doll is a timeless figure of style, imagination, and adventure. With her stunningly detailed outfit and flawless features, she embodies confidence, elegance, and endless possibilities. Barbie inspires creativity and storytelling. Perfect for collectors and young dreamers alike, Barbie encourages everyone to imagine a world where anything is possible. With a wide range of accessories and outfits to choose from, she can take on any role and inspire endless adventures!', image:'https://i5.walmartimages.com/seo/Barbie-The-Movie-Collectible-Doll-Margot-Robbie-as-Barbie-in-Pink-Gingham-Dress-Toy-for-3-Years-and-Up_43517acc-792c-4db0-8e03-54e40d42802e.a3ac52b916f2f81089fc345e6218a73d.jpeg'},
    {id:4, name:'Barbie family',price:135, description: 'The Barbie Family brings together a world of love, adventure, and togetherness! This diverse collection includes Barbie, her siblings, friends, and even her beloved pets, each with unique personalities and styles. The Barbie Family offers endless storytelling possibilities. Each family member is beautifully crafted with attention to detail, from their fashionable outfits to their fun accessories. Perfect for sparking imagination and creating a world where every family member has a special role!', image:'https://target.scene7.com/is/image/Target/GUEST_0d11f2a6-bf1b-4a88-838f-877d3a7d26e3'},
    {id:5, name:'Puppy toy set',price:95, description: 'This adorable puppy is ready for endless play and cuddles! With soft fur, bright eyes, and a playful personality, it is the perfect companion for kids and animal lovers. Whether it is nap time or playtime, this sweet puppy brings joy and comfort wherever it goes!', image:'https://m.media-amazon.com/images/I/71SSw8RWGDL.jpg'},
    {id:6, name:'Kitchen toy set',price:195, description: 'This fun kitchen toy set has everything little chefs need to cook up their imagination! With pots, pans, utensils, and colorful food pieces, it is perfect for pretend play and sparking creativity in the kitchen. Let the cooking adventures begin!', image:'https://mentari.toys/cdn/shop/products/kids-kitchen-mt7521-753513.jpg?v=1702456094'},
    {id:7, name:'Vegetable and fruit toy set',price:65, description: 'This vibrant vegetable and fruit toy set is perfect for little hands to explore healthy eating! With colorful, realistic pieces, it encourages imaginative play and helps teach kids about different fruits and veggies in a fun, interactive way.', image:'https://ae01.alicdn.com/kf/S350dd43864c14fc19271cc12abc3f87ek.jpg'},
    {id:8, name:'Solid Grey kitchen toy set ',price:95, description: 'This fun kitchen toy set has everything little chefs need to cook up their imagination! With pots, pans, utensils, and colorful food pieces, it is perfect for pretend play and sparking creativity in the kitchen. Let the cooking adventures begin!', image:'https://img-us.aosomcdn.com/thumbnail/100/n0/product/2022/08/15/6cV98a182a2f0f945.jpg'},
    {id:9, name:'Soccer ball ',price:55, description: 'This durable soccer ball is designed for endless fun on the field! With a sleek, vibrant design, it is perfect for practice, play, and scoring goals. Whether you are a beginner or a pro, this ball is ready for action!', image:'https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg'},
    {id:10, name:'Colloring balls ',price:95, description: 'These colorful balls are perfect for fun, active play! With bright, vibrant hues, they are easy to catch, bounce, and roll, making them a great choice for kids to improve coordination and enjoy hours of entertainment', image:'https://rukminim3.flixcart.com/image/850/1000/kzn17680/ball/v/n/x/100-crazy-bounce-ball-china-ball-for-kids-non-toxic-balls-for-original-imagbhrvuwytgmzs.jpeg?q=90&crop=false'},
    {id:11, name:'Doll toy',price:95, description: 'This charming doll is ready for endless imaginative play! With a cute design and soft, detailed features, it is perfect for nurturing, storytelling, and creating special moments. A sweet companion for kids of all ages!', image:'https://www.adora.com/cdn/shop/products/13-inch-playtime-baby-doll-for-toddlers-pink-baby-20203004-1.jpg?v=1667945475'},
    {id:12, name:'Baby Doll stroller',price:115, description: 'This adorable baby doll stroller is perfect for little ones who love to care for their dolls! With easy-to-push wheels, a comfy seat, and a stylish design, it is ideal for taking dolls on fun outings and nurturing play.', image:'https://i.pinimg.com/474x/cb/f2/41/cbf241e81236cf9a43a36d9c11affdf1.jpg'},
    
  ]


  cart:any[]=[];


  filterProductByName(name:string){
    return this.products.filter(product=>product.name.toLowerCase().includes(name.toLowerCase()));
  }


  addToCart(product: any) {
    const existingProductIndex = this.cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });  
    }
  }


  removeFromCart(productId:number){
    this.cart = this.cart.filter(item => item.id !== productId)

  }

  getQuantity(productId: number) :number {
    const product =this.cart.find(item => item.id === productId);
    return product ? product.quantity : 0;

  }


  clearCart(){
    this.cart = []
  }


  getTotalPrice(): number{
    return this.cart.reduce((total, item) =>total + (item.price * item.quantity), 0);

  }

  increaseQuantity(productId: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity++;
    }
  }

  decreaseQuantity(productId: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity--;
    } else {
      this.removeFromCart(productId);
    }
  }
  



}

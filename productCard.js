
  class ProductCard {
    constructor(title, subtitle, image) {
      this.title = title;
      this.subtitle = subtitle;

      this.image = image;
    }

    render() {
      return `
        <div class="card shadow-0 border rounded-3">
          <div class="card-body row">
            
            <div class="col-md-6">
              <div class="bg-image hover-zoom ripple rounded ripple-surface">
                <img src="${this.image}" class="img-fluid" />
                <a href="#!">
                  <div class="hover-overlay">
                    <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                  </div>
                </a>
              </div>
            </div>
    
            <div class="col-md-6">
              <h5>${this.title}</h5>
              <div class="d-flex flex-row">
                <div class="text-danger mb-1 me-2">
                 
                </div>
              </div>
              <p class="text mb-4 mb-md-0">${this.subtitle}</p>
            </div>  
            
          </div>
        </div>`;
    }
    
  }

const productCard1 = new ProductCard("General Contractor", " As a general contractor, the company oversees all aspects of a home renovation project, coordinating with subcontractors and ensuring the project is completed to the client's satisfaction.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarketingplatform.vivial.net%2Fsites%2Fdefault%2Ffiles%2Finline_images%2Fgeneral-contractor_7.jpg&f=1&nofb=1&ipt=2689ddef2ff89b5fa74afcd260fb66984188cc7608f8bd770fc2d44b6733571e&ipo=images");
document.getElementById("productCard1").innerHTML = productCard1.render();

const productCard2 = new ProductCard("Drywall", "This service includes installing drywall panels to create walls and ceilings in commercial spaces, providing a smooth, paint-ready surface"
, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmodernize.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fdrywall-install.jpg&f=1&nofb=1&ipt=d3b029b42b27b161751de9a06c466b12b11ff4a5dc041de7d98ba658b4785614&ipo=images");
document.getElementById("productCard2").innerHTML = productCard2.render();

const productCard3 = new ProductCard("Door and hardware", " Involves fitting and installing various types of doors and related hardware in commercial buildings, ensuring security and accessibility.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspecialtydoors.com%2Fwp-content%2Fuploads%2F2017%2F02%2FRH223-Low-Profile-Strap-Mount..jpg&f=1&nofb=1&ipt=65b960e1409a27bf7fd0d604e3ebd67ec7546d8eff5500e037fcd4f90907459a&ipo=images");
document.getElementById("productCard3").innerHTML = productCard3.render();

const productCard4 = new ProductCard("Framing metal", "This involves constructing the skeletal framework for commercial buildings using metal studs.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplasterercentralcoast.com.au%2Fwp-content%2Fuploads%2F2020%2F05%2FMetal-partition-framing-scaled.jpeg&f=1&nofb=1&ipt=c62935707073c6266178507a6f1ec6dc1c2252b6fd479fd3a3fba8d5a9959108&ipo=images");
document.getElementById("productCard4").innerHTML = productCard4.render();

const productCard5 = new ProductCard("Acoustical ceilings", "This service focuses on installing ceilings designed to enhance sound quality and reduce noise levels in commercial settings, such as offices or retail spaces.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frhs-construction.com%2Fwp-content%2Fuploads%2F2019%2F10%2FCeilings-1536x1152.jpg&f=1&nofb=1&ipt=9f5b2be5b13303e9b7d8ee1c8d0c90cc1561f5d8b89b5228c0d2b3cd62ecb2c5&ipo=images");
document.getElementById("productCard5").innerHTML = productCard5.render();

const productCard6 = new ProductCard("Painting", "Professional interior and exterior painting services to refresh and enhance the aesthetic of a home.",  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmiaspainting.com%2Fassets%2Fimages%2FPAINT_HOUSE03.jpg&f=1&nofb=1&ipt=0358d6b87d45b50c643037d77926fa6cc400c0814285dd48e31ff877aa18773e&ipo=images");
document.getElementById("productCard6").innerHTML = productCard6.render();

const productCard7 = new ProductCard("Kitchen and bath", "Specializing in the renovation and remodeling of kitchens and bathrooms, this service covers everything from layout design to the installation of cabinets, countertops, and fixtures.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frobarecustomhomes.com%2Fwp-content%2Fuploads%2F2017%2F11%2FViaPalermo-08.jpg&f=1&nofb=1&ipt=930f698154337cbfb5105da7b5b7f2e7a9add4413e15f5fb5df40b8f29dbcb0c&ipo=images");
document.getElementById("productCard7").innerHTML = productCard7.render();

const productCard8 = new ProductCard("Flooring", "Offering a variety of flooring options including hardwood, laminate, tile, and carpet installation, tailored to the homeowner's preferences and needs.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjeremykrill.com%2Fwp-content%2Fuploads%2F2014%2F02%2FIMG_2662.jpg&f=1&nofb=1&ipt=b9966be4afc50b2fd1bccd04145e95dfd9bc64d6c7063d6ce3f631b6af5be78c&ipo=images");
document.getElementById("productCard8").innerHTML = productCard8.render();

const productCard9 = new ProductCard("Carpentry", " This covers a range of woodworking tasks from building custom cabinets to installing moldings and trim in residential properties.",  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thecollege.co.uk%2Fsites%2Fdefault%2Ffiles%2Fcourse%2FWoodwork%2520Image%25205.jpg&f=1&nofb=1&ipt=f772efd5b0941db7c47c11243b0311d9b07ae05258d9bb0b23e4d7f10c16e2b7&ipo=images");
document.getElementById("productCard9").innerHTML = productCard9.render();


  

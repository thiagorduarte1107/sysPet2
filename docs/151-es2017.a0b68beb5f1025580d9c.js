"use strict";(self.webpackChunkpawtastic_angular=self.webpackChunkpawtastic_angular||[]).push([[151],{9151:function(e,t,r){r.r(t),r.d(t,{ProductsModule:function(){return v}});var o=r(8583),n=r(8045),i=r(665),a=r(639),c=r(2510),s=r(5338);let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-product-card"]],inputs:{product:"product"},decls:26,vars:8,consts:[[1,"product-card"],[1,"product-image"],[1,"product-img",3,"src","alt"],[1,"product-category"],[1,"product-content"],[1,"product-rating"],[1,"rating-stars"],[1,"icon-star"],[1,"rating-value"],[1,"rating-divider"],[1,"review-count"],[1,"product-title"],[1,"product-description"],[1,"product-footer"],[1,"product-price"],[1,"btn","btn-primary","btn-sm"],[1,"icon-shopping-cart"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._UZ(2,"img",2),a.TgZ(3,"div",3),a.TgZ(4,"span"),a._uU(5),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"div",4),a.TgZ(7,"div",5),a.TgZ(8,"div",6),a._UZ(9,"i",7),a.TgZ(10,"span",8),a._uU(11),a.qZA(),a.qZA(),a.TgZ(12,"span",9),a._uU(13,"\xb7"),a.qZA(),a.TgZ(14,"span",10),a._uU(15),a.qZA(),a.qZA(),a.TgZ(16,"h3",11),a._uU(17),a.qZA(),a.TgZ(18,"p",12),a._uU(19),a.qZA(),a.TgZ(20,"div",13),a.TgZ(21,"span",14),a._uU(22),a.qZA(),a.TgZ(23,"button",15),a._UZ(24,"i",16),a._uU(25," Adicionar "),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(2),a.Q6J("src",t.product.image,a.LSH)("alt",t.product.name),a.xp6(3),a.Oqu(t.product.category),a.xp6(6),a.Oqu(t.product.rating),a.xp6(4),a.hij("",t.product.reviews," avalia\xe7\xf5es"),a.xp6(2),a.Oqu(t.product.name),a.xp6(2),a.Oqu(t.product.description),a.xp6(3),a.hij("R$ ",t.product.price.toFixed(2).replace(".",","),""))},styles:[".product-card[_ngcontent-%COMP%]{background-color:var(--background);border-radius:var(--radius);overflow:hidden;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;transition:transform .2s ease,box-shadow .3s ease}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.product-image[_ngcontent-%COMP%]{position:relative}.product-img[_ngcontent-%COMP%]{width:100%;height:200px;-o-object-fit:cover;object-fit:cover;transition:transform .5s ease}.product-card[_ngcontent-%COMP%]:hover   .product-img[_ngcontent-%COMP%]{transform:scale(1.05)}.product-category[_ngcontent-%COMP%]{position:absolute;top:0;left:0;margin:.75rem}.product-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .5rem;font-size:.75rem;font-weight:500;border-radius:9999px;background-color:rgba(var(--primary-rgb),.1);color:var(--primary)}.product-content[_ngcontent-%COMP%]{padding:1rem}.product-rating[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:.5rem;font-size:.875rem}.rating-stars[_ngcontent-%COMP%]{display:flex;align-items:center;color:#ffb800}.rating-value[_ngcontent-%COMP%]{margin-left:.25rem;font-weight:600}.rating-divider[_ngcontent-%COMP%]{margin:0 .5rem;color:var(--muted)}.review-count[_ngcontent-%COMP%]{color:var(--muted)}.product-title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;margin-bottom:.5rem;color:var(--text)}.product-description[_ngcontent-%COMP%]{font-size:.875rem;color:var(--muted);margin-bottom:1rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.product-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:auto}.product-price[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;color:var(--primary)}.btn-sm[_ngcontent-%COMP%]{padding:.5rem .75rem;font-size:.875rem}.btn-primary[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:.5rem;gap:.5rem;background-color:var(--primary);color:#fff;border:none;border-radius:var(--radius);font-weight:500;cursor:pointer;transition:background-color .2s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:var(--primary-dark)}"]}),e})();function p(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",13),a.TgZ(1,"p",14),a._uU(2," Exibindo "),a.TgZ(3,"span",15),a._uU(4),a.qZA(),a._uU(5," produtos "),a.qZA(),a.TgZ(6,"select",16),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.oxw().sortOption=t})("change",function(){return a.CHM(e),a.oxw().onSortChange()}),a.TgZ(7,"option",17),a._uU(8,"Ordenar por: Relev\xe2ncia"),a.qZA(),a.TgZ(9,"option",18),a._uU(10,"Pre\xe7o: Menor para Maior"),a.qZA(),a.TgZ(11,"option",19),a._uU(12,"Pre\xe7o: Maior para Menor"),a.qZA(),a.TgZ(13,"option",20),a._uU(14,"Avalia\xe7\xe3o"),a.qZA(),a.TgZ(15,"option",21),a._uU(16,"Mais Populares"),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.xp6(4),a.Oqu(e.filteredProducts.length),a.xp6(2),a.Q6J("ngModel",e.sortOption)}}function u(e,t){1&e&&(a.TgZ(0,"div",22),a.TgZ(1,"h3",23),a._uU(2,"Nenhum produto encontrado"),a.qZA(),a.TgZ(3,"p",24),a._uU(4," Tente ajustar seus filtros ou termos de busca. "),a.qZA(),a.qZA())}function g(e,t){1&e&&a._UZ(0,"app-product-card",27),2&e&&a.Q6J("product",t.$implicit)}function l(e,t){if(1&e&&(a.TgZ(0,"div",25),a.YNc(1,g,1,1,"app-product-card",26),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("ngForOf",e.filteredProducts)}}const m=function(){return["Todos","Alimentos","Brinquedos","Acess\xf3rios","Higiene","Roupas","Camas","Medicamentos"]};let f=(()=>{class e{constructor(){this.searchQuery="",this.activeCategory="Todos",this.sortOption="relevance",this.products=[{id:1,name:"Ra\xe7\xe3o Premium para C\xe3es",price:89.9,rating:4.8,reviews:124,image:"https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",category:"Alimentos",description:"Ra\xe7\xe3o premium para c\xe3es adultos de todas as ra\xe7as. Rica em nutrientes essenciais."},{id:2,name:"Brinquedo Interativo para Gatos",price:49.9,rating:4.6,reviews:87,image:"https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",category:"Brinquedos",description:"Brinquedo interativo que estimula o instinto de ca\xe7a dos felinos."},{id:3,name:"Coleira Ajust\xe1vel com GPS",price:129.9,rating:4.9,reviews:56,image:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",category:"Acess\xf3rios",description:"Coleira ajust\xe1vel com GPS integrado para monitorar a localiza\xe7\xe3o do seu pet."},{id:4,name:"Shampoo Hipoalerg\xeanico",price:39.9,rating:4.7,reviews:92,image:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",category:"Higiene",description:"Shampoo hipoalerg\xeanico para pets com pele sens\xedvel. F\xf3rmula suave e sem parabenos."},{id:5,name:"Casaco de Inverno para C\xe3es",price:79.9,rating:4.5,reviews:45,image:"https://images.unsplash.com/photo-1583337426008-2fef51aa872e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",category:"Roupas",description:"Casaco t\xe9rmico para c\xe3es, ideal para dias frios. Material imperme\xe1vel e confort\xe1vel."},{id:6,name:"Cama Ortop\xe9dica para Pets",price:159.9,rating:4.8,reviews:78,image:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",category:"Camas",description:"Cama ortop\xe9dica que proporciona suporte adequado para pets de todas as idades."},{id:7,name:"Suplemento Vitam\xednico",price:69.9,rating:4.6,reviews:63,image:"https://images.unsplash.com/photo-1606585302006-b880b4f3b5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",category:"Medicamentos",description:"Suplemento vitam\xednico para fortalecer o sistema imunol\xf3gico do seu pet."},{id:8,name:"Escova Removedora de Pelos",price:45.9,rating:4.4,reviews:52,image:"https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",category:"Acess\xf3rios",description:"Escova eficiente para remover pelos soltos e reduzir a queda de pelos em casa."}],this.selectedPriceRange=300,this.selectedRatings=[]}get filteredProducts(){return this.products.filter(e=>{const t=""===this.searchQuery||e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.description.toLowerCase().includes(this.searchQuery.toLowerCase()),r="Todos"===this.activeCategory||e.category===this.activeCategory,o=e.price<=this.selectedPriceRange,n=0===this.selectedRatings.length||this.selectedRatings.some(t=>e.rating>=t);return t&&r&&o&&n})}ngOnInit(){}onSearch(e){this.searchQuery=e.target.value}onCategoryChange(e){this.activeCategory=e}onPriceRangeChange(e){this.selectedPriceRange=e}onRatingFilterChange(e){this.selectedRatings=e}onSortChange(){switch(this.sortOption){case"price-asc":this.products.sort((e,t)=>e.price-t.price);break;case"price-desc":this.products.sort((e,t)=>t.price-e.price);break;case"rating":this.products.sort((e,t)=>t.rating-e.rating);break;case"popular":this.products.sort((e,t)=>t.reviews-e.reviews);break;default:this.products.sort((e,t)=>e.id-t.id)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-products"]],decls:13,vars:8,consts:[[1,"products-container"],["title","Produtos de Qualidade para Seu Pet","subtitle","Oferecemos uma sele\xe7\xe3o premium de alimentos, acess\xf3rios e brinquedos para o bem-estar do seu animal de estima\xe7\xe3o."],[1,"search-container"],[1,"search-icon"],[1,"icon-search"],["type","text","placeholder","Buscar produtos...",1,"search-input",3,"value","input"],[1,"products-layout"],[1,"products-sidebar"],[3,"activeCategory","categories","showDurationFilter","categoryChange","priceRangeChange","ratingFilterChange"],[1,"products-content"],["class","products-header",4,"ngIf"],["class","no-results",4,"ngIf"],["class","products-grid",4,"ngIf"],[1,"products-header"],[1,"products-count"],[1,"products-count-highlight"],[1,"products-sort",3,"ngModel","ngModelChange","change"],["value","relevance"],["value","price-asc"],["value","price-desc"],["value","rating"],["value","popular"],[1,"no-results"],[1,"no-results-title"],[1,"no-results-message"],[1,"products-grid"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a._UZ(1,"app-section-heading",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a._UZ(4,"i",4),a.qZA(),a.TgZ(5,"input",5),a.NdJ("input",function(e){return t.onSearch(e)}),a.qZA(),a.qZA(),a.TgZ(6,"div",6),a.TgZ(7,"div",7),a.TgZ(8,"app-filter-panel",8),a.NdJ("categoryChange",function(e){return t.onCategoryChange(e)})("priceRangeChange",function(e){return t.onPriceRangeChange(e)})("ratingFilterChange",function(e){return t.onRatingFilterChange(e)}),a.qZA(),a.qZA(),a.TgZ(9,"div",9),a.YNc(10,p,17,2,"div",10),a.YNc(11,u,5,0,"div",11),a.YNc(12,l,2,1,"div",12),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(5),a.Q6J("value",t.searchQuery),a.xp6(3),a.Q6J("activeCategory",t.activeCategory)("categories",a.DdM(7,m))("showDurationFilter",!1),a.xp6(2),a.Q6J("ngIf",t.filteredProducts.length>0),a.xp6(1),a.Q6J("ngIf",0===t.filteredProducts.length),a.xp6(1),a.Q6J("ngIf",t.filteredProducts.length>0))},directives:[c.P,s.n,o.O5,i.EJ,i.JJ,i.On,i.YN,i.Kr,o.sg,d],styles:['@charset "UTF-8";.products-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:4rem 1.5rem}.search-container[_ngcontent-%COMP%]{position:relative;max-width:36rem;margin:0 auto 2.5rem}.search-icon[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;display:flex;align-items:center;padding-left:.75rem;pointer-events:none}.search-input[_ngcontent-%COMP%]{width:100%;padding:.75rem 1rem .75rem 2.5rem;border:1px solid var(--border);border-radius:var(--radius);background-color:var(--background);font-size:1rem}.search-input[_ngcontent-%COMP%]:focus{outline:none;box-shadow:0 0 0 2px rgba(var(--primary-rgb),.5)}.products-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:2rem;gap:2rem}.products-sidebar[_ngcontent-%COMP%]{width:100%}.products-content[_ngcontent-%COMP%]{flex-grow:1}@media (min-width: 1024px){.products-layout[_ngcontent-%COMP%]{flex-direction:row}.products-sidebar[_ngcontent-%COMP%]{width:16rem;flex-shrink:0}}.products-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem}.products-count[_ngcontent-%COMP%]{font-size:.875rem;color:var(--muted)}.products-count-highlight[_ngcontent-%COMP%]{font-weight:600;color:var(--text)}.products-sort[_ngcontent-%COMP%]{padding:.5rem 1rem;border:1px solid var(--border);border-radius:var(--radius);background-color:var(--background);font-size:.875rem;color:var(--text);cursor:pointer}.products-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:2rem;gap:2rem}@media (min-width: 640px){.products-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-width: 1024px){.products-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.no-results[_ngcontent-%COMP%]{text-align:center;padding:3rem 0}.no-results-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;margin-bottom:.5rem;color:var(--text)}.no-results-message[_ngcontent-%COMP%]{color:var(--muted);margin-bottom:1.5rem}.product-price[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;color:var(--primary);margin-bottom:.5rem}.product-description[_ngcontent-%COMP%]{color:var(--muted);margin-bottom:1.5rem}']}),e})();var h=r(4466);const x=[{path:"",component:f}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,i.u5,h.m,n.Bz.forChild(x)]]}),e})()}}]);
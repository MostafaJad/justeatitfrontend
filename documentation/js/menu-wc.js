'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddDishModule.html" data-type="entity-link">AddDishModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddDishModule-b91a8cdbe85cdfb710f93a53970bf9f8"' : 'data-target="#xs-components-links-module-AddDishModule-b91a8cdbe85cdfb710f93a53970bf9f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddDishModule-b91a8cdbe85cdfb710f93a53970bf9f8"' :
                                            'id="xs-components-links-module-AddDishModule-b91a8cdbe85cdfb710f93a53970bf9f8"' }>
                                            <li class="link">
                                                <a href="components/AddDishComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDishComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminCustomerModule.html" data-type="entity-link">AdminCustomerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminCustomerModule-c14ee97d487b0fa2366e6ad29272daa6"' : 'data-target="#xs-components-links-module-AdminCustomerModule-c14ee97d487b0fa2366e6ad29272daa6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminCustomerModule-c14ee97d487b0fa2366e6ad29272daa6"' :
                                            'id="xs-components-links-module-AdminCustomerModule-c14ee97d487b0fa2366e6ad29272daa6"' }>
                                            <li class="link">
                                                <a href="components/AdminCustomerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminCustomerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminDashboardModule.html" data-type="entity-link">AdminDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminDashboardModule-878ec15e238ce57a21fedd404855aad1"' : 'data-target="#xs-components-links-module-AdminDashboardModule-878ec15e238ce57a21fedd404855aad1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminDashboardModule-878ec15e238ce57a21fedd404855aad1"' :
                                            'id="xs-components-links-module-AdminDashboardModule-878ec15e238ce57a21fedd404855aad1"' }>
                                            <li class="link">
                                                <a href="components/AdminDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPartnerDishesModule.html" data-type="entity-link">AdminPartnerDishesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPartnerDishesModule-f3c255b05cd873d264b1522a22124e51"' : 'data-target="#xs-components-links-module-AdminPartnerDishesModule-f3c255b05cd873d264b1522a22124e51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPartnerDishesModule-f3c255b05cd873d264b1522a22124e51"' :
                                            'id="xs-components-links-module-AdminPartnerDishesModule-f3c255b05cd873d264b1522a22124e51"' }>
                                            <li class="link">
                                                <a href="components/AdminPartnerDishesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPartnerDishesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPartnerModule.html" data-type="entity-link">AdminPartnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPartnerModule-b622ca75e999442995a85a87616028e8"' : 'data-target="#xs-components-links-module-AdminPartnerModule-b622ca75e999442995a85a87616028e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPartnerModule-b622ca75e999442995a85a87616028e8"' :
                                            'id="xs-components-links-module-AdminPartnerModule-b622ca75e999442995a85a87616028e8"' }>
                                            <li class="link">
                                                <a href="components/AdminPartnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPartnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPartnersModule.html" data-type="entity-link">AdminPartnersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPartnersModule-4fece2cd0fba1fb5e261bc574f10b610"' : 'data-target="#xs-components-links-module-AdminPartnersModule-4fece2cd0fba1fb5e261bc574f10b610"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPartnersModule-4fece2cd0fba1fb5e261bc574f10b610"' :
                                            'id="xs-components-links-module-AdminPartnersModule-4fece2cd0fba1fb5e261bc574f10b610"' }>
                                            <li class="link">
                                                <a href="components/AdminPartnersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminPartnersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a6881117649e64a1d95b0450f054ff42"' : 'data-target="#xs-components-links-module-AppModule-a6881117649e64a1d95b0450f054ff42"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a6881117649e64a1d95b0450f054ff42"' :
                                            'id="xs-components-links-module-AppModule-a6881117649e64a1d95b0450f054ff42"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreateOrderModule.html" data-type="entity-link">CreateOrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateOrderModule-73e69e38b3538d8653d978864d9d5fde"' : 'data-target="#xs-components-links-module-CreateOrderModule-73e69e38b3538d8653d978864d9d5fde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateOrderModule-73e69e38b3538d8653d978864d9d5fde"' :
                                            'id="xs-components-links-module-CreateOrderModule-73e69e38b3538d8653d978864d9d5fde"' }>
                                            <li class="link">
                                                <a href="components/CreateOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateOrderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DishSearchModule.html" data-type="entity-link">DishSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DishSearchModule-c861711130afffc24ebccd34fdf94b90"' : 'data-target="#xs-components-links-module-DishSearchModule-c861711130afffc24ebccd34fdf94b90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DishSearchModule-c861711130afffc24ebccd34fdf94b90"' :
                                            'id="xs-components-links-module-DishSearchModule-c861711130afffc24ebccd34fdf94b90"' }>
                                            <li class="link">
                                                <a href="components/DishSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DishSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditDishModule.html" data-type="entity-link">EditDishModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditDishModule-0fa544f831f92023c5017c63890ba7ca"' : 'data-target="#xs-components-links-module-EditDishModule-0fa544f831f92023c5017c63890ba7ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditDishModule-0fa544f831f92023c5017c63890ba7ca"' :
                                            'id="xs-components-links-module-EditDishModule-0fa544f831f92023c5017c63890ba7ca"' }>
                                            <li class="link">
                                                <a href="components/EditDishComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditDishComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-1739d70b4bdd6aad6f89c2f484cf6fcb"' : 'data-target="#xs-components-links-module-HomeModule-1739d70b4bdd6aad6f89c2f484cf6fcb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-1739d70b4bdd6aad6f89c2f484cf6fcb"' :
                                            'id="xs-components-links-module-HomeModule-1739d70b4bdd6aad6f89c2f484cf6fcb"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-7f821ce9c0aa513e6fc0b8c357f291e9"' : 'data-target="#xs-components-links-module-LoginModule-7f821ce9c0aa513e6fc0b8c357f291e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-7f821ce9c0aa513e6fc0b8c357f291e9"' :
                                            'id="xs-components-links-module-LoginModule-7f821ce9c0aa513e6fc0b8c357f291e9"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageOfflineModule.html" data-type="entity-link">MessageOfflineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessageOfflineModule-d5dfd6b054a258d2c68f10c6a38ce793"' : 'data-target="#xs-components-links-module-MessageOfflineModule-d5dfd6b054a258d2c68f10c6a38ce793"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessageOfflineModule-d5dfd6b054a258d2c68f10c6a38ce793"' :
                                            'id="xs-components-links-module-MessageOfflineModule-d5dfd6b054a258d2c68f10c6a38ce793"' }>
                                            <li class="link">
                                                <a href="components/MessageOfflineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageOfflineComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderDetailsModule.html" data-type="entity-link">OrderDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderDetailsModule-b244bea339681b444dcaf5e691e6d5bb"' : 'data-target="#xs-components-links-module-OrderDetailsModule-b244bea339681b444dcaf5e691e6d5bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderDetailsModule-b244bea339681b444dcaf5e691e6d5bb"' :
                                            'id="xs-components-links-module-OrderDetailsModule-b244bea339681b444dcaf5e691e6d5bb"' }>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderHistoryModule.html" data-type="entity-link">OrderHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderHistoryModule-6d3d43e7db190853372747126247f9f8"' : 'data-target="#xs-components-links-module-OrderHistoryModule-6d3d43e7db190853372747126247f9f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderHistoryModule-6d3d43e7db190853372747126247f9f8"' :
                                            'id="xs-components-links-module-OrderHistoryModule-6d3d43e7db190853372747126247f9f8"' }>
                                            <li class="link">
                                                <a href="components/OrderHistoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderHistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PartnerDashboardModule.html" data-type="entity-link">PartnerDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PartnerDashboardModule-f237fffedfe5f518e87d28e23ed2a9d9"' : 'data-target="#xs-components-links-module-PartnerDashboardModule-f237fffedfe5f518e87d28e23ed2a9d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PartnerDashboardModule-f237fffedfe5f518e87d28e23ed2a9d9"' :
                                            'id="xs-components-links-module-PartnerDashboardModule-f237fffedfe5f518e87d28e23ed2a9d9"' }>
                                            <li class="link">
                                                <a href="components/PartnerDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartnerDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PartnerDishesModule.html" data-type="entity-link">PartnerDishesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PartnerDishesModule-8e64db25c288855a7877b82d4230baa8"' : 'data-target="#xs-components-links-module-PartnerDishesModule-8e64db25c288855a7877b82d4230baa8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PartnerDishesModule-8e64db25c288855a7877b82d4230baa8"' :
                                            'id="xs-components-links-module-PartnerDishesModule-8e64db25c288855a7877b82d4230baa8"' }>
                                            <li class="link">
                                                <a href="components/PartnerDishesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartnerDishesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResponseHandlerModule.html" data-type="entity-link">ResponseHandlerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResponseHandlerModule-2bef7d0d59fd5ada77cec61d9baa5f72"' : 'data-target="#xs-components-links-module-ResponseHandlerModule-2bef7d0d59fd5ada77cec61d9baa5f72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResponseHandlerModule-2bef7d0d59fd5ada77cec61d9baa5f72"' :
                                            'id="xs-components-links-module-ResponseHandlerModule-2bef7d0d59fd5ada77cec61d9baa5f72"' }>
                                            <li class="link">
                                                <a href="components/ResponseHandlerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResponseHandlerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupModule.html" data-type="entity-link">SignupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupModule-51aac8dba66bd09b48e9e8939b665eb3"' : 'data-target="#xs-components-links-module-SignupModule-51aac8dba66bd09b48e9e8939b665eb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupModule-51aac8dba66bd09b48e9e8939b665eb3"' :
                                            'id="xs-components-links-module-SignupModule-51aac8dba66bd09b48e9e8939b665eb3"' }>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AdminCustomer.html" data-type="entity-link">AdminCustomer</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link">Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dish.html" data-type="entity-link">Dish</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishAvailability.html" data-type="entity-link">DishAvailability</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishSearchService.html" data-type="entity-link">DishSearchService</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishSearchService-1.html" data-type="entity-link">DishSearchService</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishSearchService-2.html" data-type="entity-link">DishSearchService</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishSearchService-3.html" data-type="entity-link">DishSearchService</a>
                            </li>
                            <li class="link">
                                <a href="classes/DishType.html" data-type="entity-link">DishType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link">Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderItem.html" data-type="entity-link">OrderItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Partner.html" data-type="entity-link">Partner</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogflowService.html" data-type="entity-link">DialogflowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DishTypeService.html" data-type="entity-link">DishTypeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DishSearch.html" data-type="entity-link">DishSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DishSearch-1.html" data-type="entity-link">DishSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DishSearch-2.html" data-type="entity-link">DishSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DishSearch-3.html" data-type="entity-link">DishSearch</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
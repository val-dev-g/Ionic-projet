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
                    <a href="index.html" data-type="index-link">projet01 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2b9088a8b318f5887cab0d0f264b9f615cd510bd6d11e974ef99ea012ec9a7a9bce1448ac2af30cae39a3d8491cca6b0c0696b50bac2b611732cefdf4b57e427"' : 'data-target="#xs-components-links-module-AppModule-2b9088a8b318f5887cab0d0f264b9f615cd510bd6d11e974ef99ea012ec9a7a9bce1448ac2af30cae39a3d8491cca6b0c0696b50bac2b611732cefdf4b57e427"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2b9088a8b318f5887cab0d0f264b9f615cd510bd6d11e974ef99ea012ec9a7a9bce1448ac2af30cae39a3d8491cca6b0c0696b50bac2b611732cefdf4b57e427"' :
                                            'id="xs-components-links-module-AppModule-2b9088a8b318f5887cab0d0f264b9f615cd510bd6d11e974ef99ea012ec9a7a9bce1448ac2af30cae39a3d8491cca6b0c0696b50bac2b611732cefdf4b57e427"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuFirstComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuFirstComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuSecondComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuSecondComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesPageModule.html" data-type="entity-link" >CoursesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesPageModule-8a0db2bc4610b51f63763385cac5692c92c698d279d4df76d39df4e0ddb4b783289ae120d3005b56e9e04415f4737567af7cc6a018f7be72a0f1e8963143d82c"' : 'data-target="#xs-components-links-module-CoursesPageModule-8a0db2bc4610b51f63763385cac5692c92c698d279d4df76d39df4e0ddb4b783289ae120d3005b56e9e04415f4737567af7cc6a018f7be72a0f1e8963143d82c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesPageModule-8a0db2bc4610b51f63763385cac5692c92c698d279d4df76d39df4e0ddb4b783289ae120d3005b56e9e04415f4737567af7cc6a018f7be72a0f1e8963143d82c"' :
                                            'id="xs-components-links-module-CoursesPageModule-8a0db2bc4610b51f63763385cac5692c92c698d279d4df76d39df4e0ddb4b783289ae120d3005b56e9e04415f4737567af7cc6a018f7be72a0f1e8963143d82c"' }>
                                            <li class="link">
                                                <a href="components/CoursesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesPageRoutingModule.html" data-type="entity-link" >CoursesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-fb844346f147bc3efca716aa7a3abdf2d439955ff3a3558de1de1b274260828249e140b082057fdb40edacbf826257b7ecef744b865d548fbc2fab335ac54761"' : 'data-target="#xs-components-links-module-HomePageModule-fb844346f147bc3efca716aa7a3abdf2d439955ff3a3558de1de1b274260828249e140b082057fdb40edacbf826257b7ecef744b865d548fbc2fab335ac54761"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-fb844346f147bc3efca716aa7a3abdf2d439955ff3a3558de1de1b274260828249e140b082057fdb40edacbf826257b7ecef744b865d548fbc2fab335ac54761"' :
                                            'id="xs-components-links-module-HomePageModule-fb844346f147bc3efca716aa7a3abdf2d439955ff3a3558de1de1b274260828249e140b082057fdb40edacbf826257b7ecef744b865d548fbc2fab335ac54761"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapagePageModule.html" data-type="entity-link" >MapagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapagePageModule-ccd1461f4ce0531f34f795704c9a1cd402c9f65351a1c89024bb6ec5628ffc55ac8426ad328424239e4db004e99abf44fcf12fa71bcfbc491101c1be500ef32a"' : 'data-target="#xs-components-links-module-MapagePageModule-ccd1461f4ce0531f34f795704c9a1cd402c9f65351a1c89024bb6ec5628ffc55ac8426ad328424239e4db004e99abf44fcf12fa71bcfbc491101c1be500ef32a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapagePageModule-ccd1461f4ce0531f34f795704c9a1cd402c9f65351a1c89024bb6ec5628ffc55ac8426ad328424239e4db004e99abf44fcf12fa71bcfbc491101c1be500ef32a"' :
                                            'id="xs-components-links-module-MapagePageModule-ccd1461f4ce0531f34f795704c9a1cd402c9f65351a1c89024bb6ec5628ffc55ac8426ad328424239e4db004e99abf44fcf12fa71bcfbc491101c1be500ef32a"' }>
                                            <li class="link">
                                                <a href="components/MapagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapagePageRoutingModule.html" data-type="entity-link" >MapagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaisiecoursPageModule.html" data-type="entity-link" >SaisiecoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaisiecoursPageModule-c3580dc3384c3ddb65dd588a30ada46093e169c073342b260a5f95a10c8f3a01c335578f519f78a661c1ee939115a4d409c70b1b839dfeb3d0c2331167ced595"' : 'data-target="#xs-components-links-module-SaisiecoursPageModule-c3580dc3384c3ddb65dd588a30ada46093e169c073342b260a5f95a10c8f3a01c335578f519f78a661c1ee939115a4d409c70b1b839dfeb3d0c2331167ced595"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaisiecoursPageModule-c3580dc3384c3ddb65dd588a30ada46093e169c073342b260a5f95a10c8f3a01c335578f519f78a661c1ee939115a4d409c70b1b839dfeb3d0c2331167ced595"' :
                                            'id="xs-components-links-module-SaisiecoursPageModule-c3580dc3384c3ddb65dd588a30ada46093e169c073342b260a5f95a10c8f3a01c335578f519f78a661c1ee939115a4d409c70b1b839dfeb3d0c2331167ced595"' }>
                                            <li class="link">
                                                <a href="components/SaisiecoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaisiecoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaisiecoursPageRoutingModule.html" data-type="entity-link" >SaisiecoursPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/MoncomposantComponent.html" data-type="entity-link" >MoncomposantComponent</a>
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
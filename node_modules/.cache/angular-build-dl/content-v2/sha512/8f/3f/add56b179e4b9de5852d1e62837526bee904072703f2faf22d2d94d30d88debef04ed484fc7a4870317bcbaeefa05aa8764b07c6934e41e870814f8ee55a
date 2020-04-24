(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-customer/add-customer.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-customer/add-customer.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>Add New Customer</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"companyName\">Company Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"companyName\"\r\n                       required\r\n                        [(ngModel)]=\"model.companyName\" name=\"companyName\"\r\n                        #companyName=\"ngModel\">\r\n                <div [hidden]=\"companyName.valid || companyName.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    A company name is required\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"address\">Address (Please enter full address including city, state, and zip code)</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"address\"\r\n                       required\r\n                        [(ngModel)]=\"model.address\" name=\"address\"\r\n                        #address=\"ngModel\">\r\n                <div [hidden]=\"address.valid || address.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    Address is required\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div [formGroup]=\"contactForm\">\r\n                <label>\r\n                    Contact Role\r\n                    <input type=\"text\" formControlName=\"role\">\r\n                </label>\r\n                <br>\r\n                <label>\r\n                    Contact Name\r\n                    <input type=\"text\" formControlName=\"name\">\r\n                </label>\r\n                <br>\r\n                <label>\r\n                    Contact Email\r\n                    <input type=\"text\" formControlName=\"email\" ngModel email>\r\n                </label>\r\n                <br>\r\n                <label>\r\n                    Contact Phone #\r\n                    <input type=\"text\" formControlName=\"phone_number\">\r\n                </label>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addContact()\"\r\n                        [disabled]=\"!contactForm.valid\">Add Contact</button>\r\n            </div>\r\n            <br><br>\r\n            <div [hidden]=\"!contactAdded\">\r\n                <h4>Contacts</h4>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">Role</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Email</th>\r\n                        <th scope=\"col\">Phone Number</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let contact of model.contacts\">\r\n                        <td>{{contact.role}}</td>\r\n                        <td>{{contact.name}}</td>\r\n                        <td>{{contact.email}}</td>\r\n                        <td>{{contact.phone_number}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success\"\r\n            [disabled]=\"!customerForm.form.valid || !contactAdded\">Submit\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n    <div [hidden]=\"!submitted\">\r\n            <h2>You submitted the following:</h2>\r\n            <div class=\"row\">\r\n                <h4>Company Name:  </h4>\r\n                <h4 color=\"blue\"> {{ model.companyName }}</h4>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <h4>Address:  </h4>\r\n                <h4 color=\"blue\"> {{ model.address }}</h4>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <h4>Contacts</h4>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">Role</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Email</th>\r\n                        <th scope=\"col\">Phone Number</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let contact of model.contacts\">\r\n                        <td>{{contact.role}}</td>\r\n                        <td>{{contact.name}}</td>\r\n                        <td>{{contact.email}}</td>\r\n                        <td>{{contact.phone_number}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n            <br><br>\r\n            <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n            <button class=\"btn btn-success\" (click)=\"closeDialog()\">Add Customer</button>\r\n    </div>\r\n</div>\r\n   ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>Add New Product</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Product Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\"\r\n                       required\r\n                        [(ngModel)]=\"model.name\" name=\"name\"\r\n                        #name=\"ngModel\">\r\n                <div [hidden]=\"name.valid || name.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    Product name required\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"desc\">Product Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"desc\"\r\n                       required\r\n                        [(ngModel)]=\"model.description\" name=\"desc\"\r\n                        #desc=\"ngModel\">\r\n                <div [hidden]=\"desc.valid || desc.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    Product Description is required\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success\"\r\n            [disabled]=\"!customerForm.form.valid\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Product Name: </div>\r\n            <div class=\"col-xs-9\"> {{ model.name }}</div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Description: </div>\r\n            <div class=\"col-xs-9\"> {{ model.description }}</div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n        <button class=\"btn btn-success\" (click)=\"closeDialog()\">Add Product</button>\r\n    </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-purchase/add-purchase.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-purchase/add-purchase.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>Enter New Purchase Order</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"id\">Purchase ID</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"id\"\r\n                       required\r\n                        [(ngModel)]=\"model.purchaseId\" name=\"id\"\r\n                        #id=\"ngModel\">\r\n                <div [hidden]=\"id.valid || id.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    ID is required\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [formGroup]=\"selections\">\r\n                <label for=\"cust\">Customer</label>\r\n                <select class=\"form-control\" formControlName=\"customerEntry\" id=\"cust\">\r\n                    <option *ngFor=\"let customer of customers\">{{customer.companyName}}</option>\r\n                </select>\r\n                <br>\r\n                <label for=\"product\">Product</label>\r\n                <select class=\"form-control\" formControlName=\"productEntry\" id=\"product\">\r\n                    <option *ngFor=\"let product of products\">{{product.name}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"no_licenses\">Number of Licenses</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"no_licenses\"\r\n                       required\r\n                        [(ngModel)]=\"model.no_of_licenses\" name=\"no_licenses\"\r\n                        #no_licenses=\"ngModel\">\r\n                <div [hidden]=\"no_licenses.valid || no_licenses.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    # of licenses is required\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"exp\">Expiration Date</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"exp\"\r\n                       required\r\n                        [(ngModel)]=\"model.expiration_date\" name=\"exp\"\r\n                        #exp=\"ngModel\">\r\n                <div [hidden]=\"exp.valid || exp.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    Expiration Date is required\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success\"\r\n            [disabled]=\"!customerForm.form.valid\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Id: </div>\r\n            <div class=\"col-xs-9\"> {{ model.id }}</div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Customer Name: </div>\r\n            <div class=\"col-xs-9\"> {{ model.customer_name }}</div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Product: </div>\r\n            <div class=\"col-xs-9\"> {{ model.product }}</div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Number of Licenses: </div>\r\n            <div class=\"col-xs-9\"> {{ model.no_of_licenses }}</div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Expiration Date: (mm/dd/yyyy)</div>\r\n            <div class=\"col-xs-9\"> {{ model.expiration_date }}</div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n        <button class=\"btn btn-success\" (click)=\"closeDialog()\">Add Purchase</button>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n  <a routerLink=\"/table\">License Manager</a>\r\n  <div class=\"header-right\">\r\n    <a routerLink=\"/dashboard\">Dashboard</a>\r\n    <a routerLink=\"/table\">Table</a>\r\n    <a routerLink=\"/login\">Login</a>\r\n  </div>\r\n</div>\r\n<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-detail/customer-detail.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-detail/customer-detail.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n  <h2>{{ customer.customer_name }} Contacts</h2>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Role</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Phone Number</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let contact of customer.contacts\">\r\n        <td>{{contact.role}}</td>\r\n        <td>{{contact.name}}</td>\r\n        <td>{{contact.email}}</td>\r\n        <td>{{contact.phone_number}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>My Customers</h2>\r\n\r\n<ul class = \"customers\">\r\n  <li *ngFor=\"let customer of customers\">\r\n    <a routerLink=\"/detail/{{customer.id}}\">\r\n    <span class=\"badge\">{{ customer.customer_name }}</span> {{ customer.product }}\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Licenses Expiring Within a Month</h1>\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let purchase of purchases\" class=\"col-1-4\">\r\n    <div class=\"module hero\" (click)=\"openPurchaseDetail(purchase)\">\r\n      <h4>{{ purchase.customer_name }}</h4>\r\n      <h4>{{ purchase.expiration_date }}</h4>\r\n      <h6>{{ purchase.product }} </h6>\r\n    </div>\r\n  </a>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>Login</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\"\r\n                       required\r\n                        [(ngModel)]=\"model.username\" name=\"name\"\r\n                        #name=\"ngModel\">\r\n                <div [hidden]=\"name.valid || name.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    Email required\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"pass\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"pass\"\r\n                       required\r\n                        [(ngModel)]=\"model.password\" name=\"pass\"\r\n                        #pass=\"ngModel\">\r\n                <div [hidden]=\"pass.valid || pass.pristine\"\r\n                    class=\"alert alert-danger\">\r\n                    Password is required\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success\"\r\n            [disabled]=\"!loginForm.form.valid\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div [hidden]=\"!submitted\">\r\n        <p>Successfully logged in.</p>\r\n        <a routerLink=\"/table\">Go back to table</a>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/purchase-detail/purchase-detail.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/purchase-detail/purchase-detail.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<pre><h4>Customer:                           {{ customer.companyName }}</h4></pre>\r\n<pre><h4>Product:                              {{ data.productName }}</h4></pre>\r\n<pre><h4>Number of Licenses:          {{ data.no_of_licenses }}</h4></pre>\r\n<pre><h4>Expiration Date:                  {{ data.expiration_date }}</h4></pre>\r\n<h5>Contacts at {{ data.companyName }}:</h5>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Role</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Email</th>\r\n      <th scope=\"col\">Phone Number</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let contact of customer.contacts\">\r\n      <td>{{contact.role}}</td>\r\n      <td>{{contact.name}}</td>\r\n      <td>{{contact.email}}</td>\r\n      <td>{{contact.phone_number}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<h6>Mailing Address for {{ customer.companyName }}:</h6>\r\n<br>\r\n<h6>{{customer.address}}</h6>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"dropdown\">\r\n  <button class=\"btn btn-sm btn-secondary dropdown-toggle\" style=\"float:right;margin-top:15px; margin-right:15px;\" \r\n        type=\"button\" data-toggle=\"dropdown\" id=\"dropdownMenu\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Add New\r\n  </button>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu\">\r\n    <a class=\"dropdown-item\" (click)=\"openCustomerEntry()\">Customer</a>\r\n    <a class=\"dropdown-item\" (click)=\"openProductEntry()\">Product</a>\r\n    <a class=\"dropdown-item\" (click)=\"openPurchaseEntry()\">Purchase Order</a>\r\n    <!-- <a class=\"dropdown-item\" routerLink=\"/createCustomer\">Customer</a> -->\r\n    <!-- <a class=\"dropdown-item\" routerLink=\"/createProduct\">Product</a> -->\r\n    <!-- <a class=\"dropdown-item\" routerLink=\"/createPurchase\">Purchase Order</a> -->\r\n  </div>\r\n</div>\r\n<div>\r\n  <mat-form-field fxFlex=\"40%\">\r\n    <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n<mat-table style=\"margin-top:50px\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\r\n  <ng-container matColumnDef=\"customer_name\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Customer </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let purchase\">{{ purchase.customer_name }}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"product\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Product </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let purchase\">{{ purchase.product }}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"expiration_date\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Expiration Date </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let purchase\">{{ purchase.expiration_date }}</mat-cell>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"no_of_licenses\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> No. of Licenses </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let purchase\">{{ purchase.no_of_licenses }}</mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"openCustomerInfo(row)\" class=\"purchase-row\"></mat-row>\r\n</mat-table>\r\n\r\n<mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[10, 20, 50, 100]\"></mat-paginator>\r\n\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/Services/customer.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/Services/customer.service.ts ***!
          \**********************************************/
        /*! exports provided: CustomerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function () { return CustomerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CustomerService = /** @class */ (function () {
                function CustomerService(http) {
                    this.http = http;
                }
                CustomerService.prototype.getCustomers = function () {
                    var _this = this;
                    this.http.get('http://localhost:3000/api/customers', { observe: 'response' }).subscribe(function (res) {
                        var response = res.body;
                        _this.customers = response;
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.customers);
                    //return of(CUSTOMERS);
                };
                CustomerService.prototype.getCustomer = function (companyName) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.customers.find(function (customer) { return customer.companyName === companyName; }));
                };
                CustomerService.prototype.addCustomer = function (customer) {
                    //CUSTOMERS.push(customer);
                    console.log(customer);
                    this.http.put('http://localhost:3000/api/customers', customer)
                        .subscribe(function (response) { });
                };
                return CustomerService;
            }());
            CustomerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CustomerService);
            /***/ 
        }),
        /***/ "./src/app/Services/product.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/Services/product.service.ts ***!
          \*********************************************/
        /*! exports provided: ProductService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function () { return ProductService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mock_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-products */ "./src/app/mock-products.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ProductService = /** @class */ (function () {
                function ProductService(http) {
                    this.http = http;
                }
                ProductService.prototype.getProducts = function () {
                    var _this = this;
                    this.http.get('http://localhost:3000/api/products', { observe: 'response' }).subscribe(function (res) {
                        var response = res.body;
                        _this.products = response;
                    });
                    //console.log(this.products);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.products);
                    //return of(PRODUCTS);
                };
                ProductService.prototype.addProduct = function (product) {
                    _mock_products__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS"].push(product);
                    this.http.put('http://localhost:3000/api/products', product)
                        .subscribe(function (response) { });
                    console.log(product);
                };
                return ProductService;
            }());
            ProductService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProductService);
            /***/ 
        }),
        /***/ "./src/app/Services/purchase.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/Services/purchase.service.ts ***!
          \**********************************************/
        /*! exports provided: PurchaseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseService", function () { return PurchaseService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mock_purchases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-purchases */ "./src/app/mock-purchases.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PurchaseService = /** @class */ (function () {
                function PurchaseService(http) {
                    this.http = http;
                    this.purchases = [];
                    this.purchasesExpiringSoon = [];
                }
                PurchaseService.prototype.getPurchases = function () {
                    var _this = this;
                    this.http.get('http://localhost:3000/api/purchases', { observe: 'response' }).subscribe(function (res) {
                        var response = res.body;
                        _this.purchases = response;
                    });
                    //console.log(this.purchases)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.purchases);
                    //return of(PURCHASES);
                };
                PurchaseService.prototype.getPurchase = function (id) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_purchases__WEBPACK_IMPORTED_MODULE_2__["PURCHASES"].find(function (purchase) { return purchase.purchaseId === id; }));
                };
                PurchaseService.prototype.addPurchase = function (purchase) {
                    purchase.licenseKeyType = "type1";
                    purchase.licenses = [];
                    console.log(purchase);
                    //PURCHASES.push(purchase);
                    this.http.put('http://localhost:3000/api/purchases', purchase)
                        .subscribe(function (response) { });
                };
                PurchaseService.prototype.getPurchasesExpiringSoon = function () {
                    if (this.purchases.length == 0) {
                        this.getPurchases();
                    }
                    this.purchasesExpiringSoon = [];
                    var today = new Date();
                    var todayIO = today.toISOString();
                    var todayString = todayIO.slice(0, 4) + todayIO.slice(5, 7) + todayIO.slice(8, 10);
                    for (var _i = 0, _a = this.purchases; _i < _a.length; _i++) {
                        var purchase = _a[_i];
                        var reformattedDate = purchase.expiration_date.slice(6) + purchase.expiration_date.slice(0, 2)
                            + purchase.expiration_date.slice(3, 5);
                        if ((Number(reformattedDate) + 30 >= Number(todayString)) && (Number(todayString) <= Number(reformattedDate))) {
                            this.purchasesExpiringSoon.push(purchase);
                        }
                    }
                    function sorter(a, b) {
                        var x = Number(a.expiration_date.slice(6) + a.expiration_date.slice(0, 2)
                            + a.expiration_date.slice(3, 5));
                        var y = Number(b.expiration_date.slice(6) + b.expiration_date.slice(0, 2)
                            + b.expiration_date.slice(3, 5));
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.purchasesExpiringSoon.sort(sorter));
                };
                return PurchaseService;
            }());
            PurchaseService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            PurchaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PurchaseService);
            /***/ 
        }),
        /***/ "./src/app/add-customer/add-customer.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/add-customer/add-customer.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div button {\r\n    margin-right:20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/add-customer/add-customer.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/add-customer/add-customer.component.ts ***!
          \********************************************************/
        /*! exports provided: AddCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () { return AddCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/customer.service */ "./src/app/Services/customer.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AddCustomerComponent = /** @class */ (function () {
                function AddCustomerComponent(customerService, dialog) {
                    this.customerService = customerService;
                    this.dialog = dialog;
                    this.model = {
                        companyName: "",
                        address: "",
                        contacts: []
                    };
                    this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(new RegExp("[0-9]{10}"))])
                    });
                    this.submitted = false;
                    this.contactAdded = false;
                }
                AddCustomerComponent.prototype.ngOnInit = function () {
                };
                AddCustomerComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(AddCustomerComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                AddCustomerComponent.prototype.SaveInfo = function () {
                    this.customerService.addCustomer(this.model);
                };
                AddCustomerComponent.prototype.addContact = function () {
                    this.contactAdded = true;
                    this.model.contacts.push(this.contactForm.value);
                    this.contactForm.reset();
                };
                AddCustomerComponent.prototype.closeDialog = function () {
                    this.SaveInfo();
                    this.dialog.closeAll();
                };
                return AddCustomerComponent;
            }());
            AddCustomerComponent.ctorParameters = function () { return [
                { type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
            ]; };
            AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-customer/add-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-customer.component.css */ "./src/app/add-customer/add-customer.component.css")).default]
                })
            ], AddCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/add-product/add-product.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/add-product/add-product.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/add-product/add-product.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/add-product/add-product.component.ts ***!
          \******************************************************/
        /*! exports provided: AddProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () { return AddProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/product.service */ "./src/app/Services/product.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AddProductComponent = /** @class */ (function () {
                function AddProductComponent(productService, dialog) {
                    this.productService = productService;
                    this.dialog = dialog;
                    this.model = {
                        name: '',
                        description: ''
                    };
                    this.submitted = false;
                }
                AddProductComponent.prototype.ngOnInit = function () {
                };
                AddProductComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                AddProductComponent.prototype.SaveInfo = function () {
                    this.productService.addProduct(this.model);
                };
                AddProductComponent.prototype.closeDialog = function () {
                    this.SaveInfo();
                    this.dialog.closeAll();
                };
                return AddProductComponent;
            }());
            AddProductComponent.ctorParameters = function () { return [
                { type: _Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")).default]
                })
            ], AddProductComponent);
            /***/ 
        }),
        /***/ "./src/app/add-purchase/add-purchase.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/add-purchase/add-purchase.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wdXJjaGFzZS9hZGQtcHVyY2hhc2UuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/add-purchase/add-purchase.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/add-purchase/add-purchase.component.ts ***!
          \********************************************************/
        /*! exports provided: AddPurchaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPurchaseComponent", function () { return AddPurchaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/customer.service */ "./src/app/Services/customer.service.ts");
            /* harmony import */ var _Services_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/purchase.service */ "./src/app/Services/purchase.service.ts");
            /* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/product.service */ "./src/app/Services/product.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AddPurchaseComponent = /** @class */ (function () {
                function AddPurchaseComponent(customerService, purchaseService, productService, dialogRef) {
                    this.customerService = customerService;
                    this.purchaseService = purchaseService;
                    this.productService = productService;
                    this.dialogRef = dialogRef;
                    this.model = {
                        purchaseId: null,
                        customer_name: "",
                        product: "",
                        no_of_licenses: null,
                        expiration_date: "",
                        licenses: [],
                        licenseKeyType: ""
                    };
                    this.submitted = false;
                    this.selections = null;
                }
                AddPurchaseComponent.prototype.ngOnInit = function () {
                    this.getCustomers();
                    this.getProducts();
                    this.selections = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        customerEntry: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.customers[0].companyName),
                        productEntry: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.products[0].name)
                    });
                };
                AddPurchaseComponent.prototype.onSubmit = function () {
                    this.model.customer_name = this.selections.value.customerEntry;
                    this.model.product = this.selections.value.productEntry;
                    this.submitted = true;
                };
                AddPurchaseComponent.prototype.getCustomers = function () {
                    var _this = this;
                    this.customerService.getCustomers()
                        .subscribe(function (customers) { return _this.customers = customers; });
                };
                AddPurchaseComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.productService.getProducts()
                        .subscribe(function (products) { return _this.products = products; });
                };
                AddPurchaseComponent.prototype.SaveInfo = function () {
                    //console.log(this.model);
                    this.purchaseService.addPurchase(this.model);
                };
                AddPurchaseComponent.prototype.closeDialog = function () {
                    this.SaveInfo();
                    this.resetModel();
                    this.dialogRef.close();
                };
                AddPurchaseComponent.prototype.resetModel = function () {
                    this.model.purchaseId = null;
                    this.model.customer_name = "";
                    this.model.product = "";
                    this.model.no_of_licenses = null;
                    this.model.expiration_date = "";
                    this.model.licenses = [];
                    this.model.licenseKeyType = "";
                };
                return AddPurchaseComponent;
            }());
            AddPurchaseComponent.ctorParameters = function () { return [
                { type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
                { type: _Services_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: _Services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }
            ]; };
            AddPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-purchase',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-purchase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-purchase/add-purchase.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-purchase.component.css */ "./src/app/add-purchase/add-purchase.component.css")).default]
                })
            ], AddPurchaseComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");
            /* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
            /* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "./src/app/add-customer/add-customer.component.ts");
            /* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
            /* harmony import */ var _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-purchase/add-purchase.component */ "./src/app/add-purchase/add-purchase.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            var routes = [
                { path: '', redirectTo: '/table', pathMatch: 'full' },
                { path: 'customer123', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"] },
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
                { path: 'detail/:id', component: _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailComponent"] },
                { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"] },
                { path: 'createCustomer', component: _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__["AddCustomerComponent"] },
                { path: 'createProduct', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"] },
                { path: 'createPurchase', component: _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_9__["AddPurchaseComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Style the header with a grey background and some padding */\r\n.header {\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n  padding: 20px 10px;\r\n}\r\n/* Style the header links */\r\n.header a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  line-height: 25px;\r\n  border-radius: 4px;\r\n}\r\n/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */\r\n.header a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n/* Change the background color on mouse-over */\r\n.header a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n/* Style the active/current link*/\r\n.header a.active {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n}\r\n/* Float the link section to the right */\r\n.header-right {\r\n  float: right;\r\n}\r\n.content {\r\n  width:80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */\r\n@media screen and (max-width: 500px) {\r\n  .header a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n  .header-right {\r\n    float: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUEsb0pBQW9KO0FBQ3BKO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBLDhDQUE4QztBQUM5QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkO0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBLHVIQUF1SDtBQUN2SDtFQUNFO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSB0aGUgaGVhZGVyIHdpdGggYSBncmV5IGJhY2tncm91bmQgYW5kIHNvbWUgcGFkZGluZyAqL1xyXG4uaGVhZGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaGVhZGVyIGxpbmtzICovXHJcbi5oZWFkZXIgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgbG9nbyBsaW5rIChub3RpY2UgdGhhdCB3ZSBzZXQgdGhlIHNhbWUgdmFsdWUgb2YgbGluZS1oZWlnaHQgYW5kIGZvbnQtc2l6ZSB0byBwcmV2ZW50IHRoZSBoZWFkZXIgdG8gaW5jcmVhc2Ugd2hlbiB0aGUgZm9udCBnZXRzIGJpZ2dlciAqL1xyXG4uaGVhZGVyIGEubG9nbyB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb24gbW91c2Utb3ZlciAqL1xyXG4uaGVhZGVyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayovXHJcbi5oZWFkZXIgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBGbG9hdCB0aGUgbGluayBzZWN0aW9uIHRvIHRoZSByaWdodCAqL1xyXG4uaGVhZGVyLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDo4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKiBBZGQgbWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgLSB3aGVuIHRoZSBzY3JlZW4gaXMgNTAwcHggd2lkZSBvciBsZXNzLCBzdGFjayB0aGUgbGlua3Mgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaGVhZGVyIGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5oZWFkZXItcmlnaHQge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'License Manager';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
            /* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "./src/app/add-customer/add-customer.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
            /* harmony import */ var _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-purchase/add-purchase.component */ "./src/app/add-purchase/add-purchase.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./purchase-detail/purchase-detail.component */ "./src/app/purchase-detail/purchase-detail.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
                        _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomerDetailComponent"],
                        _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                        _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__["AddCustomerComponent"],
                        _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"],
                        _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_14__["AddPurchaseComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                        _purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseDetailComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_16__["DemoMaterialModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
                    ],
                    entryComponents: [
                        _purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseDetailComponent"]
                    ],
                    exports: [],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/customer-detail/customer-detail.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/customer-detail/customer-detail.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* add customer detail styles here */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZGV0YWlsL2N1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWRldGFpbC9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGFkZCBjdXN0b21lciBkZXRhaWwgc3R5bGVzIGhlcmUgKi8iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/customer-detail/customer-detail.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/customer-detail/customer-detail.component.ts ***!
          \**************************************************************/
        /*! exports provided: CustomerDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function () { return CustomerDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _Services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/customer.service */ "./src/app/Services/customer.service.ts");
            var CustomerDetailComponent = /** @class */ (function () {
                function CustomerDetailComponent(customerService, dialogRef, data) {
                    this.customerService = customerService;
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                CustomerDetailComponent.prototype.ngOnInit = function () {
                    this.getCustomer(this.data.companyName);
                };
                CustomerDetailComponent.prototype.getCustomer = function (companyName) {
                    var _this = this;
                    this.customerService.getCustomer(companyName)
                        .subscribe(function (customer) { return _this.customer = customer; });
                };
                CustomerDetailComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return CustomerDetailComponent;
            }());
            CustomerDetailComponent.ctorParameters = function () { return [
                { type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            CustomerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-detail/customer-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-detail.component.css */ "./src/app/customer-detail/customer-detail.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], CustomerDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/customer/customer.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/customer/customer.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".customers {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.customers li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.customers li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.customers li.selected {\r\n  background-color: #CFD8DC;\r\n  color: white;\r\n}\r\n.customers li.selected:hover {\r\n  background-color: #BBD8DC;\r\n  color: white;\r\n}\r\n.customers .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color:#405061;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lcnMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcbi5jdXN0b21lcnMgbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmN1c3RvbWVycyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcbi5jdXN0b21lcnMgbGkuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21lcnMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21lcnMgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/customer/customer.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/customer/customer.component.ts ***!
          \************************************************/
        /*! exports provided: CustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () { return CustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/customer.service */ "./src/app/Services/customer.service.ts");
            var CustomerComponent = /** @class */ (function () {
                function CustomerComponent(customerService) {
                    this.customerService = customerService;
                }
                CustomerComponent.prototype.ngOnInit = function () {
                    this.getCustomers();
                };
                CustomerComponent.prototype.getCustomers = function () {
                    var _this = this;
                    this.customerService.getCustomers()
                        .subscribe(function (customers) { return _this.customers = customers; });
                };
                return CustomerComponent;
            }());
            CustomerComponent.ctorParameters = function () { return [
                { type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
            ]; };
            CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")).default]
                })
            ], CustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #3f525c;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFO0FBQ3RCO0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmg0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmdyaWQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29sLTEtNCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4ubW9kdWxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2VlZTtcclxuICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUyNWM7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5tb2R1bGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNjA3ZDhiO1xyXG59XHJcbi5ncmlkLXBhZCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1vZHVsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm1vZHVsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Services_purchase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/purchase.service */ "./src/app/Services/purchase.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-detail/purchase-detail.component */ "./src/app/purchase-detail/purchase-detail.component.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(purchaseService, dialog) {
                    this.purchaseService = purchaseService;
                    this.dialog = dialog;
                    this.purchases = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getPurchases();
                };
                DashboardComponent.prototype.getPurchases = function () {
                    var _this = this;
                    this.purchaseService.getPurchasesExpiringSoon()
                        .subscribe(function (purchases) { return _this.purchases = purchases; });
                };
                DashboardComponent.prototype.openPurchaseDetail = function (purchase) {
                    var dialogRef = this.dialog.open(_purchase_detail_purchase_detail_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseDetailComponent"], {
                        width: '640px',
                        data: {
                            companyName: purchase.customer_name,
                            productName: purchase.product,
                            no_of_licenses: purchase.no_of_licenses,
                            expiration_date: purchase.expiration_date
                        }
                    });
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _Services_purchase_service__WEBPACK_IMPORTED_MODULE_2__["PurchaseService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(http) {
                    this.http = http;
                    this.model = {
                        username: '',
                        password: ''
                    };
                    this.submitted = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    console.log(this.model);
                    this.http.post('http://localhost:3000/api/users/login', this.model)
                        .subscribe(function (response) { console.log(response.userId); });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/material-module.ts": 
        /*!************************************!*\
          !*** ./src/app/material-module.ts ***!
          \************************************/
        /*! exports provided: DemoMaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () { return DemoMaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            /* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
            /* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
            /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var DemoMaterialModule = /** @class */ (function () {
                function DemoMaterialModule() {
                }
                return DemoMaterialModule;
            }());
            DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    exports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"]
                    ]
                })
            ], DemoMaterialModule);
            /**  Copyright 2019 Google LLC. All Rights Reserved.
                Use of this source code is governed by an MIT-style license that
                can be found in the LICENSE file at http://angular.io/license */
            /***/ 
        }),
        /***/ "./src/app/mock-products.ts": 
        /*!**********************************!*\
          !*** ./src/app/mock-products.ts ***!
          \**********************************/
        /*! exports provided: PRODUCTS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function () { return PRODUCTS; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var PRODUCTS = [
                {
                    name: 'SuperAwesomeSoftware',
                    description: 'Super Awesome!',
                },
                {
                    name: 'SuperAwesomeSoftware2',
                    description: 'Super Awesome Too!',
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/mock-purchases.ts": 
        /*!***********************************!*\
          !*** ./src/app/mock-purchases.ts ***!
          \***********************************/
        /*! exports provided: PURCHASES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASES", function () { return PURCHASES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var PURCHASES = [
                {
                    purchaseId: 1,
                    customer_name: 'Company 1',
                    product: 'Software 1',
                    no_of_licenses: 100,
                    licenses: [1, 2, 3, 100],
                    expiration_date: '01/01/2020',
                    licenseKeyType: 'Type 3'
                },
                {
                    purchaseId: 2,
                    customer_name: 'Company 2',
                    product: 'Software 2',
                    no_of_licenses: 1000,
                    licenses: [1, 2, 3, 1000],
                    expiration_date: '10/31/2019',
                    licenseKeyType: 'Type 1'
                },
                {
                    purchaseId: 3,
                    customer_name: 'Company 1',
                    product: 'Software 2',
                    no_of_licenses: 100,
                    licenses: [1, 2, 3, 100],
                    expiration_date: '01/01/2020',
                    licenseKeyType: 'Type 3'
                },
                {
                    purchaseId: 4,
                    customer_name: 'Company 3',
                    product: 'Software 1',
                    no_of_licenses: 10,
                    licenses: [1, 2, 3],
                    expiration_date: '01/01/2020',
                    licenseKeyType: 'Type 2'
                },
                {
                    purchaseId: 5,
                    customer_name: 'Company 4',
                    product: 'Software 3',
                    no_of_licenses: 100,
                    licenses: [1, 2, 3, 100],
                    expiration_date: '05/01/2020',
                    licenseKeyType: 'Type 1'
                },
                {
                    purchaseId: 6,
                    customer_name: 'Company 5',
                    product: 'Software 1',
                    no_of_licenses: 100,
                    licenses: [1, 2, 3, 100],
                    expiration_date: '01/01/2020',
                    licenseKeyType: 'Type 3'
                },
                {
                    purchaseId: 7,
                    customer_name: 'Company 6',
                    product: 'Software 3',
                    no_of_licenses: 100,
                    licenses: [1, 2, 3, 100],
                    expiration_date: '01/01/2020',
                    licenseKeyType: 'Type 2'
                },
                {
                    purchaseId: 8,
                    customer_name: 'Company 2',
                    product: 'Software 1',
                    no_of_licenses: 1000,
                    licenses: [1, 2, 3, 1000],
                    expiration_date: '10/30/2019',
                    licenseKeyType: 'Type 1'
                },
            ];
            /***/ 
        }),
        /***/ "./src/app/purchase-detail/purchase-detail.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/purchase-detail/purchase-detail.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1cmNoYXNlLWRldGFpbC9wdXJjaGFzZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/purchase-detail/purchase-detail.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/purchase-detail/purchase-detail.component.ts ***!
          \**************************************************************/
        /*! exports provided: PurchaseDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseDetailComponent", function () { return PurchaseDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _Services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/customer.service */ "./src/app/Services/customer.service.ts");
            var PurchaseDetailComponent = /** @class */ (function () {
                function PurchaseDetailComponent(customerService, dialogRef, data) {
                    this.customerService = customerService;
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                PurchaseDetailComponent.prototype.ngOnInit = function () {
                    this.getCustomer(this.data.companyName);
                    console.log(this.customer);
                    console.log(this.data);
                };
                PurchaseDetailComponent.prototype.openDialog = function () {
                };
                PurchaseDetailComponent.prototype.getCustomer = function (companyName) {
                    var _this = this;
                    this.customerService.getCustomer(companyName)
                        .subscribe(function (customer) { return _this.customer = customer; });
                };
                PurchaseDetailComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return PurchaseDetailComponent;
            }());
            PurchaseDetailComponent.ctorParameters = function () { return [
                { type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            PurchaseDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-purchase-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/purchase-detail/purchase-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-detail.component.css */ "./src/app/purchase-detail/purchase-detail.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PurchaseDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/table/table.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/table/table.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*add table styles here*/\r\n.purchase-row:hover {\r\n    background: #f5f5f5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEI7SUFDSSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphZGQgdGFibGUgc3R5bGVzIGhlcmUqL1xyXG4ucHVyY2hhc2Utcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/table/table.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/table/table.component.ts ***!
          \******************************************/
        /*! exports provided: TableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function () { return TableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/customer.service */ "./src/app/Services/customer.service.ts");
            /* harmony import */ var _Services_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/purchase.service */ "./src/app/Services/purchase.service.ts");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-customer/add-customer.component */ "./src/app/add-customer/add-customer.component.ts");
            /* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
            /* harmony import */ var _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-purchase/add-purchase.component */ "./src/app/add-purchase/add-purchase.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");
            var TableComponent = /** @class */ (function () {
                function TableComponent(customerService, purchaseService, dialog, router) {
                    var _this = this;
                    this.customerService = customerService;
                    this.purchaseService = purchaseService;
                    this.dialog = dialog;
                    this.router = router;
                    this.customers = [];
                    this.purchases = [];
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
                    this.displayedColumns = [];
                    this.doFilter = function (value) {
                        _this.dataSource.filter = value.trim().toLocaleLowerCase();
                    };
                    this.router.routeReuseStrategy.shouldReuseRoute = function () {
                        return false;
                    };
                    this.mySubscription = this.router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]) {
                            // Trick the Router into believing it's last link wasn't previously loaded
                            _this.router.navigated = false;
                        }
                    });
                }
                TableComponent.prototype.ngOnInit = function () {
                    this.getCustomers();
                    this.getPurchases();
                    this.dataSource.data = this.purchases;
                    this.displayedColumns = ['customer_name', 'product', 'no_of_licenses', 'expiration_date'];
                    this.dataSource.paginator = this.paginator;
                };
                TableComponent.prototype.getCustomers = function () {
                    var _this = this;
                    this.customerService.getCustomers()
                        .subscribe(function (customers) { return _this.customers = customers; });
                };
                TableComponent.prototype.getPurchases = function () {
                    var _this = this;
                    this.purchaseService.getPurchases()
                        .subscribe(function (purchases) { return _this.purchases = purchases; });
                };
                TableComponent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                };
                TableComponent.prototype.ngOnDestroy = function () {
                    if (this.mySubscription) {
                        this.mySubscription.unsubscribe();
                    }
                };
                TableComponent.prototype.openCustomerEntry = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__["AddCustomerComponent"], {
                        width: '640px'
                    });
                    dialogRef.beforeClosed().subscribe(function () {
                        _this.router.navigate(['/table']);
                    });
                };
                TableComponent.prototype.openProductEntry = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"], {
                        width: '640px'
                    });
                    dialogRef.afterClosed().subscribe(function () {
                        _this.router.navigate(['/table']);
                    });
                };
                TableComponent.prototype.openPurchaseEntry = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(_add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_9__["AddPurchaseComponent"], {
                        width: '640px'
                    });
                    dialogRef.afterClosed().subscribe(function () {
                        _this.ngOnInit();
                    });
                };
                TableComponent.prototype.openCustomerInfo = function (purchase) {
                    var dialogRef = this.dialog.open(_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_11__["CustomerDetailComponent"], {
                        width: '640px',
                        data: { companyName: purchase.customer_name }
                    });
                };
                return TableComponent;
            }());
            TableComponent.ctorParameters = function () { return [
                { type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
                { type: _Services_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
            ], TableComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
            ], TableComponent.prototype, "paginator", void 0);
            TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")).default]
                })
            ], TableComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\dthom\License Manager\License Manager Git\Angular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
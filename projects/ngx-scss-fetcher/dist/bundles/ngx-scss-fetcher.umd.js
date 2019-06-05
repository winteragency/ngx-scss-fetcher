(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-scss-fetcher', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-scss-fetcher'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var ScssFetcherService = /** @class */ (function () {
        function ScssFetcherService() {
        }
        ScssFetcherService.prototype.get = function (parameter) {
            var element = document.createElement('meta');
            element.classList.add("fetcher-" + parameter);
            document.head.appendChild(element);
            var value = getComputedStyle(element).fontFamily.replace(/\/|\"/g, '');
            element.parentElement.removeChild(element);
            return value;
        };
        ScssFetcherService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ScssFetcherService_Factory() { return new ScssFetcherService(); }, token: ScssFetcherService, providedIn: "root" });
        ScssFetcherService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], ScssFetcherService);
        return ScssFetcherService;
    }());

    exports.ScssFetcherService = ScssFetcherService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-scss-fetcher.umd.js.map

import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';

let ScssFetcherService = class ScssFetcherService {
    get(parameter) {
        const element = document.createElement('meta');
        element.classList.add(`fetcher-${parameter}`);
        document.head.appendChild(element);
        const value = getComputedStyle(element).fontFamily.replace(/\/|\"/g, '');
        element.parentElement.removeChild(element);
        return value;
    }
};
ScssFetcherService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ScssFetcherService_Factory() { return new ScssFetcherService(); }, token: ScssFetcherService, providedIn: "root" });
ScssFetcherService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ScssFetcherService);

/*
 * Public API Surface of ngx-scss-fetcher
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ScssFetcherService };
//# sourceMappingURL=ngx-scss-fetcher.js.map

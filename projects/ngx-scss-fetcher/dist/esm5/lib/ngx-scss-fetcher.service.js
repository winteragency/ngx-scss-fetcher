import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    ScssFetcherService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScssFetcherService_Factory() { return new ScssFetcherService(); }, token: ScssFetcherService, providedIn: "root" });
    ScssFetcherService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ScssFetcherService);
    return ScssFetcherService;
}());
export { ScssFetcherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjc3MtZmV0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjc3MtZmV0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc2Nzcy1mZXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBQUE7S0FrQkM7SUFoQkMsZ0NBQUcsR0FBSCxVQUFJLFNBQWlCO1FBRW5CLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBVyxTQUFXLENBQUMsQ0FBQztRQUU5QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RSxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxPQUFPLEtBQUssQ0FBQztJQUVmLENBQUM7O0lBaEJVLGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csa0JBQWtCLENBa0I5Qjs2QkF2QkQ7Q0F1QkMsQUFsQkQsSUFrQkM7U0FsQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY3NzRmV0Y2hlclNlcnZpY2Uge1xuXG4gIGdldChwYXJhbWV0ZXI6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBmZXRjaGVyLSR7cGFyYW1ldGVyfWApO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIGNvbnN0IHZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5mb250RmFtaWx5LnJlcGxhY2UoL1xcL3xcXFwiL2csICcnKTtcblxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbn1cbiJdfQ==
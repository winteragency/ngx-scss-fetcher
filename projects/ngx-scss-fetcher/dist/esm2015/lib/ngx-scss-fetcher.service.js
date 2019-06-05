import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
ScssFetcherService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScssFetcherService_Factory() { return new ScssFetcherService(); }, token: ScssFetcherService, providedIn: "root" });
ScssFetcherService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ScssFetcherService);
export { ScssFetcherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjc3MtZmV0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNjc3MtZmV0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc2Nzcy1mZXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRTdCLEdBQUcsQ0FBQyxTQUFpQjtRQUVuQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUU5QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RSxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQyxPQUFPLEtBQUssQ0FBQztJQUVmLENBQUM7Q0FFRixDQUFBOztBQWxCWSxrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQWtCOUI7U0FsQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY3NzRmV0Y2hlclNlcnZpY2Uge1xuXG4gIGdldChwYXJhbWV0ZXI6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBmZXRjaGVyLSR7cGFyYW1ldGVyfWApO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIGNvbnN0IHZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5mb250RmFtaWx5LnJlcGxhY2UoL1xcL3xcXFwiL2csICcnKTtcblxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbn1cbiJdfQ==
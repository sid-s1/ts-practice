// // Decorators for classes - simply a function that you apply to a class in a certain way
// const Logger = (logString:string) => { // example of a decorator function
//     return function(constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// };
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// const WithTemplate = (template: string, hookId: string) => {
//     return function(_: Function) {
//         console.log("Rendering template");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//             hookEl.innerHTML = template;
//         }
//     }
// };
// // "@" special identifier that TS recognizes and the thing directly after the "@" symbol should point at a function (NOT execute it) which is the decorator
// // You will see the decorator output even if the class is not instantiated; decorator function runs when the compiler finds the class definition
// //  bottom most decorator gets executed first, but the creation of the decorator functions happens in the order they are written (Logger first in this case)
// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person</h1>","app")
// class PersonDecorators {
//     name = "Max";
//     constructor() {
//         console.log("Creating person object...");
//     }
// }
// const pers = new PersonDecorators();
// console.log(pers);
// -----------
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log("Target  > ".concat(target, " <"), "Prop name > ".concat(propertyName, "<"));
}
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    return _a = /** @class */ (function () {
            function Product(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.title = t;
                this._price = p;
            }
            Object.defineProperty(Product.prototype, "price", {
                set: function (val) {
                    if (val > 0) {
                        this._price = val;
                    }
                    else {
                        throw new Error("Invalid price - should be positive");
                    }
                },
                enumerable: false,
                configurable: true
            });
            Product.prototype.getPriceWithTax = function (tax) {
                return this._price * (1 + tax);
            };
            return Product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [Log];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();

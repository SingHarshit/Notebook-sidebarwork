(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/mockSchema.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockSchema": (()=>mockSchema)
});
const mockSchema = {
    tables: [
        {
            name: 'orders',
            columns: [
                'id',
                'customer',
                'total'
            ]
        },
        {
            name: 'users',
            columns: [
                'id',
                'name',
                'email'
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_lib_mockSchema_ts_3210b765._.js.map
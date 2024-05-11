declare function main({ profiles, runDefaultDirectives, defaultDirectives, exclude, extendOutputFormats, ...rest }?: {
    profiles?: {};
    runDefaultDirectives?: URLSearchParams;
    defaultDirectives?: URLSearchParams;
    exclude?: string;
    extendOutputFormats?: (i: any) => any;
}): import("vite").Plugin<any>;
export function run(cfg: any): (metadatas: any) => Promise<unknown>;
export { main as imagetools };

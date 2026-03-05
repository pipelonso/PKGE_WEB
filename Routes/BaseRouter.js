import { routes, pagesRoot , mainFile } from "./Definitions.js";

class BaseRouter { 

    findRoute(identifier) {

        let currentUrl = window.location.href;        
    
        currentUrl = currentUrl.replace("://", '•');        
        let currentUrlSplit = currentUrl.split("/")
        
        let path = null;
        
        if (currentUrlSplit.includes(pagesRoot)) {
            
            let indexIn = 0;

            do {
                if (currentUrlSplit[indexIn] == pagesRoot) break;
                indexIn++;
            }while(indexIn < currentUrlSplit.length)

            if (indexIn > 0) {
                currentUrlSplit[0] = currentUrlSplit[0].replace("•", "://")      
                currentUrlSplit = currentUrlSplit.slice(0, indexIn);
                path = currentUrlSplit.join("/");
            }

        }else {
            if (currentUrl.endsWith(mainFile) || currentUrl.endsWith('/')) {
                currentUrlSplit = currentUrlSplit.slice(0, currentUrlSplit.length - 1);
                currentUrlSplit[0] = currentUrlSplit[0].replace("•", "://")
                path = currentUrlSplit.join("/");
            }
        }
        
        if (path === null) {
            console.error("Route " + identifier + " was not defined")
        }else {
            let route = ''
            for (let routeIndex in routes) {    
                if (routes[routeIndex].id == identifier) {
                    route = routes[routeIndex].path
                    break;
                }
            }
            path += route
            
        }
        
        return path == null ? '' : path 

    }

}

export default BaseRouter;
import routes from "./Definitions.js";

class BaseRouter { 

    findRoute(id) {
        let route = routes.find(route => route.id === id);
        if (route == null) { 
            console.error(`Route with id ${id} not found`);
            return "";
        }
        return route;
    }

}

export default BaseRouter;
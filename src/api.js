export const mainCategory = {
    GET: "maincategory/",
};

export const subCategory = {
    GET: "subcategory/",
    GET_ID: "sub-category-list",
};
export const childCategory = {
    GET: "childcategory/",
    GET_ID: "child-category-list",
};
export const addProduct = {
    POST: "add-product",
};
export const auth = {
    POST: "accounts/login",
};
export const registeration = {
    POST: "/vendor/register",
};
/* Vendor services */
export const servicelist = {
    GET: "/vendor/services/",
}
export const delete_services = {
    DEL: (id) => { return (`/vendor/services/${id}`) },
}

export const service = {
    POST: "/vendor/service",
}
export const Editservices = {
    PATCH: (id) => { return (`/vendor/services/${id}`) },

};
/* Vendor shipping-method */

export const ShipingMethodList = {
    GET: "/vendor/shipping-method/",
}

export const AddShipingMethod = {
    POST: "/vendor/shipping-method",
}
export const DeleteShipingMethod = {
    DEL: (id) => { return (`/vendor/shipping-method/${id}`) },
}
export const EditShipingMethod = {
    PATCH: (id) => { return (`/vendor/shipping-method/${id}`) },

};

/* Vendor packaging */


export const packaging = {
    POST: "/vendor/packaging",
}

export const packaginglist = {
    GET: "/vendor/packaging/",
}
export const delete_packaging = {
    DEL: (id) => { return (`/vendor/packaging/${id}`) },
}
export const editpackaging = {
    PATCH: (id) => { return (`/vendor/packaging/${id}`) },

};

const listeners = [];

export const push = route => {
    const previousRoute = window.location.pathname;
    window.history.pushState(null, '', route);
    listeners.forEach(l => l(route, previousRoute));
};

export const listen = fn => listeners.push(fn);
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
  }));
};


const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}


const router = async () => {

  const routes = [
    { path: "/", view: Dashboard },//() => console.log("Viewing Dashboard")
    { path: "/posts", view: Posts },//() => console.log("Viewing Posts")
    { path: "/posts/:id", view: PostView },
    { path: "/settings", view: Settings },//() => console.log("Viewing Settings")
  ];


  //Test each route for potentional match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
      //isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  //let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if(!match) {
    match = {
      route:  routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

  //console.log(match.route.view());

};

//window. <-- window object will not work if ES6 modules are enabled
//This is because the window and document objects are browser objects(client env)
//and node(as a server env) does not have access to them
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

  document.body.addEventListener("click", e => {
    //console.log("click is working")
    if(e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
  })
  router();
});

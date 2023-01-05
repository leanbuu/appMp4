
import config from '../config';
import CaNhan from '../pages/CaNhan/CaNhan';
import KhamPha from '../pages/KhamPha/KhamPha';
import Zing from '../pages/Zing/Zing';
import Radio from '../pages/Radio/Radio';
import TheoDoi from '../pages/TheoDoi/TheoDoi';



const publicRoutes = [
   { path: config.routes.canhan, component: CaNhan },
   { path: config.routes.khampha, component: KhamPha },
   { path: config.routes.zing, component: Zing },
   { path: config.routes.radio, component: Radio },
   { path: config.routes.theodoi, component: TheoDoi}

   
];


const privateRoutes = [
];

export { publicRoutes, privateRoutes }

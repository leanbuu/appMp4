
import config from '../config';
import CaNhan from '../pages/CaNhan/CaNhan';
import KhamPha from '../pages/KhamPha/KhamPha';
import Zing from '../pages/Zing/Zing';
import TheoDoi from '../pages/TheoDoi/TheoDoi';
import MV from '../pages/MV/MV';



const publicRoutes = [
   { path: config.routes.canhan, component: CaNhan },
   { path: config.routes.khampha, component: KhamPha },
   { path: config.routes.zing, component: Zing },
   { path: config.routes.mv, component: MV },
   { path: config.routes.theodoi, component: TheoDoi}

   
];


const privateRoutes = [
];

export { publicRoutes, privateRoutes }

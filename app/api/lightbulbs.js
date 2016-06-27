import store from '../store';
import service from './service';

function getLightbulbs() {
  const { email } = store;
  return service.get(`/user/${email}/lightbulbs`);
}

function addLightbulb(name, serialnumber) {
  const { email } = store;
  const body = {
    link: true,
    serialnumber,
  };
  return service.post(`/user/${email}/lightbulbs`, body);
}

export default {
  addLightbulb,
  getLightbulbs,
};

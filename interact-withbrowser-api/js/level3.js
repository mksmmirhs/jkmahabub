const getElementValueByID = id => {
  const doCumentField = document.getElementById(id);
  const value = doCumentField.value;
  doCumentField.value = '';
  return value;
};
const clearValueByKey = key => {
  localStorage.removeItem(key);
};

const setValueByKey = (key, value) => {
  localStorage.setItem(key, value);
};
const getItemByKey = key => {
  return localStorage.getItem(key);
};
const removeName = key => {
  clearValueByKey(key);
};
const sendName = key => {
  setValueByKey(key, getElementValueByID('name'));
};

const dleteEmail = key => {
  clearValueByKey(key);
};
const sendEmail = key => {
  setValueByKey(key, getElementValueByID('email'));
};

const deleteMessage = key => {
  clearValueByKey(key);
};
const sendMessage = key => {
  setValueByKey(key, getElementValueByID('message'));
};
const resetAll = () => {
  localStorage.clear();
};
const SendAll = () => {
  const objectAll = {
    name: getElementValueByID('name'),
    email: getElementValueByID('email'),
    message: getElementValueByID('message'),
  };

  localStorage.setItem('object', JSON.stringify(objectAll));
};
const setValueToDom = (id, value) => {
  const doCumentField = document.getElementById(id);
  doCumentField.value = value;
};
const setValueFromLocal = () => {
  const getObj = localStorage.getItem('object');
  if (getObj) {
    const element = JSON.parse(getObj);
    for (id in element) {
      setValueToDom(id, element[id]);
    }
  }
};
setValueFromLocal();

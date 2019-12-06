export default (model, valueId) => {
  return model.find(obj => obj.id == valueId);
};
